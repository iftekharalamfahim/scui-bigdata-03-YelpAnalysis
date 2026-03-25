%pyspark
from pyspark.sql import functions as F
# Table: business
df = spark.table("business") \
    .groupBy("city") \
    .count() \
    .orderBy(F.desc("count")) \
    .limit(10)

print("=== Top 10 Cities with Most Merchants ===")
df.show(10, truncate=False)
z.show(df)
# Chart suggestion: bar chart (keys: city, values: count)