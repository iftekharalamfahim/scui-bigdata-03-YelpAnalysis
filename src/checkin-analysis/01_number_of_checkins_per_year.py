%pyspark
# Task 1: Count the number of check-ins per year
checkin_per_year = checkin \
    .withColumn("date", F.explode(F.split("checkin_dates", ","))) \
    .withColumn("checkin_year", F.year(F.to_timestamp(F.trim(F.col("date"))))) \
    .filter(F.col("checkin_year").isNotNull()) \
    .groupBy("checkin_year") \
    .agg(F.count("*").alias("checkin_count")) \
    .orderBy("checkin_year")

z.show(checkin_per_year)