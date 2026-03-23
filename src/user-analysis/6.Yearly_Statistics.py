%pyspark\
# 6. Yearly Statistics of New Users, Reviews, Elite Users

df_users = spark.table("users")

df_yearly_stats = df_users \
    .withColumn("year", F.year(F.to_date("user_yelping_since"))) \
    .withColumn("is_elite", F.when(
        (F.col("user_elite").isNotNull()) & (F.col("user_elite") != ""), 1
    ).otherwise(0)) \
    .groupBy("year") \
    .agg(
        F.count("user_id").alias("new_users"),
        F.sum("user_review_count").alias("total_reviews"),
        F.sum("is_elite").alias("elite_users"),
        F.avg("user_review_count").alias("avg_reviews_per_user"),
        F.avg("user_average_stars").alias("avg_stars")
    ) \
    .orderBy("year")

df_yearly_stats.show()
z.show(df_yearly_stats)