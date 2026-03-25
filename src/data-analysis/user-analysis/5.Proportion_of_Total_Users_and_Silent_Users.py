%pyspark

# 5. Proportion of Total Users and Silent Users Each Year

df_users = spark.table("users")

df_silent_users = df_users \
    .withColumn("year", F.year(F.to_date("user_yelping_since"))) \
    .withColumn("is_silent", F.when(F.col("user_review_count") == 0, 1).otherwise(0)) \
    .groupBy("year") \
    .agg(
        F.count("user_id").alias("total_users"),
        F.sum("is_silent").alias("silent_users")
    ) \
    .withColumn("active_users", F.col("total_users") - F.col("silent_users")) \
    .withColumn("silent_ratio", F.round(F.col("silent_users") / F.col("total_users") * 100, 2)) \
    .withColumn("active_ratio", F.round(F.col("active_users") / F.col("total_users") * 100, 2)) \
    .orderBy("year")

df_silent_users.show()
z.show(df_silent_users)