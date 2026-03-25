%pyspark
from pyspark.sql.functions import year, col, desc, rank
from pyspark.sql.window import Window

df = spark.table("yelp.review")

result = df.groupBy(
    col("rev_user_id").alias("User ID"),
    year(col("rev_date")).alias("Year")
).count() \
 .withColumnRenamed("count", "Review Count") \
 .orderBy("Year", desc("Review Count"))

z.show(result)