%pyspark
from pyspark.sql import functions as F

# ============================================================
# Analysis 2: Check-in volume by weather condition
# ============================================================
print("=== Analysis 2: Check-in Volume by Weather Condition ===")

checkin_exploded = checkin_df \
    .select(
        "business_id",
        F.explode(F.split(F.col("date"), ", ")).alias("checkin_datetime")
    ) \
    .withColumn("checkin_date", F.to_date(F.col("checkin_datetime"))) \
    .filter(F.col("checkin_date") >= "2017-01-01")

checkins_weather = checkin_exploded \
    .join(business_std.select("business_id", "weather_city"), "business_id") \
    .join(weather_df,
          (F.col("weather_city") == weather_df.city) &
          (F.col("checkin_date") == weather_df.date))

analysis2 = checkins_weather \
    .groupBy("weather_condition") \
    .agg(
        F.count("*").alias("total_checkins"),
        F.countDistinct("business_id").alias("unique_restaurants"),
        F.round(F.count("*") / F.countDistinct("date"), 1)
         .alias("avg_checkins_per_day")
    ) \
    .orderBy("total_checkins", ascending=False)

print("Does extreme weather increase or decrease foot traffic?")
analysis2.show(truncate=False)
z.show(analysis2)
