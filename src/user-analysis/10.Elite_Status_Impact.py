# 10. Elite Status Impact on Review Length and Useful Votes

# Step 1: Extract first elite year per user
df_elite_year = user_df \
    .filter((col("user_elite").isNotNull()) & (col("user_elite") != "")) \
    .withColumn("elite_years_list", split("user_elite", ",")) \
    .withColumn("first_elite_year", array_min(
        expr("transform(elite_years_list, x -> cast(trim(x) as int))")
    )) \
    .select("user_id", "first_elite_year")

# Step 2: Join reviews with elite year
df_reviews_elite = review_df \
    .withColumn("review_year", year(col("rev_date"))) \
    .withColumn("word_count", size(split(col("rev_text"), " "))) \
    .join(df_elite_year, review_df.rev_user_id == df_elite_year.user_id) \
    .withColumn("status", when(
        col("review_year") < col("first_elite_year"), "before_elite"
    ).otherwise("after_elite"))

# Step 3: Aggregate avg word count and avg useful votes
df_elite_impact = df_reviews_elite \
    .groupBy("status") \
    .agg(
        round(avg("word_count"), 2).alias("avg_word_count"),
        round(avg("rev_useful"), 2).alias("avg_useful_votes"),
        count("review_id").alias("total_reviews")
    )

df_elite_impact.show()
z.show(df_elite_impact)