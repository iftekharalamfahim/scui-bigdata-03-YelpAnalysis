%pyspark
from pyspark.sql import functions as F

business_df = spark.table("business")
review_df = spark.table("review")

result = review_df \
    .groupBy("business_id") \
    .agg(
        F.count("stars").alias("review_count"),
        F.stddev("stars").alias("std_dev"),
        F.avg("stars").alias("avg_rating")
    ) \
    .filter(F.col("review_count") >= 100) \
    .join(business_df.select("business_id", "name"), "business_id") \
    .select(
        F.col("name").alias("Business Name"),
        F.col("review_count").alias("Review Count"),
        F.round("avg_rating", 2).alias("Average Rating"),
        F.round("std_dev", 2).alias("Std Deviation")
    ) \
    .orderBy("Std Deviation", ascending=False) \
    .limit(20)

print("=== Polarizing Businesses ===")
result.show(20)
z.show(result)
