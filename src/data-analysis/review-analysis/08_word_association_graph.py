%pyspark
import itertools
from pyspark.sql.functions import udf, col, explode
from pyspark.sql.types import ArrayType, StringType

stop_words = {
    "the","and","was","for","that","this","with","have","they","from",
    "are","but","not","had","his","her","she","him","you","all","been",
    "their","has","its","our","who","did","would","could","should","will",
    "just","get","got","one","like","also","even","back","went","came",
    "come","make","made","said","told","ask","try","know","think","really",
    "very","more","than","then","when","what","which","there","here","how",
    "about","out","can","your","into","over","after","because","some","them",
    "time","were","over","still","going","want","need","way","give","take",
    "that","this","with","been","will","just","they","what","when","could",
    "would","should","really","never","always","every","little","dont",
    "food","good","great","nice","best","place","service","also","even",
    "friendly","amazing","delicious","awesome","excellent","wonderful",
    "super","definitely","highly","always","staff","order","ordered"
}

# Only cuisine types and specific dishes as targets
cuisine_words = {
    "chinese","italian","mexican","japanese","indian","thai","french",
    "korean","american","mediterranean"
}
dish_words = {
    "steak","pizza","sushi","burger","chicken","pasta","tacos","ramen",
    "dumpling","noodles","seafood","salad","sandwich","coffee","dessert",
    "beef","pork","shrimp","lobster","curry","wings","ribs","salmon"
}
attribute_words = {
    "expensive","cheap","spicy","crispy","fresh","cold","warm","tender",
    "overpriced","authentic","traditional","homemade","frozen","bland",
    "salty","greasy","juicy","flavorful","tasteless","undercooked"
}

all_targets = cuisine_words | dish_words | attribute_words
stop_bc = sc.broadcast(stop_words)
target_bc = sc.broadcast(all_targets)

@udf(returnType=ArrayType(StringType()))
def get_pairs(text):
    if not text:
        return []
    tokens = [w.strip(".,!?\"'()[]:-") for w in text.lower().split()]
    tokens = list(set([w for w in tokens if w.isalpha() and len(w) > 3
                       and w not in stop_bc.value]))[:20]
    pairs = []
    for w1, w2 in itertools.combinations(tokens, 2):
        # Both words must be from our target categories for meaningful association
        if (w1 in target_bc.value and w2 in target_bc.value):
            pairs.append(min(w1,w2) + "||" + max(w1,w2))
    return pairs

df = spark.table("yelp.review")
sampled = df.sample(0.05, seed=42)

pairs_df = sampled.withColumn("pairs", get_pairs(col("rev_text"))) \
    .select(explode(col("pairs")).alias("pair")) \
    .groupBy("pair").count() \
    .orderBy(col("count").desc()) \
    .limit(30)

from pyspark.sql.functions import split
result = pairs_df.withColumn("Word1", split(col("pair"), "\\|\\|")[0]) \
    .withColumn("Word2", split(col("pair"), "\\|\\|")[1]) \
    .select("Word1", "Word2", "count") \
    .withColumnRenamed("count", "Association Strength")

print("=== Word Association Graph ===")
z.show(result)