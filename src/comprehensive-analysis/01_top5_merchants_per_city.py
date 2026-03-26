%pyspark
from pyspark.sql.functions import col, size, split, count, avg, dense_rank
from pyspark.sql.window import Window

# Correctly count checkins by splitting comma-separated dates
checkin_df = spark.table("checkin")
checkin_counts = checkin_df.withColumn(
    "checkin_count", 
    size(split(col("date"), ","))
).groupBy("business_id") \
 .agg({"checkin_count": "sum"}) \
 .withColumnRenamed("sum(checkin_count)", "checkin_count")

# Get business data
biz = spark.table("business")

# Join
combined = biz.join(checkin_counts, "business_id", "left") \
    .fillna(0, subset=["checkin_count"]) \
    .filter(col("city").isNotNull()) \
    .filter(col("review_count") > 10)

# Normalize and combine metrics
max_reviews = combined.agg({"review_count": "max"}).collect()[0][0]
max_checkins = combined.agg({"checkin_count": "max"}).collect()[0][0]

scored = combined.withColumn(
    "combined_score",
    (col("stars") / 5.0) * 0.4 +
    (col("review_count") / max_reviews) * 0.3 +
    (col("checkin_count") / max_checkins) * 0.3
)

# Rank within each city
window = Window.partitionBy("city").orderBy(col("combined_score").desc())

result = scored.withColumn("rank", dense_rank().over(window)) \
    .filter(col("rank") <= 5) \
    .select(
        col("city"),
        col("rank"),
        col("name"),
        col("stars"),
        col("review_count"),
        col("checkin_count"),
        col("combined_score")
    ) \
    .orderBy("city", "rank")

print("=== Top 5 Merchants Per City (Combined Score) ===")
z.show(result)