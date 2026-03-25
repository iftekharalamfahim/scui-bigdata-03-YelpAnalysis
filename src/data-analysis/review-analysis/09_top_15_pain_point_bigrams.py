%pyspark
from pyspark.sql.functions import col, udf, explode
from pyspark.sql.types import ArrayType, StringType

# Pain point seed words - at least one must appear in bigram
pain_words = {
    "never","worst","horrible","terrible","awful","disgusting","rude",
    "slow","cold","dirty","wait","waiting","waited","wrong","bad",
    "poor","waste","overpriced","expensive","bland","stale","burnt",
    "undercooked","soggy","greasy","tasteless","inedible","unprofessional",
    "unfriendly","unhelpful","disappointed","disappointing","unacceptable",
    "mediocre","nasty","gross","loud","dark","filthy","refund","complaint",
    "manager","ignored","forgotten","missing","incorrect","hair","sick",
    "vomit","cockroach","roach","mouse","mold","moldy","raw","frozen"
}

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
    "only","other","another","restaurant","menu","meal","dinner","lunch",
    "good","great","nice","best","love","pretty","friendly","amazing",
    "first","last","next","every","each","just","also","even","back"
}

stop_bc = sc.broadcast(stop_words)
pain_bc = sc.broadcast(pain_words)

@udf(returnType=ArrayType(StringType()))
def extract_pain_bigrams(text):
    if not text:
        return []
    tokens = [w.strip(".,!?\"'()[]:-") for w in text.lower().split()]
    tokens = [w for w in tokens if w.isalpha() and len(w) > 2
              and w not in stop_bc.value]
    bigrams = []
    for i in range(len(tokens)-1):
        w1, w2 = tokens[i], tokens[i+1]
        # At least one word must be a pain point word
        if w1 in pain_bc.value or w2 in pain_bc.value:
            bigrams.append(w1 + "_" + w2)
    return bigrams

df = spark.table("yelp.review")

result = df.filter(col("rev_stars") <= 2) \
    .withColumn("bigrams", extract_pain_bigrams(col("rev_text"))) \
    .select(explode(col("bigrams")).alias("Bigram")) \
    .groupBy("Bigram").count() \
    .withColumnRenamed("count", "Frequency") \
    .orderBy(col("Frequency").desc()) \
    .limit(15)

print("=== Top 15 Pain Point Bigrams from 1-2 Star Reviews ===")
z.show(result)
