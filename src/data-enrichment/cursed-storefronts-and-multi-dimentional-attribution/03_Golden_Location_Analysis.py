%pyspark
# TASK 3: Golden Locations Analysis
golden_locations = business_df.filter(col("is_open") == 1).groupBy(
    "address", "city", "state", "postal_code"
).agg(
    count("business_id").alias("total_businesses"),
    avg("stars").alias("avg_rating"),
    sum("review_count").alias("total_reviews"),
    collect_list("name").alias("business_names")
).filter(col("total_businesses") == 1).filter(col("avg_rating") >= 4.0).orderBy(col("total_reviews").desc())

print("="*70)
print("GOLDEN LOCATIONS")
print("="*70)
print("Total golden locations: {}".format(golden_locations.count()))

# Chart 3a: Top 20 Cities with Golden Locations
top_golden_cities = golden_locations.groupBy("city", "state").agg(
    count("*").alias("golden_count")
).orderBy(col("golden_count").desc()).limit(20)

print("\nChart 4a: Top 20 Cities with Golden Locations")
top_golden_cities.show()
z.show(top_golden_cities)

# Chart 3b: Rating Distribution
rating_dist = golden_locations.groupBy("avg_rating").count().orderBy("avg_rating")
print("\nChart 4b: Rating Distribution")
rating_dist.show()
z.show(rating_dist)

# Chart 3c: Top 20 Golden Locations
print("\nChart 4c: Top 20 Golden Locations")
golden_locations.select(
    "address", "city", "state", "avg_rating", "total_reviews", "business_names"
).show(20, truncate=False)