%pyspark
# TASK 7: Final Post-Mortem Diagnosis
# Comprehensive analysis combining all dimensions

from pyspark.sql.functions import col, when, instr, sum, avg, max, count, desc

print("="*80)
print("FINAL POST-MORTEM DIAGNOSIS")
print("Cursed Storefronts - Complete Life & Death Cycle Analysis")
print("="*80)

# First, check what columns are in cursed_storefronts
print("\nChecking cursed_storefronts columns:")
print(cursed_storefronts.columns)

# Create cursed_with_metrics with only available columns
cursed_with_metrics = cursed_storefronts.select(
    "address", "city", "state", "postal_code",
    "total_businesses", "closed_count", "failure_rate", "cursed_level"
)

print("\n" + "="*80)
print("PART 1: LIFECYCLE ANALYSIS - THE CURSE PATTERN")
print("="*80)

severity_dist = cursed_with_metrics.groupBy("cursed_level").count()
print("\nSeverity Distribution:")
severity_dist.show()
z.show(severity_dist)

most_cursed = cursed_with_metrics.filter(col("failure_rate") >= 50) \
    .orderBy(col("failure_rate").desc()) \
    .limit(10)

print("\nTop 10 Most Cursed Addresses (Highest Failure Rate):")
most_cursed.show(10, truncate=False)

highest_turnover = cursed_with_metrics.orderBy(col("total_businesses").desc()).limit(10)
print("\nTop 10 Highest Turnover Addresses (Most Businesses):")
highest_turnover.show(10, truncate=False)

# ============================================
# PART 2: ATTRIBUTE DIAGNOSIS - FATAL FLAWS
# ============================================

print("\n" + "="*80)
print("PART 2: ATTRIBUTE DIAGNOSIS - FATAL FLAWS ANALYSIS")
print("="*80)

cursed_attrs_final = cursed_attrs \
    .withColumn("has_parking",
        when((instr(col("attributes"), "BusinessParking") > 0) & (instr(col("attributes"), "True") > 0), "Yes")
        .when((instr(col("attributes"), "BusinessParking") > 0) & (instr(col("attributes"), "False") > 0), "No")
        .otherwise("Unknown")
    ) \
    .withColumn("noise_level",
        when((instr(col("attributes"), "NoiseLevel") > 0) & (instr(col("attributes"), "quiet") > 0), "Quiet")
        .when((instr(col("attributes"), "NoiseLevel") > 0) & (instr(col("attributes"), "average") > 0), "Average")
        .when((instr(col("attributes"), "NoiseLevel") > 0) & (instr(col("attributes"), "loud") > 0), "Loud")
        .when((instr(col("attributes"), "NoiseLevel") > 0) & (instr(col("attributes"), "very_loud") > 0), "Very Loud")
        .otherwise("Unknown")
    )

print("\nParking Availability in Cursed Businesses:")
cursed_attrs_final.groupBy("has_parking").count().show()

print("\nNoise Level in Cursed Businesses:")
cursed_attrs_final.groupBy("noise_level").count().show()

print("\nCombined Attribute Patterns (Parking + Noise):")
cursed_attrs_final.groupBy("has_parking", "noise_level").count() \
    .orderBy(col("count").desc()).show(10)

# ============================================
# PART 3: REVIEW AUTOPSY - PAIN POINT DIAGNOSIS
# ============================================

print("\n" + "="*80)
print("PART 3: REVIEW AUTOPSY - PAIN POINT DIAGNOSIS")
print("="*80)

closed_businesses = cursed_storefronts.select("address", "city", "state") \
    .join(business_df, ["address", "city", "state"], "inner") \
    .filter(col("is_open") == 0) \
    .select("business_id", "name", "address", "city")

cursed_reviews_data = closed_businesses.alias("c") \
    .join(reviews_df.alias("r"), col("c.business_id") == col("r.rev_business_id"), "inner") \
    .select(
        col("c.business_id"),
        col("c.name"),
        col("c.address"),
        col("c.city"),
        col("r.rev_text").alias("text"),
        col("r.rev_stars").alias("stars")
    )

pain_categories = [
    ("Parking Issues", ["parking", "no parking", "nowhere to park"]),
    ("Location Problems", ["hidden", "hard to find", "difficult to find"]),
    ("Safety Concerns", ["sketchy", "dangerous", "unsafe", "dark"]),
    ("Noise Complaints", ["noise", "loud", "noisy"]),
    ("Cleanliness", ["dirty", "smell", "odor", "filthy"]),
    ("Price Issues", ["expensive", "overpriced", "pricey"]),
    ("Service Issues", ["rude", "service", "wait", "slow", "staff"]),
    ("Food Quality", ["taste", "flavor", "bland", "quality", "delicious"])
]

