%pyspark
# Task 5: Review Autopsy - NLP Pain Point Analysis
# For closed businesses in cursed locations, analyze the most common
# pain points mentioned in reviews before closure

from pyspark.sql import functions as F

# Load tables from Hive
business_df = spark.table("yelp.business")
reviews_df  = spark.table("yelp.review")

# Step 1: Identify cursed storefronts
# Addresses that had multiple different businesses open and close
cursed_storefronts = business_df \
    .groupBy("address", "city", "state") \
    .agg(
        F.count("business_id").alias("total_businesses"),
        F.sum(F.when(F.col("is_open") == 0, 1).otherwise(0)).alias("closed_count")
    ) \
    .filter(
        (F.col("total_businesses") > 1) &
        (F.col("closed_count") > 1)
    )

# Step 2: Get closed businesses in cursed locations
closed_cursed = cursed_storefronts \
    .join(business_df, ["address", "city", "state"], "inner") \
    .filter(F.col("is_open") == 0) \
    .select("business_id", "name", "address", "city")

print("Closed businesses in cursed locations: {}".format(closed_cursed.count()))

# Step 3: Get reviews for these closed businesses
cursed_reviews = closed_cursed \
    .join(
        reviews_df,
        closed_cursed.business_id == reviews_df.rev_business_id,
        "inner"
    ) \
    .select(
        closed_cursed.business_id,
        F.col("name"),
        F.col("address"),
        F.col("city"),
        F.col("rev_text").alias("text"),
        F.col("rev_stars").alias("stars"),
        F.col("rev_date").alias("date")
    )

print("Total reviews: {}".format(cursed_reviews.count()))

# Step 4: Count pain point keywords in review text
parking_count   = cursed_reviews.filter(F.lower(F.col("text")).contains("parking")).count()
hidden_count    = cursed_reviews.filter(F.lower(F.col("text")).contains("hidden")).count()
noise_count     = cursed_reviews.filter(F.lower(F.col("text")).contains("noise")).count()
expensive_count = cursed_reviews.filter(F.lower(F.col("text")).contains("expensive")).count()
location_count  = cursed_reviews.filter(F.lower(F.col("text")).contains("location")).count()
service_count   = cursed_reviews.filter(F.lower(F.col("text")).contains("slow service")).count()

print("\n" + "=" * 70)
print("REVIEW AUTOPSY - PAIN POINT ANALYSIS")
print("=" * 70)

# Step 5: Create pain point dataframe and show chart
pain_data = [
    ("Parking Issues",   parking_count),
    ("Hidden Location",  hidden_count),
    ("Noise Complaints", noise_count),
    ("Price Issues",     expensive_count),
    ("Bad Location",     location_count),
    ("Slow Service",     service_count)
]

pain_df = spark.createDataFrame(
    pain_data, ["Pain_Point", "Count"]
).orderBy(F.col("Count").desc())

print("\nChart: Pain Point Distribution")
z.show(pain_df)