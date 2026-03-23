%pyspark

from pyspark.sql.functions import *
from pyspark.sql.window import Window

user_df = spark.table("yelp_db.users")
review_df = spark.table("yelp_db.review")
business_df = spark.table("yelp_db.business")
tip_df = spark.table("yelp_db.tip")
checkin_df = spark.table("yelp_db.checkin")