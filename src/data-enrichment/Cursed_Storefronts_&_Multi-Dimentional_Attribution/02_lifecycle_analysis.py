%pyspark
# TASK 2: Lifecycle Analysis - Identify Cursed Storefronts
cursed_storefronts = business_df.groupBy("address", "city", "state", "postal_code", "latitude", "longitude").agg(
    count("business_id").alias("total_businesses"),
    sum(when(col("is_open") == 0, 1).otherwise(0)).alias("closed_count"),
    sum(when(col("is_open") == 1, 1).otherwise(0)).alias("open_count"),
    collect_list("name").alias("business_names"),
    avg("stars").alias("avg_rating")
).filter(col("total_businesses") >= 2).filter(col("closed_count") >= 1).withColumn("cursed_level",
    when(col("closed_count") >= 3, "SEVERELY CURSED")
    .when(col("closed_count") >= 2, "CURSED")
    .otherwise("POTENTIALLY CURSED")
).withColumn("failure_rate",
    round((col("closed_count") / col("total_businesses")) * 100, 2)
).orderBy(col("closed_count").desc(), col("total_businesses").desc())

print("="*70)
print("LIFECYCLE ANALYSIS - CURSED STOREFRONTS")
print("="*70)
print("Total cursed storefronts: {}".format(cursed_storefronts.count()))
print("Total business closures: {}".format(cursed_storefronts.agg(sum("closed_count")).collect()[0][0]))

# Chart 2a: Cursed Level Distribution
cursed_level_dist = cursed_storefronts.groupBy("cursed_level").count()
print("\nChart 3a: Cursed Level Distribution")
cursed_level_dist.show()
z.show(cursed_level_dist)

# Chart 2b: Top 20 Most Cursed Cities
top_cursed_cities = cursed_storefronts.groupBy("city", "state").agg(
    count("*").alias("cursed_count"),
    sum("closed_count").alias("total_closures")
).orderBy(col("cursed_count").desc()).limit(20)

print("\nChart 3b: Top 20 Most Cursed Cities")
top_cursed_cities.show()
z.show(top_cursed_cities)

# Chart 2c: Failure Rate Distribution (binned)
failure_rate_bins = cursed_storefronts.withColumn("failure_rate_bin",
    when(col("failure_rate") < 20, "0-20%")
    .when(col("failure_rate") < 40, "20-40%")
    .when(col("failure_rate") < 60, "40-60%")
    .when(col("failure_rate") < 80, "60-80%")
    .otherwise("80-100%")
).groupBy("failure_rate_bin").count().orderBy("failure_rate_bin")

print("\nChart 3c: Failure Rate Distribution")
failure_rate_bins.show()
z.show(failure_rate_bins)