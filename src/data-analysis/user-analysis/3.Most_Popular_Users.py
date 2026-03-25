%pyspark
# 3. Most Popular Users Based on Fans

df_users = spark.table("users")

df_top_fans = df_users \
    .select("user_id", "user_name", "user_fans") \
    .orderBy(F.desc("user_fans")) \
    .limit(10)

df_top_fans.show()
z.show(df_top_fans)