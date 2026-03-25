%pyspark
import pyspark.sql.functions as F

# Step 1: Count total check-ins per business
checkin_counts = spark.table("checkin") \
    .withColumn("checkin_date", F.explode(F.split(F.col("date"), ","))) \
    .groupBy("business_id") \
    .agg(F.count("*").alias("total_checkins")) \
    .orderBy(F.col("total_checkins").desc()) \
    .limit(100)

# Step 2: Count total reviews per business
review_counts = spark.table("yelp.review") \
    .groupBy("rev_business_id") \
    .agg(F.count("*").alias("total_reviews"))

# Step 3: Join checkins + reviews + business name
biz = spark.table("business").select(
    "business_id",
    F.substring("name", 1, 25).alias("business_name"),
    "city",
    "state",
    "stars"
)

result = checkin_counts \
    .join(review_counts,
          checkin_counts.business_id == review_counts.rev_business_id,
          "left") \
    .join(biz, "business_id", "left") \
    .filter(F.col("business_name").isNotNull()) \
    .filter(F.col("total_reviews") > 0) \
    .withColumn(
        "conversion_rate",
        F.round(F.col("total_checkins") / F.col("total_reviews"), 3)
    ) \
    .select(
        "business_name",
        "city",
        "state",
        "stars",
        "total_checkins",
        "total_reviews",
        "conversion_rate"
    ) \
    .orderBy(F.col("conversion_rate").desc())

print("=== VI-2: Review Conversion Rate (Top 100 Most Checked-in Businesses) ===")
print("Higher rate = more physical visits | Lower rate = more online feedback")
z.show(result)