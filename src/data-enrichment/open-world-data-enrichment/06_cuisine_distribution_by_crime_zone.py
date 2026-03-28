%pyspark
# Analyze cuisine type distribution across crime zones
# Algorithm: Cross-tabulation analysis (cuisine × crime_zone matrix)

biz_crime = spark.table("external_data.v_philly_biz_crime_zone")

CUISINES = [
    "American", "Mexican", "Italian", "Japanese",
    "Chinese", "Thai", "Mediterranean", "French",
    "Vietnamese", "Indian", "Korean", "Fast Food",
    "Pizza", "Burgers", "Seafood", "Steakhouses"
]

rows = []
for cuisine in CUISINES:
    for zone in ["HIGH", "MEDIUM", "LOW"]:
        subset = biz_crime.filter(
            (F.col("categories").contains(cuisine)) &
            (F.col("crime_zone") == zone)
        )
        count = subset.count()
        avg_s = subset.agg(
            F.round(F.avg("stars"), 3)
        ).collect()[0][0]

        rows.append((cuisine, zone, count,
                     float(avg_s) if avg_s else 0.0))

cuisine_df = spark.createDataFrame(
    rows,
    ["cuisine", "crime_zone",
     "restaurant_count", "avg_stars"]
)

print("=== ANALYSIS 3: Cuisine Distribution by Crime Zone ===")
cuisine_df.orderBy(
    F.desc("restaurant_count")
).show(30)

cuisine_df.write.mode("overwrite").saveAsTable(
    "external_data.v_cuisine_by_crime_zone"
)
print("Saved.")

z.show(cuisine_df.orderBy(F.desc("restaurant_count")))