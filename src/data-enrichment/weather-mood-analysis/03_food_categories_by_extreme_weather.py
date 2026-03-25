%pyspark
from pyspark.sql import functions as F

business_df = spark.table("business")
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

# Explode checkin dates
checkin_exploded = checkin_df \
    .select(
        "business_id",
        F.explode(F.split(F.col("date"), ", ")).alias("checkin_datetime")
    ) \
    .withColumn("checkin_date", F.to_date(F.col("checkin_datetime"))) \
    .filter(F.col("checkin_date") >= "2017-01-01")

# Join with business to get city and categories
checkins_with_city = checkin_exploded \
    .join(business_df.select("business_id", "city", "categories"), "business_id") \
    .withColumn("weather_city", city_standardize) \
    .filter(F.col("weather_city").isin(target_cities))

# Analysis 3: Food categories on extreme weather days
print("=== Analysis 3: Food Category Check-ins on Extreme Weather ===")
analysis3 = checkins_with_city \
    .join(weather_df,
          (checkins_with_city.weather_city == weather_df.city) &
          (checkins_with_city.checkin_date == weather_df.date)) \
    .filter(F.col("weather_condition").isin(
        "Heavy Rain", "Rain", "Extreme Cold", "Heavy Snow", "Extreme Heat"
    )) \
    .filter(F.col("categories").isNotNull()) \
    .withColumn("food_type",
        F.when(F.col("categories").contains("Soup"), "Soup")
         .when(F.col("categories").contains("Hot Pot"), "Hot Pot")
         .when(F.col("categories").contains("Pizza"), "Pizza")
         .when(F.col("categories").contains("Burgers"), "Burgers")
         .when(F.col("categories").contains("Chinese"), "Chinese")
         .when(F.col("categories").contains("Fast Food"), "Fast Food")
         .when(F.col("categories").contains("Coffee"), "Coffee")
         .when(F.col("categories").contains("Ice Cream"), "Ice Cream")
         .when(F.col("categories").contains("Sandwiches"), "Sandwiches")
         .otherwise("Other")
    ) \
    .filter("food_type != 'Other'") \
    .groupBy("food_type", "weather_condition") \
    .agg(F.count("*").alias("checkin_count")) \
    .orderBy("weather_condition", "checkin_count", ascending=False)

analysis3.show(50, truncate=False)
z.show(analysis3)