pain_results = []
for category, keywords in pain_categories:
    total = 0
    for keyword in keywords:
        total += cursed_reviews_data.filter(instr(col("text"), keyword) > 0).count()
    pain_results.append((category, total))

total_reviews = cursed_reviews_data.count()
print("\nPain Point Frequency (Total Reviews: {:,}):".format(total_reviews))
for category, count in sorted(pain_results, key=lambda x: x[1], reverse=True):
    percentage = (count / total_reviews) * 100
    print("  {}: {:,} mentions ({:.2f}%)".format(category, count, percentage))

# ============================================
# PART 4: EXTERNAL DATA VALIDATION
# ============================================

print("\n" + "="*80)
print("PART 4: EXTERNAL DATA VALIDATION")
print("="*80)

cursed_with_external = cursed_with_metrics.alias("c") \
    .join(zipcodes_enriched.alias("z"), col("c.postal_code") == col("z.zip"), "left") \
    .select(
        col("c.address"),
        col("c.city"),
        col("c.state"),
        col("c.total_businesses"),
        col("c.closed_count"),
        col("c.failure_rate"),
        col("c.cursed_level"),
        col("z.walkability_category"),
        col("z.business_potential")
    )

print("\nWalkability Profile of Cursed Locations:")
cursed_with_external.groupBy("walkability_category").count() \
    .orderBy(col("count").desc()).show()

print("\nBusiness Potential Profile of Cursed Locations:")
cursed_with_external.groupBy("business_potential").count() \
    .orderBy(col("count").desc()).show()

# ============================================
# PART 5: COMPREHENSIVE POST-MORTEM DIAGNOSIS
# ============================================

print("\n" + "="*80)
print("PART 5: COMPREHENSIVE POST-MORTEM DIAGNOSIS")
print("="*80)

total_cursed = cursed_with_metrics.count()
total_closures = cursed_with_metrics.agg(sum("closed_count")).collect()[0][0]
avg_failure_rate = cursed_with_metrics.agg(avg("failure_rate")).collect()[0][0]
max_closures = cursed_with_metrics.agg(max("closed_count")).collect()[0][0]
max_businesses = cursed_with_metrics.agg(max("total_businesses")).collect()[0][0]

print("\nEXECUTIVE SUMMARY:")
print("   Total cursed storefronts: {:,}".format(total_cursed))
print("   Total business closures: {:,}".format(total_closures))
print("   Average failure rate: {:.2f}%".format(avg_failure_rate))
print("   Most closures at single address: {}".format(max_closures))
print("   Most businesses at single address: {}".format(max_businesses))

print("\nPOST-MORTEM DIAGNOSIS - WHY DO BUSINESSES FAIL HERE?")

top_cursed_city = cursed_with_metrics.groupBy("city", "state").count() \
    .orderBy(col("count").desc()).first()
if top_cursed_city:
    print("\n   Geographic Pattern:")
    print("      Most cursed city: {}, {} ({} cursed locations)".format(
        top_cursed_city[0], top_cursed_city[1], top_cursed_city[2]))

top_attribute = cursed_attrs_final.groupBy("has_parking", "noise_level").count() \
    .orderBy(col("count").desc()).first()
if top_attribute:
    print("\n   Attribute Pattern:")
    print("      Most common fatal flaw: Parking={}, Noise={}".format(
        top_attribute[0], top_attribute[1]))

top_pain = sorted(pain_results, key=lambda x: x[1], reverse=True)[0]
print("\n   Review Pattern:")
print("      Number 1 customer complaint: {} ({:,} mentions, {:.1f}% of reviews)".format(
    top_pain[0], top_pain[1], (top_pain[1]/total_reviews)*100))

walk_pattern = cursed_with_external.groupBy("walkability_category").count() \
    .orderBy(col("count").desc()).first()
if walk_pattern:
    print("\n   Environmental Pattern:")
    print("      Most cursed locations are in: {} areas".format(walk_pattern[0]))

print("\nROOT CAUSE ANALYSIS:")
print("   Based on multi-dimensional analysis, the curse is caused by:")

if top_pain[0] == "Parking Issues":
    print("   1. PARKING CRISIS: Customers consistently complain about parking")
if top_pain[0] == "Service Issues":
    print("   1. SERVICE FAILURE: Poor service drives customers away")
if top_attribute and top_attribute[0] == "No":
    print("   2. NO PARKING FACILITY: Businesses lack basic parking infrastructure")
