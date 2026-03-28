%pyspark
# Analyze restaurant survival rate by crime zone
# Algorithm: Binary Classification (is_open 0/1) with GROUP BY aggregation

biz_crime = spark.table("external_data.v_philly_biz_crime_zone")

# Survival rate by crime zone
survival = biz_crime.filter(
    F.col("crime_zone") != "UNKNOWN"
).groupBy("crime_zone").agg(
    F.count("*").alias("total_restaurants"),
    F.sum("is_open").alias("open_restaurants"),
    F.round(
        F.sum("is_open") / F.count("*") * 100, 2
    ).alias("survival_rate_pct")
).withColumn(
    "closed_restaurants",
    F.col("total_restaurants") - F.col("open_restaurants")
).orderBy(
    F.when(F.col("crime_zone") == "HIGH",   1)
     .when(F.col("crime_zone") == "MEDIUM", 2)
     .otherwise(3)
)

print("=== ANALYSIS 1: Restaurant Survival Rate by Crime Zone ===")
survival.show()

survival.write.mode("overwrite").saveAsTable(
    "external_data.v_survival_by_crime_zone"
)
print("Saved.")

z.show(survival)