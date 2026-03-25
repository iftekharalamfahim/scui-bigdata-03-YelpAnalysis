%pyspark
from pyspark.sql.functions import col, udf
from pyspark.sql.types import IntegerType

positive_lexicon = {
    "amazing","excellent","fantastic","wonderful","outstanding",
    "superb","brilliant","perfect","awesome","great","delicious",
    "loved","incredible","best","beautiful","friendly","happy",
    "recommended","fresh","clean","pleasant","enjoyable","polite"
}
lexicon_bc = sc.broadcast(positive_lexicon)

@udf(returnType=IntegerType())
def count_positive(text):
    if not text:
        return 0
    words = set(text.lower().split())
    return len(words.intersection(lexicon_bc.value))

df = spark.table("yelp.review")

result = df.filter(col("rev_stars") <= 2) \
    .withColumn("positive_count", count_positive(col("rev_text"))) \
    .filter(col("positive_count") >= 3) \
    .select(
        col("rev_id"),
        col("rev_stars").alias("Stars"),
        col("positive_count").alias("Positive Keywords Found"),
        col("rev_text").alias("Review Text")
    ) \
    .orderBy(col("positive_count").desc()) \
    .limit(20)

z.show(result)
