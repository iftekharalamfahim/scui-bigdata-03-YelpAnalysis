%pyspark
# Task 4: Rank all businesses based on check-in counts
# Algorithm: Window Function (RANK OVER ORDER BY checkin_count DESC)

# Step 1: Explode checkin_dates and count check-ins per business
checkin_counts = checkin \
    .withColumn("date", F.explode(F.split("checkin_dates", ","))) \
    .groupBy("business_id") \
    .agg(F.count("*").alias("checkin_count"))

# Step 2: Join with business table to get business name
checkin_with_info = checkin_counts \
    .join(
        business.select(
            "business_id",
            F.substring("name", 1, 20).alias("business_name")
        ),
        "business_id", "left"
    ) \
    .filter(F.col("business_name").isNotNull())

# Step 3: Apply window rank function ordered by checkin_count descending
window = Window.orderBy(F.col("checkin_count").desc())

business_ranked = checkin_with_info \
    .withColumn("rank", F.rank().over(window)) \
    .select("rank", "business_name", "checkin_count") \
    .orderBy("rank") \
    .limit(30)

z.show(business_ranked)