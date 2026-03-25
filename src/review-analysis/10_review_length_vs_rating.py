%pyspark
from pyspark.sql.functions import col, size, split, avg, round

df = spark.table("yelp.review")

result = df.withColumn("word_count", size(split(col("rev_text"), "\\s+"))) \
    .groupBy(col("rev_stars").alias("Stars")) \
    .agg(round(avg("word_count"), 1).alias("Avg Word Count")) \
    .orderBy("Stars")

z.show(result)
