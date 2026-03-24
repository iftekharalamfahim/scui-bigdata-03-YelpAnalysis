%pyspark
# Task 2: Count the number of check-ins per hour within a 24-hour period
# Shows peak hours of business activity throughout the day
checkin_per_hour = checkin \
    .withColumn("date", F.explode(F.split("checkin_dates", ","))) \
    .withColumn("checkin_hour", F.hour(F.to_timestamp(F.trim(F.col("date"))))) \
    .filter(F.col("checkin_hour").isNotNull()) \
    .groupBy("checkin_hour") \
    .agg(F.count("*").alias("checkin_count")) \
    .orderBy("checkin_hour")

z.show(checkin_per_hour)