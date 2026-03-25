%pyspark
from pyspark.sql import functions as F
from pyspark.sql.window import Window

business_df = spark.table("business")
review_df = spark.table("review")
checkin_df = spark.table("checkin")

# ============================================================
# Task VI-3: Post 1-Star Spike Check-in Drop-off Analysis
# For businesses that received a sudden spike in 1-star reviews
# within a single week, calculate the percentage drop in their
# check-in volume in the following month.
# ============================================================

# Step 1: Count 1-star reviews per business per week
print("Step 1: Counting 1-star reviews per business per week...")
weekly_1star = review_df \
    .filter(F.col("stars") == 1) \
    .withColumn("week", F.date_trunc("week", F.col("date"))) \
    .groupBy("business_id", "week") \
    .agg(F.count("*").alias("weekly_1star_count"))

# Step 2: Find average weekly 1-star reviews per business
print("Step 2: Calculating average weekly 1-star reviews per business...")
avg_weekly_1star = weekly_1star \
    .groupBy("business_id") \
    .agg(F.avg("weekly_1star_count").alias("avg_weekly_1star"))

# Step 3: Identify spike weeks (3x above average = spike)
print("Step 3: Identifying spike weeks (3x above average)...")
spike_weeks = weekly_1star \
    .join(avg_weekly_1star, "business_id") \
    .filter(F.col("weekly_1star_count") >= F.col("avg_weekly_1star") * 3) \
    .filter(F.col("avg_weekly_1star") >= 1) \
    .groupBy("business_id") \
    .agg(F.min("week").alias("spike_week"))

spike_count = spike_weeks.count()
print(f"Total businesses with 1-star spikes: {spike_count}")

# Step 4: Explode checkin dates
print("Step 4: Exploding checkin dates...")
checkin_exploded = checkin_df \
    .select(
        "business_id",
        F.explode(F.split(F.col("date"), ", ")).alias("checkin_date")
    ) \
    .withColumn("checkin_date", F.to_timestamp("checkin_date"))

# Step 5: Count checkins BEFORE spike week (30 days before)
print("Step 5: Counting checkins 30 days before spike...")
checkins_before = checkin_exploded \
    .join(spike_weeks, "business_id") \
    .filter(
        (F.col("checkin_date") >= F.date_sub(F.col("spike_week"), 30)) &
        (F.col("checkin_date") < F.col("spike_week"))
    ) \
    .groupBy("business_id") \
    .agg(F.count("*").alias("checkins_before"))

# Step 6: Count checkins AFTER spike week (30 days after)
print("Step 6: Counting checkins 30 days after spike...")
checkins_after = checkin_exploded \
    .join(spike_weeks, "business_id") \
    .filter(
        (F.col("checkin_date") >= F.col("spike_week")) &
        (F.col("checkin_date") < F.date_add(F.col("spike_week"), 30))
    ) \
    .groupBy("business_id") \
    .agg(F.count("*").alias("checkins_after"))

# Step 7: Calculate percentage change with minimum 10 checkins filter
print("Step 7: Calculating percentage change...")
result = checkins_before \
    .join(checkins_after, "business_id", "left") \
    .fillna(0, subset=["checkins_after"]) \
    .withColumn(
        "pct_drop",
        F.round(
            (F.col("checkins_before") - F.col("checkins_after")) /
            F.col("checkins_before") * 100,
            2
        )
    ) \
    .filter(F.col("checkins_before") >= 10) \
    .join(business_df.select("business_id", "name", "city", "state"), "business_id") \
    .withColumn(
        "Impact Category",
        F.when(F.col("pct_drop") > 0, "Drop in Checkins")
         .when(F.col("pct_drop") == 0, "No Change")
         .otherwise("Increase in Checkins")
    ) \
    .select(
        F.col("name").alias("Business Name"),
        F.col("city").alias("City"),
        F.col("state").alias("State"),
        F.col("checkins_before").alias("Checkins Before Spike"),
        F.col("checkins_after").alias("Checkins After Spike"),
        F.col("pct_drop").alias("% Change in Checkins"),
        F.col("Impact Category")
    ) \
    .orderBy("% Change in Checkins", ascending=False)

# ============================================================
# Output 1: Full results
# ============================================================
print("\n=== Post 1-Star Spike Check-in Drop-off Analysis ===")
result.show(20)
z.show(result)

# ============================================================
# Output 2: Summary by impact category
# ============================================================
print("\n=== Summary by Impact Category ===")
category_summary = result \
    .groupBy("Impact Category") \
    .agg(
        F.count("*").alias("Business Count"),
        F.round(F.avg("% Change in Checkins"), 2).alias("Avg % Change"),
        F.round(F.max("% Change in Checkins"), 2).alias("Max % Change"),
        F.round(F.min("% Change in Checkins"), 2).alias("Min % Change")
    ) \
    .orderBy("Business Count", ascending=False)

category_summary.show()
z.show(category_summary)

# ============================================================
# Output 3: Businesses that DROPPED
# ============================================================
print("\n=== Businesses With Drop in Checkins ===")
dropped = result \
    .filter(F.col("Impact Category") == "Drop in Checkins") \
    .agg(
        F.count("*").alias("Total Businesses"),
        F.round(F.avg("% Change in Checkins"), 2).alias("Avg % Drop"),
        F.round(F.max("% Change in Checkins"), 2).alias("Max % Drop"),
        F.round(F.min("% Change in Checkins"), 2).alias("Min % Drop")
    )
dropped.show()
z.show(dropped)

# ============================================================
# Output 4: Businesses that INCREASED (curiosity effect)
# ============================================================
print("\n=== Businesses With Increase in Checkins (Curiosity Effect) ===")
increased = result \
    .filter(F.col("Impact Category") == "Increase in Checkins") \
    .select(
        "Business Name",
        "City",
        "State",
        "Checkins Before Spike",
        "Checkins After Spike",
        "% Change in Checkins"
    ) \
    .orderBy("% Change in Checkins", ascending=True) \
    .limit(20)
increased.show()
z.show(increased)

# ============================================================
# Output 5: Overall summary statistics
# ============================================================
print("\n=== Overall Summary Statistics ===")
overall_summary = result \
    .agg(
        F.count("*").alias("Total Businesses Analyzed"),
        F.sum(F.when(F.col("Impact Category") == "Drop in Checkins", 1).otherwise(0))
         .alias("Businesses With Drop"),
        F.sum(F.when(F.col("Impact Category") == "Increase in Checkins", 1).otherwise(0))
         .alias("Businesses With Increase"),
        F.sum(F.when(F.col("Impact Category") == "No Change", 1).otherwise(0))
         .alias("Businesses With No Change"),
        F.round(F.avg(
            F.when(F.col("Impact Category") == "Drop in Checkins",
                   F.col("% Change in Checkins"))
        ), 2).alias("Avg Drop %"),
        F.round(F.avg(
            F.when(F.col("Impact Category") == "Increase in Checkins",
                   F.col("% Change in Checkins"))
        ), 2).alias("Avg Increase %")
    )
overall_summary.show()
z.show(overall_summary)