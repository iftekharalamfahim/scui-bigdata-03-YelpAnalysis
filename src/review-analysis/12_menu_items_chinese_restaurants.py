%pyspark
import pyspark.sql.functions as F
from pyspark.sql.functions import col, udf, explode
from pyspark.sql.types import ArrayType, StringType

# Predefined food dictionary
food_dict = [
    "noodles","dumpling","dumplings","fried rice","rice","soup",
    "dim sum","wonton","wontons","tofu","beef","chicken","pork",
    "shrimp","lobster","duck","spring roll","egg roll","hot pot",
    "hotpot","noodle","broth","bun","buns","congee","chow mein",
    "lo mein","bok choy","mapo","peking","szechuan","kung pao"
]
food_bc = sc.broadcast(food_dict)

# Parse business table
biz_raw = spark.table("yelp.json_business")
biz = biz_raw.withColumn("data", F.from_json(F.col("json_body"),
    spark.read.json(biz_raw.rdd.map(lambda r: r.json_body)).schema)).select("data.*")

# Get top 5 Chinese restaurants by review count
chinese_biz = biz.filter(
    (col("categories").contains("Chinese")) &
    (col("categories").contains("Restaurants"))
).orderBy(col("review_count").desc()).limit(5)

print("=== Top 5 Chinese Restaurants ===")
chinese_biz.select("business_id","name","city","review_count","stars").show(truncate=False)

top5_ids = [row.business_id for row in chinese_biz.select("business_id").collect()]

@udf(returnType=ArrayType(StringType()))
def find_food_items(text):
    if not text:
        return []
    text_lower = text.lower()
    return [item for item in food_bc.value if item in text_lower]

review_df = spark.table("yelp.review")

result = review_df.filter(col("rev_business_id").isin(top5_ids)) \
    .withColumn("food_items", find_food_items(col("rev_text"))) \
    .select(explode(col("food_items")).alias("Menu Item")) \
    .groupBy("Menu Item").count() \
    .withColumnRenamed("count", "Mentions") \
    .orderBy(col("Mentions").desc())

print("=== Most Mentioned Menu Items in Top 5 Chinese Restaurants ===")
z.show(result)