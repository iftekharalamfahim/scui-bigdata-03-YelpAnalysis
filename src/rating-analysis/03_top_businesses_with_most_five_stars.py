%pyspark
# Task 3: Identify the top businesses with the most five-star ratings
top_five_star = review \
    .filter(F.col("rev_stars") == 5) \
    .join(business, review.rev_business_id == business.business_id) \
    .groupBy(F.substring(business.name, 1, 20).alias("business_name")) \
    .agg(F.count("review_id").alias("five_star_count")) \
    .orderBy(F.col("five_star_count").desc()) \
    .limit(20)

z.show(top_five_star)