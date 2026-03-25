%pyspark
from pyspark.sql import functions as F

business_df = spark.table("business")
review_df = spark.table("review")
checkin_df = spark.table("checkin")
weather_df = spark.table("weather_clean")

# ============================================================
# City standardization mapping
# ============================================================
city_standardize = (
    F.when(F.col("city").isin("Saint Louis"), "St. Louis")
     .when(F.col("city").isin("Saint Petersburg", "St. Petersburg",
                               "Clearwater", "Brandon", "Largo"), "Tampa")
     .when(F.col("city").isin("Metairie"), "New Orleans")
     .when(F.col("city").isin("Sparks"), "Reno")
     .when(F.col("city").isin("Franklin"), "Nashville")
     .when(F.col("city").isin("Meridian"), "Boise")
     .otherwise(F.col("city"))
)

target_weather_cities = [
    "Philadelphia", "Tampa", "Indianapolis", "Nashville",
    "Tucson", "New Orleans", "St. Louis", "Reno",
    "Santa Barbara", "Boise"
]

# ============================================================
# Prepare business table with standardized city
# ============================================================
business_std = business_df \
    .withColumn("weather_city", city_standardize) \
    .filter(F.col("weather_city").isin(target_weather_cities)) \
    .filter(F.col("categories").like("%Restaurants%"))

# ============================================================
# Analysis 1: Average rating by weather condition
# ============================================================
print("=== Analysis 1: Average Rating by Weather Condition ===")

reviews_weather = review_df \
    .filter(F.col("date") >= "2017-01-01") \
    .withColumn("date_only", F.to_date(F.col("date"))) \
    .join(business_std.select("business_id", "weather_city"), "business_id") \
    .join(weather_df,
          (F.col("weather_city") == weather_df.city) &
          (F.col("date_only") == weather_df.date))

analysis1 = reviews_weather \
    .groupBy("weather_condition") \
    .agg(
        F.count("*").alias("total_reviews"),
        F.round(F.avg("stars"), 3).alias("avg_rating"),
        F.sum(F.when(F.col("stars") == 1, 1).otherwise(0))
         .alias("one_star_count"),
        F.round(
            F.sum(F.when(F.col("stars") == 1, 1).otherwise(0)) /
            F.count("*") * 100, 2
        ).alias("one_star_pct"),
        F.sum(F.when(F.col("stars") == 5, 1).otherwise(0))
         .alias("five_star_count"),
        F.round(
            F.sum(F.when(F.col("stars") == 5, 1).otherwise(0)) /
            F.count("*") * 100, 2
        ).alias("five_star_pct")
    ) \
    .orderBy("avg_rating")

print("Do bad weather conditions cause lower ratings?")
analysis1.show(truncate=False)
z.show(analysis1)
