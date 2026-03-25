%pyspark
from pyspark.sql.functions import sum, col

df = spark.table("yelp.review")

result = df.select(
    sum("rev_useful").alias("Total Useful"),
    sum("rev_funny").alias("Total Funny"),
    sum("rev_cool").alias("Total Cool")