%pyspark

#  9. Dining Diversity — Top 50 Most Adventurous Eaters (Fixed)

# Step 1: Join reviews with business categories
df_diversity = review_df \
    .join(business_df.select("business_id", "categories"),
          review_df.rev_business_id == business_df.business_id) \
    .filter(col("categories").isNotNull()) \
    .withColumn("category", explode(split("categories", ", ")))

# Step 2: Count distinct categories per user (min 20 reviews)
df_adventurous = df_diversity \
    .groupBy("rev_user_id") \
    .agg(
        countDistinct("category").alias("distinct_cuisines"),
        count("review_id").alias("total_reviews")
    ) \
    .filter(col("total_reviews") >= 20) \
    .join(user_df.select("user_id", "user_name"), col("rev_user_id") == col("user_id")) \
    .orderBy(desc("distinct_cuisines")) \
    .limit(50)

df_adventurous.show()
z.show(df_adventurous)