%pyspark
# 4. Ratio of Elite Users to Regular Users Each Year

df_users = spark.table("users")

df_elite_ratio = df_users \
    .withColumn("year", F.year(F.to_date("user_yelping_since"))) \
    .withColumn("is_elite", F.when(
        (F.col("user_elite").isNotNull()) & (F.col("user_elite") != ""), 1
    ).otherwise(0)) \
    .groupBy("year") \
    .agg(
        F.count("user_id").alias("total_users"),
        F.sum("is_elite").alias("elite_users")
    ) \
    .withColumn("regular_users", F.col("total_users") - F.col("elite_users")) \
    .withColumn("elite_ratio", F.round(F.col("elite_users") / F.col("total_users") * 100, 2)) \
    .orderBy("year")

df_elite_ratio.show()
z.show(df_elite_ratio)