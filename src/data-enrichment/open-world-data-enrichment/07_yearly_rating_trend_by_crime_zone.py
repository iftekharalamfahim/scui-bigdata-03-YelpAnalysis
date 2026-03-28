%pyspark

# Analyze yearly rating trend by crime zone (2018-2022)
# Algorithm: Time-Series Aggregation with GROUP BY year and crime_zone

biz_crime = spark.table("external_data.v_philly_biz_crime_zone")
review    = spark.table("yelp.review")

# Join reviews with crime zone
review_crime = review.join(
    biz_crime.select("business_id", "crime_zone"),
    review["rev_business_id"] == biz_crime["business_id"],
    how="inner"
).filter(
    (F.col("crime_zone") != "UNKNOWN") &
    (F.col("rev_date") >= "2018-01-01") &
    (F.col("rev_date") <= "2022-12-31")
)

# Yearly avg stars and review count by crime zone
rating_trend = review_crime.groupBy(
    "crime_zone",
    F.year("rev_date").alias("year")
).agg(
    F.round(F.avg("rev_stars"), 3).alias("avg_stars"),
    F.count("*").alias("review_count")
).orderBy("crime_zone", "year")

rating_trend.write.mode("overwrite").saveAsTable(
    "external_data.v_rating_trend_by_crime_zone"
)

z.show(rating_trend)