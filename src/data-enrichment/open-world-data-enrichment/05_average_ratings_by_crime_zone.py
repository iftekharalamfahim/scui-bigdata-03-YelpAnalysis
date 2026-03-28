%pyspark
# Analyze average star ratings and review volume by crime zone
# Algorithm: Descriptive Statistics — mean aggregation by group

biz_crime = spark.table("external_data.v_philly_biz_crime_zone")

# Avg ratings by crime zone
ratings = biz_crime.filter(
    F.col("crime_zone") != "UNKNOWN"
).groupBy("crime_zone").agg(
    F.round(F.avg("stars"), 3).alias("avg_stars"),
    F.round(F.avg("review_count"), 1).alias("avg_review_count"),
    F.sum("review_count").alias("total_reviews"),
    F.count("*").alias("restaurant_count")
).orderBy(
    F.when(F.col("crime_zone") == "HIGH",   1)
     .when(F.col("crime_zone") == "MEDIUM", 2)
     .otherwise(3)
)

print("=== ANALYSIS 2: Average Ratings by Crime Zone ===")
ratings.show()

ratings.write.mode("overwrite").saveAsTable(
    "external_data.v_ratings_by_crime_zone"
)
print("Saved.")

z.show(ratings)