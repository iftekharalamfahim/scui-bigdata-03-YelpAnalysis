%pyspark
from pyspark.sql import functions as F

business_df = spark.table("business")
review_df = spark.table("review")
checkin_df = spark.table("checkin")
weather_df = spark.table("weather_clean")

# City standardization
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

target_cities = ["Philadelphia", "Tampa", "Indianapolis", "Nashville",
                 "Tucson", "New Orleans", "St. Louis", "Reno",
                 "Santa Barbara", "Boise"]

# ============================================================
# Analysis 4: Average Rating by Weather Condition per City
# ============================================================
print("=== Analysis 4: Average Rating by Weather Condition per City ===")

reviews_with_city = review_df \
    .filter(F.col("date") >= "2017-01-01") \
    .withColumn("date_only", F.to_date(F.col("date"))) \
    .join(business_df.select("business_id", "city"), "business_id") \
    .withColumn("weather_city", city_standardize) \
    .filter(F.col("weather_city").isin(target_cities))

analysis4 = reviews_with_city \
    .join(weather_df,
          (reviews_with_city.weather_city == weather_df.city) &
          (reviews_with_city.date_only == weather_df.date)) \
    .groupBy("weather_city", "weather_condition") \
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
    .orderBy("weather_city", "avg_rating")

print("\nRating by Weather Condition per City:")
analysis4.show(80, truncate=False)
z.show(analysis4)

# ============================================================
# Analysis 4b: Overall Weather Impact Summary
# ============================================================
print("\n=== Analysis 4b: Overall Weather Impact Summary ===")

analysis4b = reviews_with_city \
    .join(weather_df,
          (reviews_with_city.weather_city == weather_df.city) &
          (reviews_with_city.date_only == weather_df.date)) \
    .groupBy("weather_condition") \
    .agg(
        F.count("*").alias("total_reviews"),
        F.round(F.avg("stars"), 3).alias("avg_rating"),
        F.round(
            F.sum(F.when(F.col("stars") == 1, 1).otherwise(0)) /
            F.count("*") * 100, 2
        ).alias("one_star_pct"),
        F.round(
            F.sum(F.when(F.col("stars") == 5, 1).otherwise(0)) /
            F.count("*") * 100, 2
        ).alias("five_star_pct")
    ) \
    .orderBy("avg_rating")

analysis4b.show(truncate=False)
z.show(analysis4b)

# ============================================================
# Analysis 4c: Actionable Business Recommendations
# ============================================================
print("\n=== Analysis 4c: Business Recommendations ===")

recommendations = spark.createDataFrame([
    ("Heavy Rain",
     "Increase delivery staff",
     "Promote soups, hot food, comfort meals",
     "High — bad weather frustrates customers"),
    ("Extreme Heat",
     "Add outdoor cooling, extra AC staff",
     "Promote cold drinks, ice cream, salads",
     "Medium — heat reduces walk-ins"),
    ("Extreme Cold",
     "Reduce outdoor seating staff",
     "Promote hot beverages, soups, stews",
     "High — cold drives indoor dining"),
    ("Heavy Snow",
     "Reduce floor staff, increase delivery",
     "Focus on delivery-friendly menu items",
     "Very High — snow drastically cuts foot traffic"),
    ("Snow",
     "Moderate staffing reduction",
     "Promote warm comfort food",
     "Medium — light snow still affects walk-ins"),
    ("Strong Wind",
     "Close outdoor seating entirely",
     "No special promotions needed",
     "Low — mainly affects outdoor seating"),
    ("Normal",
     "Standard staffing levels",
     "Standard menu",
     "None — baseline conditions")
], ["Weather Condition", "Staffing Recommendation",
    "Inventory/Menu Recommendation", "Review Risk"])

recommendations.show(truncate=False)
z.show(recommendations)