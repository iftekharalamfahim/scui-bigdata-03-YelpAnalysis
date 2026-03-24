%pyspark
# Task 3: Identify the most popular city for check-ins

checkin_per_city = checkin \
    .withColumn("date", F.explode(F.split("checkin_dates", ","))) \
    .groupBy("business_id") \
    .agg(F.count("*").alias("checkin_count")) \
    .join(business.select("business_id", "city", "state"),
          "business_id", "left") \
    .filter(F.col("city").isNotNull()) \
    .groupBy("city", "state") \
    .agg(F.sum("checkin_count").alias("total_checkins")) \
    .orderBy(F.col("total_checkins").desc()) \
    .limit(20)

z.show(checkin_per_city)