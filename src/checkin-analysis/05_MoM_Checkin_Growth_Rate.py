%pyspark
# Task 5: Calculate month-over-month (MoM) check-in growth rate
# for the top 50 restaurants in a specific city to identify trending locations
# Algorithm: Window Function (LAG OVER PARTITION BY business_id ORDER BY year, month)
# MoM Growth = (current_month - previous_month) / previous_month * 100

TARGET_CITY = "Philadelphia"

# Step 1: Get top 50 restaurants in target city by total check-ins
top50 = checkin \
    .withColumn("date", F.explode(F.split("checkin_dates", ","))) \
    .groupBy("business_id") \
    .agg(F.count("*").alias("total_checkins")) \
    .join(
        business.filter(
            (F.col("city") == TARGET_CITY) &
            (F.col("categories").like("%Restaurants%"))
        ).select("business_id",
                 F.substring("name", 1, 20).alias("business_name")),
        "business_id", "inner"
    ) \
    .orderBy(F.col("total_checkins").desc()) \
    .limit(50)

top50_ids = [row["business_id"] for row in top50.collect()]

# Step 2: Get monthly check-in counts for these top 50
monthly = checkin \
    .withColumn("date", F.explode(F.split("checkin_dates", ","))) \
    .withColumn("ts", F.to_timestamp(F.trim(F.col("date")))) \
    .withColumn("year",  F.year("ts")) \
    .withColumn("month", F.month("ts")) \
    .filter(F.col("business_id").isin(top50_ids)) \
    .groupBy("business_id", "year", "month") \
    .agg(F.count("*").alias("monthly_checkins"))

# Step 3: Apply LAG window function to get previous month checkins
window = Window.partitionBy("business_id").orderBy("year", "month")

mom_growth = monthly \
    .withColumn("prev_checkins", F.lag("monthly_checkins").over(window)) \
    .withColumn("mom_growth_pct",
        F.round(
            (F.col("monthly_checkins") - F.col("prev_checkins")) /
            F.col("prev_checkins") * 100, 2)
    ) \
    .join(top50.select("business_id", "business_name"), "business_id") \
    .filter(F.col("prev_checkins").isNotNull()) \
    .select("business_name", "year", "month",
            "monthly_checkins", "prev_checkins", "mom_growth_pct") \
    .orderBy(F.col("mom_growth_pct").desc()) \
    .limit(30)

print(f"--- MoM Check-in Growth Rate: Top 50 Restaurants in {TARGET_CITY} ---")
z.show(mom_growth)