%pyspark
# Load philadelphia_crime, business, review, checkin tables
# Define crime severity classification (Rule-Based Classification)

from pyspark.sql import functions as F
from pyspark.sql.window import Window

crime   = spark.table("external_data.philadelphia_crime")
business = spark.table("yelp.business")
review   = spark.table("yelp.review")
checkin  = spark.table("yelp.checkin")

# Filter Philadelphia only
philly_biz = business.filter(
    (F.col("city") == "Philadelphia") &
    (F.col("state") == "PA") &
    F.col("categories").contains("Restaurants")
)

print(f"Total crime records      : {crime.count():,}")
print(f"Philadelphia restaurants : {philly_biz.count():,}")

# Define crime severity classification
HIGH_SEVERITY = [
    "Aggravated Assault Firearm",
    "Aggravated Assault No Firearm",
    "Robbery Firearm",
    "Robbery No Firearm",
    "Weapon Violations",
    "Homicide - Criminal"
]

MEDIUM_SEVERITY = [
    "Thefts",
    "Theft from Vehicle",
    "Motor Vehicle Theft",
    "Burglary Residential",
    "Burglary Non-Residential",
    "Narcotic / Drug Law Violations"
]

# Build severity column
severity_expr = (
    F.when(F.col("text_general_code").isin(HIGH_SEVERITY),   "HIGH")
     .when(F.col("text_general_code").isin(MEDIUM_SEVERITY), "MEDIUM")
     .otherwise("LOW")
)

crime = crime.withColumn("severity", severity_expr)

print("\nSeverity distribution:")
crime.groupBy("severity").count().orderBy("severity").show()

z.show(crime.groupBy("severity").count().orderBy("severity"))