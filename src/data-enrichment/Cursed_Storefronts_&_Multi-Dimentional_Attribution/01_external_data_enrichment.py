%pyspark
# TASK 1 External Data Enrichment
zipcodes_enriched = zipcodes_df \
    .withColumn("walk_score",
        when(col("density") >= 10000, 95)
        .when(col("density") >= 5000, 85)
        .when(col("density") >= 3000, 70)
        .when(col("density") >= 1500, 55)
        .when(col("density") >= 500, 40)
        .otherwise(25)
    ) \
    .withColumn("walkability_category",
        when(col("walk_score") >= 70, "Very Walkable")
        .when(col("walk_score") >= 50, "Somewhat Walkable")
        .when(col("walk_score") >= 30, "Car-Dependent")
        .otherwise("Very Car-Dependent")
    ) \
    .withColumn("business_potential",
        when(col("density") >= 3000, "Excellent")
        .when(col("density") >= 1000, "Good")
        .when(col("density") >= 500, "Moderate")
        .otherwise("Poor")
    )

commercial_zones = zoning_df.filter(col("zoninggroup").contains("Commercial"))

print("="*70)
print("EXTERNAL DATA ENRICHMENT COMPLETE")
print("="*70)

# Chart 1a: Walk Score Distribution
walk_score_dist = zipcodes_enriched.groupBy("walkability_category").count()
print("\nChart 2a: Walk Score Categories Distribution")
walk_score_dist.show()
z.show(walk_score_dist)

# Chart 1b: Business Potential Distribution
business_potential_dist = zipcodes_enriched.groupBy("business_potential").count()
print("\nChart 2b: Business Potential Distribution")
business_potential_dist.show()
z.show(business_potential_dist)

print("Commercial Zones: {}".format(commercial_zones.count()))