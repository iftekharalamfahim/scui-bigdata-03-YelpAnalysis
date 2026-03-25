%pyspark
# 2. Top Reviewers Based on Review Count

df_users = spark.table("users")

df_top_reviewers = df_users \
    .select("user_id", "user_name", "user_review_count") \
    .orderBy(F.desc("user_review_count")) \
    .limit(10)

df_top_reviewers.show()
z.show(df_top_reviewers)