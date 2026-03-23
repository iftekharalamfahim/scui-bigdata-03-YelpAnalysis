%pyspark
# Task 2: Analyze the weekly rating frequency (Monday to Sunday)
weekly_rating = review \
    .withColumn("day_of_week",
        F.when(F.dayofweek("rev_date") == 2, "1-Mon")
        .when(F.dayofweek("rev_date") == 3, "2-Tue")
        .when(F.dayofweek("rev_date") == 4, "3-Wed")
        .when(F.dayofweek("rev_date") == 5, "4-Thu")
        .when(F.dayofweek("rev_date") == 6, "5-Fri")
        .when(F.dayofweek("rev_date") == 7, "6-Sat")
        .when(F.dayofweek("rev_date") == 1, "7-Sun")
    ) \
    .filter(F.col("rev_date").isNotNull()) \
    .groupBy("day_of_week") \
    .agg(
        F.count("*")                    .alias("review_count"),
        F.round(F.avg("rev_stars"), 3)  .alias("avg_rating")
    ) \
    .orderBy("day_of_week")

z.show(weekly_rating)