%pyspark
from pyspark.sql import functions as F

# Count 5‑star reviews per business
five_star_counts = (spark.table("review")
                    .filter(F.col("stars") == 5)
                    .groupBy("business_id")
                    .count()
                    .withColumnRenamed("count", "five_star_count"))

# Join with business table to get names and take top 20
df = (five_star_counts
      .join(spark.table("business"), "business_id")
      .select("name", "five_star_count")
      .orderBy(F.desc("five_star_count"))
      .limit(20))

print("=== Top 20 Merchants with Most 5-Star Reviews ===")
df.show(20, truncate=False)
z.show(df)
# Chart suggestion: bar chart (keys: name, values: five_star_count)