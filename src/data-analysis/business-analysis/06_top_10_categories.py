%pyspark
from pyspark.sql import functions as F

df = (spark.table("business")
      .filter(F.col("categories").isNotNull())
      .select(F.split("categories", ", ").alias("cat_array"))
      .select(F.explode("cat_array").alias("category"))
      .groupBy("category")
      .count()
      .orderBy(F.desc("count"))
      .limit(10))

print("=== Top 10 Most Frequent Categories ===")
df.show(10, truncate=False)
z.show(df)
# Chart suggestion: bar chart (keys: category, values: count)