%pyspark
# Table: business
df = spark.table("business") \
    .groupBy("name") \
    .agg(
        F.count("*").alias("count"),
        F.avg("stars").alias("avg_rating")
    ) \
    .orderBy(F.desc("count")) \
    .limit(20)

print("=== Top 20 Merchants with Average Ratings ===")
df.show(20, truncate=False)
z.show(df)
# Chart suggestion: bar chart (keys: name, values: count, avg_rating)