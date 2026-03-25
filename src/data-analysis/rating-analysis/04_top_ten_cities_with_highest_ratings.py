%pyspark
# Task 4: Identify the top 10 cities with the highest ratings
top_cities = business \
    .filter(F.col("city").isNotNull() & F.col("stars").isNotNull()) \
    .groupBy("city") \
    .agg(
        F.round(F.avg("stars"), 3)  .alias("avg_rating"),
        F.count("business_id")      .alias("merchant_count")
    ) \
    .filter(F.col("merchant_count") >= 50) \
    .orderBy(F.col("avg_rating").desc()) \
    .limit(10)

z.show(top_cities)