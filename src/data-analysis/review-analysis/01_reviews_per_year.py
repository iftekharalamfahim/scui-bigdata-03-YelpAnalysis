%pyspark
from pyspark.sql.functions import date_format, col

df = spark.table("yelp.review")

result = df.groupBy(date_format(col("rev_date"), "yyyy").alias("Year")) \
           .count() \
           .withColumnRenamed("count", "Review Count") \
           .orderBy("Year")

z.show(result)