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
    "only","other","another","restaurant","menu","meal","dinner","lunch"
}
stop_bc = sc.broadcast(stop_words)

@udf(returnType=ArrayType(StringType()))
def extract_positive_bigrams(text):
    if not text:
        return []
    import nltk
    tokens = [w.strip(".,!?\"'()[]:-") for w in text.lower().split()]
    tokens = [w for w in tokens if w.isalpha() and len(w) > 3
              and w not in stop_bc.value]
    tagged = nltk.pos_tag(tokens)
    allowed = {"JJ","JJR","JJS","NN","NNS","RB","RBR"}
    filtered = [w for w, t in tagged if t in allowed]
    # Sort each bigram to eliminate reversals like "food good" vs "good food"
    return [" ".join(sorted([filtered[i], filtered[i+1]])) 
            for i in range(len(filtered)-1)]

df = spark.table("yelp.review")
sampled = df.filter(col("rev_stars") > 3).sample(0.02, seed=42)

result = sampled.withColumn("bigrams", extract_positive_bigrams(col("rev_text"))) \
    .select(explode(col("bigrams")).alias("Bigram")) \
    .groupBy("Bigram").count() \
    .withColumnRenamed("count", "Frequency") \
    .orderBy(col("Frequency").desc()) \
    .limit(10)

print("=== Top 10 Bigrams from Positive Reviews (NLTK + POS) ===")
z.show(result)