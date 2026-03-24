%pyspark
from pyspark.sql import functions as F

business_df = spark.table("business")

result = business_df \
    .filter(business_df.categories.like("%Restaurants%")) \
    .selectExpr(
        "CASE " +
        "  WHEN categories LIKE '%American%'       THEN 'American'       " +
        "  WHEN categories LIKE '%Mexican%'        THEN 'Mexican'        " +
        "  WHEN categories LIKE '%Italian%'        THEN 'Italian'        " +
        "  WHEN categories LIKE '%Japanese%'       THEN 'Japanese'       " +
        "  WHEN categories LIKE '%Chinese%'        THEN 'Chinese'        " +
        "  WHEN categories LIKE '%Thai%'           THEN 'Thai'           " +
        "  WHEN categories LIKE '%Mediterranean%'  THEN 'Mediterranean'  " +
        "  WHEN categories LIKE '%French%'         THEN 'French'         " +
        "  WHEN categories LIKE '%Vietnamese%'     THEN 'Vietnamese'     " +
        "  WHEN categories LIKE '%Greek%'          THEN 'Greek'          " +
        "  WHEN categories LIKE '%Indian%'         THEN 'Indian'         " +
        "  WHEN categories LIKE '%Korean%'         THEN 'Korean'         " +
        "  WHEN categories LIKE '%Hawaiian%'       THEN 'Hawaiian'       " +
        "  WHEN categories LIKE '%African%'        THEN 'African'        " +
        "  WHEN categories LIKE '%Spanish%'        THEN 'Spanish'        " +
        "  WHEN categories LIKE '%Middle Eastern%' THEN 'Middle Eastern' " +
        "  ELSE 'Other' " +
        "END AS cuisine_type"
    ) \
    .filter("cuisine_type != 'Other'") \
    .groupBy("cuisine_type") \
    .count() \
    .withColumnRenamed("count", "Restaurant Count") \
    .withColumnRenamed("cuisine_type", "Cuisine Type") \
    .orderBy("Restaurant Count", ascending=False)

print("=== Number of Restaurant Types ===")
result.show(16)
z.show(result)