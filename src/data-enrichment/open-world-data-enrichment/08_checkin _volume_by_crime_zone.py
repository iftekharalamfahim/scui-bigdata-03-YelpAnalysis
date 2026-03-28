%pyspark
# Analyze check-in volume correlation with crime zone
# Algorithm: Pearson Correlation proxy via GROUP BY aggregation

biz_crime = spark.table("external_data.v_philly_biz_crime_zone")
checkin   = spark.table("yelp.checkin")

# Join checkins with crime zone
checkin_crime = checkin.join(
    biz_crime.select("business_id", "crime_zone"),
    on="business_id",
    how="inner"
).filter(
    F.col("crime_zone") != "UNKNOWN"
)

# Avg checkins per business per crime zone
checkin_zone = checkin_crime.groupBy(
    "crime_zone", "business_id"
).agg(
    F.count("*").alias("total_checkins")
)

checkin_summary = checkin_zone.groupBy("crime_zone").agg(
    F.round(F.avg("total_checkins"), 1).alias("avg_checkins_per_biz"),
    F.sum("total_checkins").alias("total_checkins"),
    F.count("business_id").alias("business_count")
).orderBy(
    F.when(F.col("crime_zone") == "HIGH",   1)
     .when(F.col("crime_zone") == "MEDIUM", 2)
     .otherwise(3)
)

print("=== ANALYSIS 5: Check-in Volume by Crime Zone ===")
checkin_summary.show()

checkin_summary.write.mode("overwrite").saveAsTable(
    "external_data.v_checkin_by_crime_zone"
)
print("Saved.")

z.show(checkin_summary)