%pyspark
from pyspark.sql.functions import col, lower, regexp_replace, explode, split, udf
from pyspark.sql.types import BooleanType

stop_words = {
    "the","and","was","for","that","this","with","have","they","from",
    "are","but","not","had","his","her","she","him","you","all","been",
    "their","has","its","our","who","did","would","could","should","will",
    "just","get","got","one","like","also","even","back","went","came",
    "come","make","made","said","told","ask","try","know","think","really",
    "very","more","than","then","when","what","which","there","here","how",
    "about","out","can","your","into","over","after","because","some","them",
    "time","over","still","going","want","need","way","give","take","see",
    "look","say","use","much","well","always","every","sure","thing","were",
    "only","other","another","went","come","here","this","that","these",
    "those","with","from","have","been","will","just","they","what","when",
    "could","would","should","really","never","always","every","little"
}
stop_bc = sc.broadcast(stop_words)

is_valid = udf(lambda w: bool(w and len(w) > 3 and w not in stop_bc.value), BooleanType())

df = spark.table("yelp.review")

result = df.select(
    explode(
        split(regexp_replace(lower(col("rev_text")), "[^a-z\\s]", ""), "\\s+")
    ).alias("word")
).filter(col("word") != "") \
 .filter(is_valid(col("word"))) \
 .groupBy("word").count() \
 .withColumnRenamed("word", "Word") \
 .withColumnRenamed("count", "Frequency") \
 .orderBy(col("Frequency").desc()) \
 .limit(20)

print("=== Top 20 Most Common Words ===")
z.show(result)