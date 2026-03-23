%pyspark

# 7. Early Adopters / Tastemakers

# Step 1: Find businesses with 4.5+ avg stars and 100+ reviews
df_quality_biz = business_df \
    .filter((col("stars") >= 4.5) & (col("review_count") >= 100)) \
    .select("business_id")

# Step 2: Rank reviews per business by date
df_ranked = review_df \
    .join(df_quality_biz, review_df.rev_business_id == df_quality_biz.business_id) \
    .withColumn("review_rank", rank().over(
        Window.partitionBy("rev_business_id").orderBy("rev_date")
    ))

# Step 3: Keep only first 5 reviews per business
df_early = df_ranked \
    .filter(col("review_rank") <= 5)

# Step 4: Count how many times each user was an early reviewer
df_tastemakers = df_early \
    .groupBy("rev_user_id") \
    .agg(count("review_id").alias("early_review_count")) \
    .join(user_df.select("user_id", "user_name"), col("rev_user_id") == col("user_id")) \
    .orderBy(desc("early_review_count")) \
    .limit(20)

df_tastemakers.show()
z.show(df_tastemakers)