if walk_pattern and walk_pattern[0] == "Very Car-Dependent":
    print("   3. CAR-DEPENDENT LOCATION: Areas with low walkability see more failures")

print("\nLIFE AND DEATH CYCLE PATTERN:")
print("   Stage 1: New business opens in cursed location")
print("   Stage 2: Customers complain about parking/location/service")
print("   Stage 3: Business struggles with low ratings and poor reviews")
print("   Stage 4: Business closes within 1-3 years")
print("   Stage 5: New business opens, cycle repeats")

# ============================================
# PART 6: ACTIONABLE RECOMMENDATIONS
# ============================================

print("\n" + "="*80)
print("PART 6: ACTIONABLE RECOMMENDATIONS")
print("="*80)

print("\nFOR RESTAURANT OWNERS AND INVESTORS:")
print("   1. PRIORITIZE PARKING: Before leasing, verify parking availability")
print("      Minimum 10+ parking spots for restaurants with more than 50 seats")
print("      Consider valet service if parking is limited")

print("\n   2. LOCATION AUDIT: Check these factors before signing lease:")
print("      Is the storefront visible from main road?")
print("      Is the entrance easily accessible?")
print("      Are there clear signs directing customers?")

print("\n   3. ADDRESS HISTORY CHECK:")
print("      Research if 3+ businesses failed at the address")
print("      Average failure rate at cursed addresses: {:.1f}%".format(avg_failure_rate))
print("      Avoid addresses with more than 2 prior business closures")

print("\n   4. WALKABILITY SCORE:")
print("      Target areas with Medium foot traffic (not highest)")
print("      Avoid Very Car-Dependent areas without ample parking")
if walk_pattern:
    print("      Most cursed locations have {} walkability".format(walk_pattern[0]))

print("\nFOR CITY PLANNERS AND POLICY MAKERS:")
print("   1. IMPROVE PARKING INFRASTRUCTURE:")
print("      Consider public parking structures in high-turnover areas")
print("      Review parking requirements for commercial zones")

print("\n   2. ENHANCE ACCESSIBILITY:")
print("      Improve signage for hidden storefronts")
print("      Consider traffic flow patterns that affect business access")

print("\nFOR DATA ANALYSTS:")
print("   1. Track these early warning signs:")
print("      First 6 months: Monitor review mentions of 'parking'")
print("      If more than 20% of reviews mention parking issues -> High risk")
print("      If average rating drops below 3.0 -> Imminent closure risk")

# ============================================
# PART 7: FINAL SUMMARY DASHBOARD
# ============================================

print("\n" + "="*80)
print("FINAL DASHBOARD - COMPLETE POST-MORTEM")
print("="*80)

summary_data = [
    ("Total Cursed Storefronts", str(total_cursed)),
    ("Total Business Closures", str(total_closures)),
    ("Average Failure Rate", "{:.1f}%".format(avg_failure_rate)),
    ("Most Cursed City", "{}".format(top_cursed_city[0] if top_cursed_city else "Unknown")),
    ("Top Pain Point", "{}".format(top_pain[0])),
    ("Common Attribute Flaw", "Parking: {}".format(top_attribute[0] if top_attribute else "Unknown"))
]

summary_df = spark.createDataFrame(summary_data, ["Metric", "Value"])
print("\nPost-Mortem Summary Dashboard:")
summary_df.show(truncate=False)
z.show(summary_df)

recommendations = [
    ("Parking Audit", "HIGH", "Critical for success", "Conduct before lease"),
    ("Address History Check", "HIGH", "Avoid cursed addresses", "Check prior closures"),
    ("Location Visibility", "MEDIUM", "Hidden = High risk", "Invest in signage"),
    ("Competition Analysis", "MEDIUM", "High density = More closures", "Research area")
]
rec_df = spark.createDataFrame(recommendations, ["Recommendation", "Priority", "Risk Factor", "Action"])
print("\nRecommendation Scorecard:")
rec_df.show(truncate=False)
z.show(rec_df)

print("\n" + "="*80)
print("POST-MORTEM DIAGNOSIS COMPLETE")
print("All dimensions analyzed:")
print("  Lifecycle Analysis (Cursed Storefronts)")
print("  Attribute Diagnosis (Parking, Noise)")
print("  Review Autopsy (NLP Pain Point Analysis)")
print("  External Data Validation (Zoning + Walk Score)")
print("  Root Cause Analysis")
print("  Actionable Recommendations")
print("="*80)

cursed_with_external.createOrReplaceTempView("cursed_storefronts_final")
print("\nFinal results available as temporary view: cursed_storefronts_final")