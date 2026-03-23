%pyspark
# Task 6: Compare weekend vs weekday satisfaction for the Nightlife category
# Weekend = Saturday(7) and Sunday(1) in Spark dayofweek function

# Step 1: Filter Nightlife businesses
nightlife_biz = business.filter(F.col("categories").like("%Nightlife%"))

# Step 2: Join with reviews
nightlife_reviews = review \
    .join(nightlife_biz, review.rev_business_id == nightlife_biz.business_id) \
    .filter(F.col("rev_date").isNotNull())

# Part A: Weekend vs Weekday summary
nightlife_summary = nightlife_reviews \
    .withColumn("day_type",
        F.when(F.dayofweek("rev_date").isin(1, 7), "Weekend")
        .otherwise("Weekday")) \
    .groupBy("day_type") \
    .agg(
        F.count("review_id")            .alias("review_count"),
        F.round(F.avg("rev_stars"), 3)  .alias("avg_rating")
    ) \
    .orderBy("day_type")

print("--- Weekend vs Weekday ---")
z.show(nightlife_summary)

# Part B: Daily breakdown
nightlife_daily = nightlife_reviews \
    .withColumn("day_of_week",
        F.when(F.dayofweek("rev_date") == 2, "1-Mon")
        .when(F.dayofweek("rev_date") == 3, "2-Tue")
        .when(F.dayofweek("rev_date") == 4, "3-Wed")
        .when(F.dayofweek("rev_date") == 5, "4-Thu")
        .when(F.dayofweek("rev_date") == 6, "5-Fri")
        .when(F.dayofweek("rev_date") == 7, "6-Sat")
        .when(F.dayofweek("rev_date") == 1, "7-Sun")
    ) \
    .groupBy("day_of_week") \
    .agg(
        F.count("review_id")            .alias("review_count"),
        F.round(F.avg("rev_stars"), 3)  .alias("avg_rating")
    ) \
    .orderBy("day_of_week")

print("--- Daily Breakdown ---")
z.show(nightlife_daily)