%pyspark
from pyspark.sql import functions as F

cuisines = [
    "American", "Mexican", "Italian", "Japanese", "Chinese", "Thai",
    "Mediterranean", "French", "Vietnamese", "Greek", "Indian", "Korean",
    "Hawaiian", "African", "Spanish", "Middle Eastern"
]

data = []
for cuisine in cuisines:
    # Get business IDs belonging to this cuisine
    biz_ids = [row.business_id for row in spark.table("business")
               .filter(F.col("categories").contains(cuisine))
               .select("business_id").collect()]

    if biz_ids:
        rev_cnt = (spark.table("review")
                   .filter(F.col("business_id").isin(biz_ids))
                   .count())
    else:
        rev_cnt = 0
    data.append((cuisine, rev_cnt))

df = spark.createDataFrame(data, ["cuisine", "review_count"])
print("=== Number of Reviews per Restaurant Type ===")
df.show()
z.show(df)
# Chart suggestion: bar chart (keys: cuisine, values: review_count)