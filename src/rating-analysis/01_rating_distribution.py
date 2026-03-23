%pyspark
# Task 1: Analyze the distribution of ratings (1-5 stars)
rating_dist = review.groupBy("rev_stars") \
    .count() \
    .withColumnRenamed("rev_stars", "star_rating") \
    .withColumnRenamed("count", "review_count") \
    .withColumn("percentage",
        F.round(F.col("review_count") * 100.0 /
        review.count(), 2)) \
    .orderBy("star_rating")

rating_dist.show()
z.show(rating_dist)