%pyspark
from pyspark.sql import functions as F

# List of cuisine categories as given
cuisines = [
    "American", "Mexican", "Italian", "Japanese", "Chinese", "Thai",
    "Mediterranean", "French", "Vietnamese", "Greek", "Indian", "Korean",
    "Hawaiian", "African", "Spanish", "Middle Eastern"
]

data = []
for cuisine in cuisines:
    cnt = (spark.table("business")
           .filter(F.col("categories").contains(cuisine))
           .count())
    data.append((cuisine, cnt))

df = spark.createDataFrame(data, ["cuisine", "count"])
print("=== Number of Restaurant Types ===")
df.show()
z.show(df)
# Chart suggestion: bar chart (keys: cuisine, values: count)