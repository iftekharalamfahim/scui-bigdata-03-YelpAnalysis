%pyspark
from pyspark.sql import functions as F

business_df = spark.table("business")

# Explode categories into individual rows
categories_df = business_df \
    .filter(F.col("categories").isNotNull()) \
    .select(
        "business_id",
        F.explode(F.split(F.col("categories"), ",")).alias("category")
    ) \
    .select(
        "business_id",
        F.trim(F.col("category")).alias("category")
    )

# Self join to get pairs
pairs_df = categories_df.alias("a") \
    .join(categories_df.alias("b"), "business_id") \
    .filter(F.col("a.category") < F.col("b.category")) \
    .select(
        F.col("a.category").alias("Category 1"),
        F.col("b.category").alias("Category 2")
    )

result = pairs_df \
    .groupBy("Category 1", "Category 2") \
    .count() \
    .withColumnRenamed("count", "Co-occurrence Count") \
    .orderBy("Co-occurrence Count", ascending=False) \
    .limit(10)

print("=== Top 10 Co-occurring Category Pairs ===")
result.show(10)
z.show(result)
