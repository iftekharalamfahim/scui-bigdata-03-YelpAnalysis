%pyspark

# Map police districts to ZIP codes using lookup table
# Join Yelp restaurants with crime zones (Spatial Proximity Mapping)

crime_zones = spark.table("external_data.v_crime_zones")

# Join strategy
# Yelp business has postal_code
# Crime data has dc_dist (police district)
# We join using coordinates proximity or postal_code
# Since we do not have ZIP in crime data,
# we use dc_dist as the neighborhood proxy

# First check postal_code distribution in Yelp Philadelphia
print("Philadelphia restaurant ZIP codes (top 15):")
philly_biz.groupBy("postal_code") \
    .count() \
    .orderBy(F.desc("count")) \
    .show(15)

# Map police districts to ZIP codes
# Philadelphia police districts map to neighborhoods
# This is a well-known mapping
district_zip_map = {
    "01": "19125", "02": "19152", "03": "19136",
    "04": "19124", "05": "19120", "06": "19111",
    "07": "19149", "08": "19153", "09": "19148",
    "10": "19116", "11": "19116", "12": "19151",
    "14": "19139", "15": "19143", "16": "19142",
    "17": "19146", "18": "19103", "19": "19130",
    "22": "19132", "23": "19121", "24": "19122",
    "25": "19125", "26": "19128", "35": "19138",
    "39": "19144"
}

# Create district to ZIP mapping DataFrame
mapping_rows = [(k, v) for k, v in district_zip_map.items()]
district_zip_df = spark.createDataFrame(
    mapping_rows,
    ["dc_dist", "zip_code"]
)

# Join crime zones with ZIP mapping
crime_zones_zip = crime_zones.join(
    district_zip_df,
    on="dc_dist",
    how="left"
)

# Join Yelp restaurants with crime zones via ZIP code
biz_crime = philly_biz.join(
    crime_zones_zip.select(
        "zip_code", "crime_zone",
        "total_crimes", "high_severity_count"
    ),
    philly_biz["postal_code"] == crime_zones_zip["zip_code"],
    how="left"
).withColumn(
    "crime_zone",
    F.when(
        F.col("crime_zone").isNull(), "UNKNOWN"
    ).otherwise(F.col("crime_zone"))
)

print(f"\nJoined records: {biz_crime.count():,}")
print("\nRestaurants per crime zone:")
biz_crime.groupBy("crime_zone").count().show()

# Save
biz_crime.write.mode("overwrite").saveAsTable(
    "external_data.v_philly_biz_crime_zone"
)
print("v_philly_biz_crime_zone saved.")

z.show(biz_crime.groupBy("crime_zone").count())