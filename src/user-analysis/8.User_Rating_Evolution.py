%pyspark
# 8. User Rating Evolution: First Year vs Third Year (Fixed)

# Step 1: Get user join year
df_user_year = user_df \
    .withColumn("join_year", year(to_date("user_yelping_since"))) \
    .select("user_id", "join_year")

# Step 2: Join reviews with user join year
df_reviews_year = review_df \
    .withColumn("review_year", year(col("rev_date"))) \
    .join(df_user_year, review_df.rev_user_id == df_user_year.user_id)

# Step 3: First year vs third year avg stars
df_first_year = df_reviews_year \
    .filter(col("review_year") == col("join_year")) \
    .groupBy("rev_user_id") \
    .agg(avg("rev_stars").alias("avg_stars_year_1"))

df_third_year = df_reviews_year \
    .filter(col("review_year") == col("join_year") + 2) \
    .groupBy("rev_user_id") \
    .agg(avg("rev_stars").alias("avg_stars_year_3"))

# Step 4: Compare
df_evolution = df_first_year \
    .join(df_third_year, "rev_user_id") \
    .withColumn("star_change", round(col("avg_stars_year_3") - col("avg_stars_year_1"), 3)) \
    .join(user_df.select("user_id", "user_name"), col("rev_user_id") == col("user_id")) \
    .orderBy("star_change")

df_evolution.show()
z.show(df_evolution)