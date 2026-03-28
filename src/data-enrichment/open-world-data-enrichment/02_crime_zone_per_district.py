%pyspark
# Aggregate crime counts by police district and year
# Assign crime zones using Percentile-Based Thresholding (approxQuantile)

# Crime count by district and year
crime_by_district = crime.groupBy(
    "dc_dist", "crime_year"
).agg(
    F.count("*").alias("total_crimes"),
    F.sum(
        F.when(F.col("severity") == "HIGH", 1).otherwise(0)
    ).alias("high_severity_count"),
    F.sum(
        F.when(F.col("severity") == "MEDIUM", 1).otherwise(0)
    ).alias("medium_severity_count"),
    F.sum(
        F.when(F.col("severity") == "LOW", 1).otherwise(0)
    ).alias("low_severity_count")
).orderBy("dc_dist", "crime_year")

# Overall crime rate by district (all years combined)
crime_overall = crime.groupBy("dc_dist").agg(
    F.count("*").alias("total_crimes"),
    F.sum(
        F.when(F.col("severity") == "HIGH", 1).otherwise(0)
    ).alias("high_severity_count")
)

# Define crime zone per district

quantiles = crime_overall.approxQuantile(
    "total_crimes", [0.33, 0.66], 0.01
)
t33 = quantiles[0]
t66 = quantiles[1]

print(f"Crime zone thresholds:")
print(f"  LOW    : total_crimes < {t33:.0f}")
print(f"  MEDIUM : {t33:.0f} <= total_crimes < {t66:.0f}")
print(f"  HIGH   : total_crimes >= {t66:.0f}")

crime_zones = crime_overall.withColumn(
    "crime_zone",
    F.when(F.col("total_crimes") >= t66, "HIGH")
     .when(F.col("total_crimes") >= t33, "MEDIUM")
     .otherwise("LOW")
)

print("\nCrime zones per district:")
crime_zones.orderBy(F.desc("total_crimes")).show(20)

# Save as Hive view
crime_zones.write.mode("overwrite").saveAsTable(
    "external_data.v_crime_zones"
)
crime_by_district.write.mode("overwrite").saveAsTable(
    "external_data.v_crime_by_district_year"
)
print("Views saved.")

z.show(crime_zones.orderBy(F.desc("total_crimes")))