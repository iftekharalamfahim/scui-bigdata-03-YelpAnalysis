%pyspark
# TASK 4: Attribute Diagnosis - Extract Fatal Flaws
# PURPOSE: Identifies fatal flaws like parking and noise level

# Get cursed businesses
cursed_businesses = cursed_storefronts.join(
    business_df, ["address", "city", "state"], "inner"
).select(
    "address", "city", "state", "business_id", "name",
    "attributes", "is_open"
)

print("Total cursed businesses: {}".format(cursed_businesses.count()))

# Simple attribute extraction using basic string matching
cursed_with_attrs = cursed_businesses \
    .withColumn("has_parking",
        when(col("attributes").contains("Parking") & col("attributes").contains("True"), "Yes")
        .when(col("attributes").contains("Parking") & col("attributes").contains("False"), "No")
        .otherwise("Unknown")
    ) \
    .withColumn("noise_level",
        when(col("attributes").contains("NoiseLevel") & col("attributes").contains("quiet"), "Quiet")
        .when(col("attributes").contains("NoiseLevel") & col("attributes").contains("average"), "Average")
        .when(col("attributes").contains("NoiseLevel") & col("attributes").contains("loud"), "Loud")
        .when(col("attributes").contains("NoiseLevel") & col("attributes").contains("very_loud"), "Very Loud")
        .otherwise("Unknown")
    )

print("="*70)
print("ATTRIBUTE DIAGNOSIS - FATAL FLAWS ANALYSIS")
print("="*70)

# Chart 4a: Parking Availability in Cursed Locations (closed businesses)
parking_dist = cursed_with_attrs.filter(col("is_open") == 0).groupBy("has_parking").count()
print("\nChart 7a: Parking Availability in Cursed Locations")
parking_dist.show()
z.show(parking_dist)

# Chart 4b: Noise Level in Cursed Locations
noise_dist = cursed_with_attrs.filter(col("is_open") == 0).groupBy("noise_level").count()
print("\nChart 7b: Noise Level in Cursed Locations")
noise_dist.show()
z.show(noise_dist)

# Chart 4c: Attribute Patterns Combined
print("\nChart 7c: Attribute Patterns (Parking vs Noise Level)")
attr_patterns = cursed_with_attrs.filter(col("is_open") == 0).groupBy("has_parking", "noise_level").count().orderBy(col("count").desc()).limit(10)
attr_patterns.show()
z.show(attr_patterns)

# Summary statistics
closed_count = cursed_with_attrs.filter(col("is_open") == 0).count()
no_parking = cursed_with_attrs.filter(col("is_open") == 0).filter(col("has_parking") == "No").count()
very_loud = cursed_with_attrs.filter(col("is_open") == 0).filter(col("noise_level") == "Very Loud").count()

print("\n" + "="*50)
print("ATTRIBUTE SUMMARY")
print("="*50)
print("Total closed businesses: {}".format(closed_count))
print("Businesses with NO parking: {}".format(no_parking))
print("Businesses with VERY LOUD noise: {}".format(very_loud))