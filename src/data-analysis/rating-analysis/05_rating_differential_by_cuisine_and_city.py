%pyspark
# Task 5: Calculate the rating differential
# Algorithm: Window Function (AVG OVER PARTITION BY city, cuisine)

CUISINE_LIST = [
    'American', 'Mexican', 'Italian', 'Japanese', 'Chinese', 'Thai',
    'Mediterranean', 'French', 'Vietnamese', 'Greek', 'Indian',
    'Korean', 'Hawaiian', 'African', 'Spanish', 'Middle Eastern'
]

# Step 1: Explode categories so each cuisine gets its own row per business
biz_exploded = business \
    .filter(
        F.col("categories").isNotNull() &
        F.col("stars").isNotNull() &
        F.col("city").isNotNull()
    ) \
    .select(
        "business_id",
        F.substring("name", 1, 25).alias("business_name"),
        "city",
        "state",
        "stars",
        F.explode(F.split("categories", ",")).alias("cuisine")
    ) \
    .withColumn("cuisine", F.trim(F.col("cuisine"))) \
    .filter(F.col("cuisine").isin(CUISINE_LIST))

# Step 2: Compute each merchant's actual average from review table
merchant_avg = review \
    .groupBy("rev_business_id") \
    .agg(F.round(F.avg("rev_stars"), 3).alias("merchant_avg_rating"))

# Step 3: Join merchant avg ratings with exploded business cuisine data
biz_with_avg = biz_exploded.join(
    merchant_avg,
    biz_exploded.business_id == merchant_avg.rev_business_id,
    "left"
).drop("rev_business_id")

# Step 4: Window function — compute overall cuisine average within each city
window = Window.partitionBy("city", "cuisine")

rating_diff = biz_with_avg \
    .withColumn(
        "city_cuisine_avg",
        F.round(F.avg("merchant_avg_rating").over(window), 3)
    ) \
    .withColumn(
        "rating_differential",
        F.round(F.col("merchant_avg_rating") - F.avg("merchant_avg_rating").over(window), 3)
    ) \
    .select(
        "business_name",
        "cuisine",
        "city",
        "state",
        F.round("merchant_avg_rating", 2).alias("merchant_avg_stars"),
        "city_cuisine_avg",
        "rating_differential"
    ) \
    .filter(F.col("merchant_avg_rating").isNotNull()) \
    .orderBy(F.col("rating_differential").desc()) \
    .limit(30)

z.show(rating_diff)