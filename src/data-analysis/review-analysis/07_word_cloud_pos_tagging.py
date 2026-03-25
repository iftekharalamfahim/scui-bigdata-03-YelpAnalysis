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
    "only","other","another","good","great","place","food","service","like",
    "back","people","things","stuff","little","never","every","definitely"
}
stop_bc = sc.broadcast(stop_words)

@udf(returnType=ArrayType(StringType()))
def extract_nouns_adjectives(text):
    if not text:
        return []
    import nltk
    tokens = [w.strip(".,!?\"'()[]:-") for w in text.lower().split()]
    tokens = [w for w in tokens if w.isalpha() and len(w) > 3
              and w not in stop_bc.value]
    tagged = nltk.pos_tag(tokens)
    allowed = {"NN","NNS","NNP","NNPS","JJ","JJR","JJS"}
    return [w for w, t in tagged if t in allowed]

df = spark.table("yelp.review")
sampled = df.sample(0.02, seed=42)

word_df = sampled.withColumn("words", extract_nouns_adjectives(col("rev_text"))) \
    .select(explode(col("words")).alias("Word")) \
    .groupBy("Word").count() \
    .withColumnRenamed("count", "Frequency") \
    .orderBy(col("Frequency").desc()) \
    .limit(100)

print("=== Word Cloud - Nouns & Adjectives Only (POS Tagged) ===")
z.show(word_df)

# Build HTML word cloud
words = word_df.collect()
max_freq = words[0]["Frequency"]

html = "<div style='width:100%;padding:20px;font-family:Arial;line-height:2.5;text-align:center;background:white'>"
for row in words:
    size = int(12 + (row["Frequency"] / max_freq) * 50)
    colors = ["#e74c3c","#3498db","#2ecc71","#f39c12","#9b59b6","#1abc9c","#e67e22"]
    color = colors[hash(row["Word"]) % len(colors)]
    html += "<span style='font-size:{}px;color:{};margin:8px;display:inline-block'>{}</span>".format(size, color, row["Word"])
html += "</div>"

z.angularBind("wordcloud_html", html)
print(z.angular("<div ng-bind-html='wordcloud_html'></div>"))