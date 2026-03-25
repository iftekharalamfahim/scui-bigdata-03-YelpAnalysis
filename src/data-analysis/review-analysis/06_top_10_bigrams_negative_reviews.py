%pyspark
from pyspark.sql.functions import col, udf, explode
from pyspark.sql.types import ArrayType, StringType

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
    "only","other","another","menu","meal","dinner","lunch",
    "good","great","nice","best","love","pretty","friendly","amazing"
}

# Negative seed words — bigram must contain at least one
negative_seeds = {
    "slow","rude","cold","dirty","awful","terrible","horrible","worst",
    "waste","poor","bad","long","wait","loud","bland","stale","burnt",
    "wrong","late","disgusting","disappointing","overpriced","mediocre",
    "unfriendly","unhelpful","unprofessional","disgusting","tasteless",
    "soggy","greasy","undercooked","overcooked","inedible","salty",
    "expensive","cheap","nasty","gross","shocking","unacceptable"
}

stop_bc = sc.broadcast(stop_words)
seeds_bc = sc.broadcast(negative_seeds)

@udf(returnType=ArrayType(StringType()))
def extract_negative_bigrams(text):
    if not text:
        return []
    import nltk
    tokens = [w.strip(".,!?\"'()[]:-") for w in text.lower().split()]
    tokens = [w for w in tokens if w.isalpha() and len(w) > 2
              and w not in stop_bc.value]
    tagged = nltk.pos_tag(tokens)
    allowed = {"JJ","JJR","JJS","NN","NNS","RB","RBR"}
    filtered = [w for w, t in tagged if t in allowed]

    bigrams = []
    seen = set()
    for i in range(len(filtered)-1):
        w1, w2 = filtered[i], filtered[i+1]
        if w1 == w2:
            continue
        # At least one word must be a negative seed word
        if w1 not in seeds_bc.value and w2 not in seeds_bc.value:
            continue
        key = tuple(sorted([w1, w2]))
        if key not in seen:
            seen.add(key)
            bigrams.append(w1 + " " + w2)
    return bigrams

df = spark.table("yelp.review")
sampled = df.filter(col("rev_stars") <= 2).sample(0.05, seed=42)

result = sampled.withColumn("bigrams", extract_negative_bigrams(col("rev_text"))) \
    .select(explode(col("bigrams")).alias("Bigram")) \
    .groupBy("Bigram").count() \
    .withColumnRenamed("count", "Frequency") \
    .orderBy(col("Frequency").desc()) \
    .limit(10)

print("=== Top 10 Negative Bigrams (Seed Filtered) ===")
z.show(result)