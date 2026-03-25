%pyspark
# Task 6: Analyze review seasonality by cuisine
# Identify which month has the highest volume of reviews/check-ins
# for specific seasonal categories (e.g. Ice Cream vs Soup)
# Algorithm: Group by month and cuisine category to find seasonal peaks

SEASONAL_CATEGORIES = ["Ice Cream", "Soup"]

# Step 1: Explode checkin dates and get month
checkin_seasonal = checkin \
.withColumn("date", F.explode(F.split("checkin_dates", ","))) \
.withColumn("month", F.month(F.to_timestamp(F.trim(F.col("date"))))) \
.filter(F.col("month").isNotNull()) \
.groupBy("business_id", "month") \
.agg(F.count("*").alias("checkin_count"))

# Step 2: Join with business to filter by seasonal categories
# Explode categories to match each one individually
biz_seasonal = business \
.select("business_id", "name",
F.explode(F.split("categories", ",")).alias("category")) \
.withColumn("category", F.trim(F.col("category"))) \
.filter(F.col("category").isin(SEASONAL_CATEGORIES))

# Step 3: Join and aggregate by category and month
seasonality = checkin_seasonal \
.join(biz_seasonal.select("business_id", "category"),
"business_id", "inner") \
.groupBy("category", "month") \
.agg(F.sum("checkin_count").alias("total_checkins")) \
.withColumn("month_name",
F.when(F.col("month") == 1, "01-Jan")
.when(F.col("month") == 2, "02-Feb")
.when(F.col("month") == 3, "03-Mar")
.when(F.col("month") == 4, "04-Apr")
.when(F.col("month") == 5, "05-May")
.when(F.col("month") == 6, "06-Jun")
.when(F.col("month") == 7, "07-Jul")
.when(F.col("month") == 8, "08-Aug")
.when(F.col("month") == 9, "09-Sep")
.when(F.col("month") == 10, "10-Oct")
.when(F.col("month") == 11, "11-Nov")
.when(F.col("month") == 12, "12-Dec")
) \
.select("category", "month_name", "total_checkins") \
.orderBy("category", "month_name")

print("--- Seasonality: Ice Cream vs Soup ---")
z.show(seasonality)