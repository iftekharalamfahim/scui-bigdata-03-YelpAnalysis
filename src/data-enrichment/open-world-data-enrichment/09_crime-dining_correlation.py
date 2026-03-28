%pyspark
# Join all analysis views into one final summary table
# Algorithm: Multi-table JOIN with composite metric aggregation

survival = spark.table("external_data.v_survival_by_crime_zone")
ratings  = spark.table("external_data.v_ratings_by_crime_zone")
checkins = spark.table("external_data.v_checkin_by_crime_zone")

# Join all findings into one summary
summary = survival.join(ratings, on="crime_zone") \
                  .join(checkins, on="crime_zone") \
                  .select(
                      "crime_zone",
                      "total_restaurants",
                      "survival_rate_pct",
                      ratings["avg_stars"],
                      ratings["avg_review_count"],
                      "avg_checkins_per_biz"
                  ).orderBy(
                      F.when(F.col("crime_zone") == "HIGH",   1)
                       .when(F.col("crime_zone") == "MEDIUM", 2)
                       .otherwise(3)
                  )

print("=== FINAL SUMMARY: Crime-Dining Correlation ===")
summary.show()

summary.write.mode("overwrite").saveAsTable(
    "external_data.v_crime_dining_summary"
)
print("\nAll analysis complete. All views saved to external_data database.")

z.show(summary)