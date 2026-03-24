%pyspark
from pyspark.sql import functions as F

business_df = spark.table("business")
review_df = spark.table("review")

# Step 1: Get max date first separately
max_date = review_df.agg(F.max("date")).collect()[0][0]
print(f"Max date in dataset: {max_date}")

# Step 2: Historical average (all time)
historical_avg = review_df \
    .groupBy("business_id") \
    .agg(F.avg("stars").alias("historical_avg"))

# Step 3: Last 12 months average
recent_avg = review_df \
    .filter(F.col("date") >= F.add_months(F.lit(max_date), -12)) \
    .groupBy("business_id") \
    .agg(F.avg("stars").alias("recent_avg"))

# Step 4: Find turnaround merchants
result = historical_avg \
    .join(recent_avg, "business_id") \
    .filter(F.col("recent_avg") - F.col("historical_avg") >= 1) \
    .join(business_df.select("business_id", "name"), "business_id") \
    .select(
        F.col("name").alias("Business Name"),
        F.round("historical_avg", 2).alias("Historical Avg"),
        F.round("recent_avg", 2).alias("Recent Avg (Last 12 Months)"),
        F.round(F.col("recent_avg") - F.col("historical_avg"), 2).alias("Improvement")
    ) \
    .orderBy("Improvement", ascending=False)

print("=== Turnaround Merchants ===")
result.show(20)
z.show(result)