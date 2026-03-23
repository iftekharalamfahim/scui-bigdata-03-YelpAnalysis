%pyspark
from pyspark.sql import functions as F

category_count = (spark.table("business")
                  .filter(F.col("categories").isNotNull())
                  .select(F.split("categories", ", ").alias("cat_array"))
                  .select(F.explode("cat_array").alias("category"))
                  .distinct()
                  .count())

print(f"=== Total Distinct Categories ===\n{category_count}")