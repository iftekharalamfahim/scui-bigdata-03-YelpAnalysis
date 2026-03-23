%pyspark
from pyspark.sql import functions as F

# Table: business
df = spark.table("business") \
    .groupBy("name") \
    .count() \
    .orderBy(F.desc("count")) \
    .limit(20)

print("=== Top 20 Most Common Merchants ===")
df.show(20, truncate=False)
z.show(df)
# Chart suggestion: bar chart (keys: name, values: count)