%pyspark
from pyspark.sql import functions as F
# Table: business
df = spark.table("business") \
    .groupBy("state") \
    .count() \
    .orderBy(F.desc("count")) \
    .limit(5)

print("=== Top 5 States with Most Merchants ===")
df.show(5)
z.show(df)
# Chart suggestion: bar chart (keys: state, values: count)