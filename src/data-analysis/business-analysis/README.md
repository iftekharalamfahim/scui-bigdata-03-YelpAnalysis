# Business Analysis Report

This directory contains comprehensive analysis of Yelp business data, focusing on merchant distribution, ratings, categories, and customer sentiment. All analyses were conducted using PySpark on the Yelp dataset.

## Table of Contents

1. [Top 20 Most Common Merchants](#1-top-20-most-common-merchants)
2. [Top 10 Cities with Most Merchants](#2-top-10-cities-with-most-merchants)
3. [Top 5 States with Most Merchants](#3-top-5-states-with-most-merchants)
4. [Top 20 Merchants with Average Ratings](#4-top-20-merchants-with-average-ratings)
5. [Category Count Analysis](#5-category-count-analysis)
6. [Top 10 Most Frequent Categories](#6-top-10-most-frequent-categories)
7. [Top 20 Merchants with Most 5-Star Reviews](#7-top-20-merchants-with-most-5-star-reviews)
8. [Restaurant Types Count](#8-restaurant-types-count)
9. [Reviews per Restaurant Type](#9-reviews-per-restaurant-type)
10. [Rating Distribution by Cuisine Type](#10-rating-distribution-by-cuisine-type)
11. [Turnaround Merchants Analysis](#11-turnaround-merchants-analysis)
12. [Category Synergy Pairs](#12-category-synergy-pairs)
13. [Polarizing Businesses Analysis](#13-polarizing-businesses-analysis)

---

## 1. Top 20 Most Common Merchants

**Objective:** Identify the 20 most frequently occurring merchant chains across the U.S. Yelp dataset.

### Key Findings
- **Starbucks** leads with 724 locations
- **McDonald's** follows with 703 locations
- Top chains include major brands: Dunkin', Subway, Taco Bell, CVS Pharmacy, Walgreens, Burger King, Wendy's, Wawa
- Fast food and convenience retail dominate the top positions

### Data Files
- **Results:** [`01_top_20_merchants.csv`](../../../results/data-analysis/business-analysis/csv/01_top_20_merchants.csv)
- **Visualization:** [`01_top_20_merchants_chart.png`](../../../results/data-analysis/business-analysis/graphs/01_top_20_merchants_chart.png)

![Top 20 Most Common Merchants](../../../results/data-analysis/business-analysis/graphs/01_top_20_merchants_chart.png)

### Source Code
- **Script:** [`01_top_20_merchants.py`](01_top_20_merchants.py)

---

## 2. Top 10 Cities with Most Merchants

**Objective:** Identify urban markets with the highest merchant concentration.

### Key Findings
- **Philadelphia** leads with 14,569 merchants
- **Tucson** (9,250) and **Tampa** (9,050) follow
- Geographic distribution shows concentration in major metropolitan areas
- Top 10 cities account for a significant portion of the dataset

| City | Merchant Count |
|------|-----------------|
| Philadelphia | 14,569 |
| Tucson | 9,250 |
| Tampa | 9,050 |
| Indianapolis | 7,540 |
| Nashville | 6,971 |

### Data Files
- **Results:** [`02_top_10_cities.csv`](../../../results/data-analysis/business-analysis/csv/02_top_10_cities.csv)
- **Visualization:** [`02_top_10_cities_table.png`](../../../results/data-analysis/business-analysis/graphs/02_top_10_cities_table.png)

![Top 10 Cities with Most Merchants](../../../results/data-analysis/business-analysis/graphs/02_top_10_cities_table.png)

### Source Code
- **Script:** [`02_top_10_cities.py`](02_top_10_cities.py)

---

## 3. Top 5 States with Most Merchants

**Objective:** Analyze merchant distribution at the state level.

### Key Findings
- **Pennsylvania (PA)** dominates with 34,039 merchants
- **Florida (FL)** follows with 26,330 merchants
- **Tennessee (TN), Indiana (IN), Missouri (MO)** complete the top 5
- These 5 states represent major markets for the Yelp platform

| State | Merchant Count |
|-------|-----------------|
| PA | 34,039 |
| FL | 26,330 |
| TN | 12,056 |
| IN | 11,247 |
| MO | 10,913 |

### Data Files
- **Results:** [`03_top_5_states.csv`](../../../results/data-analysis/business-analysis/csv/03_top_5_states.csv)
- **Visualization:** [`03_top_5_states_table.png`](../../../results/data-analysis/business-analysis/graphs/03_top_5_states_table.png)

![Top 5 States with Most Merchants](../../../results/data-analysis/business-analysis/graphs/03_top_5_states_table.png)

### Source Code
- **Script:** [`03_top_5_states.py`](03_top_5_states.py)

---

## 4. Top 20 Merchants with Average Ratings

**Objective:** Identify the most common merchant chains and their average customer satisfaction ratings.

### Key Findings
- **Starbucks** has an average rating of 3.13 ⭐
- **Wawa** leads high-traffic chains with 3.32 ⭐
- **Chick-fil-A** and **Enterprise Rent-A-Car** maintain 3.38+ ⭐ ratings
- Fast food retailers generally score lower (1.8-2.5 ⭐ range)
- Premium/specialty retailers score higher

### Data Files
- **Results:** [`04_top_20_merchants_avg_rating.csv`](../../../results/data-analysis/business-analysis/csv/04_top_20_merchants_avg_rating.csv)
- **Visualization:** [`04_top_20_merchants_avg_rating.png`](../../../results/data-analysis/business-analysis/graphs/04_top_20_merchants_avg_rating.png)

![Top 20 Merchants with Average Ratings](../../../results/data-analysis/business-analysis/graphs/04_top_20_merchants_avg_rating.png)

### Source Code
- **Script:** [`04_top_20_merchants_avg_rating.py`](04_top_20_merchants_avg_rating.py)

---

## 5. Category Count Analysis

**Objective:** Determine the total diversity of business categories in the dataset.

### Key Findings
- **1,311 distinct categories** are represented in the Yelp dataset
- This demonstrates significant category diversity
- Categories span from broad types (Restaurants, Shopping) to highly specific niches

### Data Files
- **Results:** [`05_count_categories.py`](05_count_categories.py) (logic in source code)

### Source Code
- **Script:** [`05_count_categories.py`](05_count_categories.py)

---

## 6. Top 10 Most Frequent Categories

**Objective:** Identify the most common business categories across all merchants.

### Key Findings
- **Restaurants** category dominates with 52,268 occurrences
- **Food** (27,781) and **Shopping** (24,395) are also heavily represented
- **Home Services** (14,356) and **Beauty & Spas** (14,292) are significant categories
- Top 10 categories represent broad segments of the economy

| Category | Count |
|----------|-------|
| Restaurants | 52,268 |
| Food | 27,781 |
| Shopping | 24,395 |
| Home Services | 14,356 |
| Beauty & Spas | 14,292 |
| Nightlife | 12,281 |
| Health & Medical | 11,890 |
| Local Services | 11,198 |
| Bars | 11,065 |
| Automotive | 10,773 |

### Data Files
- **Results:** [`06_top_10_categories.csv`](../../../results/data-analysis/business-analysis/csv/06_top_10_categories.csv)
- **Visualization:** [`05_count_categories.png`](../../../results/data-analysis/business-analysis/graphs/05_count_categories.png)

![Top 10 Most Frequent Categories](../../../results/data-analysis/business-analysis/graphs/05_count_categories.png)

### Source Code
- **Script:** [`06_top_10_categories.py`](06_top_10_categories.py)

---

## 7. Top 20 Merchants with Most 5-Star Reviews

**Objective:** Identify merchants that have earned the highest customer satisfaction, as indicated by 5-star review volume.

### Key Findings
- **Reading Terminal Market** leads with 4,014 five-star reviews
- **Oceana Grill** (4,012) and **Hattie B's Hot Chicken - Nashville** (3,838) follow
- These merchants demonstrate exceptional customer satisfaction
- Fine dining and specialty food venues dominate the top positions

### Top 5 Merchants
1. Reading Terminal Market - 4,014 ⭐⭐⭐⭐⭐
2. Oceana Grill - 4,012 ⭐⭐⭐⭐⭐
3. Hattie B's Hot Chicken - Nashville - 3,838 ⭐⭐⭐⭐⭐
4. Acme Oyster House - 3,645 ⭐⭐⭐⭐⭐
5. Commander's Palace - 3,095 ⭐⭐⭐⭐⭐

### Data Files
- **Results:** [`07_top_20_merchants_5star_reviews.csv`](../../../results/data-analysis/business-analysis/csv/07_top_20_merchants_5star_reviews.csv)
- **Visualization:** [`07_top_20_merchants_5star_reviews.png`](../../../results/data-analysis/business-analysis/graphs/07_top_20_merchants_5star_reviews.png)

![Top 20 Merchants with Most 5-Star Reviews](../../../results/data-analysis/business-analysis/graphs/07_top_20_merchants_5star_reviews.png)

### Source Code
- **Script:** [`07_top_20_merchants_5star_reviews.py`](07_top_20_merchants_5star_reviews.py)

---

## 8. Restaurant Types Count

**Objective:** Quantify the distribution of different restaurant cuisine types in the dataset.

### Methodology
Restaurants are identified by the "Restaurants" category. Cuisine types are extracted using pattern matching on business categories:
- American, Mexican, Italian, Japanese, Chinese, Thai, Mediterranean, French, Vietnamese, Greek, Indian, Korean, Hawaiian, African, Spanish, Middle Eastern

### Key Findings
- **American restaurants** dominate with 13,066 locations (49.2% of categorized restaurants)
- **Mexican** (4,049) and **Italian** (3,997) follow with similar counts
- **Asian cuisines** (Chinese, Japanese, Thai, Vietnamese, Korean) represent significant segments
- Total categorized restaurants across identified cuisines: **26,536+**

### Distribution
| Cuisine Type | Count |
|--------------|-------|
| American | 13,066 |
| Mexican | 4,049 |
| Italian | 3,997 |
| Chinese | 2,719 |
| Japanese | 1,765 |
| Mediterranean | 920 |
| Indian | 754 |
| Thai | 687 |
| Vietnamese | 592 |

### Data Files
- **Results:** [`08_restaurant_types_count.csv`](../../../results/data-analysis/business-analysis/csv/08_restaurant_types_count.csv)
- **Visualization:** [`08_restaurant_types_count.png`](../../../results/data-analysis/business-analysis/graphs/08_restaurant_types_count.png)

![Restaurant Types Count](../../../results/data-analysis/business-analysis/graphs/08_restaurant_types_count.png)

### Source Code
- **Script:** [`08_restaurant_types_count.py`](08_restaurant_types_count.py)

---

## 9. Reviews per Restaurant Type

**Objective:** Analyze the volume of customer reviews for each restaurant cuisine type.

### Key Findings
- **American restaurants** attract the most reviews: 1,730,875 total
- **Italian** (355,606) and **Mexican** (349,269) also receive substantial review volumes
- **Asian cuisines** show strong engagement: Japanese (203,535), Chinese (180,324)
- Average review volume per restaurant type indicates customer engagement levels

### Top 5 by Review Volume
| Cuisine Type | Review Count |
|--------------|--------------|
| American | 1,730,875 |
| Italian | 355,606 |
| Mexican | 349,269 |
| Japanese | 203,535 |
| Chinese | 180,324 |

### Data Files
- **Results:** [`09_review_count_by_cuisine.csv`](../../../results/data-analysis/business-analysis/csv/09_review_count_by_cuisine.csv)
- **Visualization:** [`09_review_count_by_cuisine.png`](../../../results/data-analysis/business-analysis/graphs/09_review_count_by_cuisine.png)

![Reviews per Restaurant Type](../../../results/data-analysis/business-analysis/graphs/09_review_count_by_cuisine.png)

### Source Code
- **Script:** [`09_review_count_by_cuisine.py`](09_review_count_by_cuisine.py)

---

## 10. Rating Distribution by Cuisine Type

**Objective:** Analyze how customer ratings vary across different restaurant cuisine types, including the full 1-5 star distribution.

### Methodology
Reviews are grouped by cuisine type and star rating (1.0 to 5.0) to create a detailed distribution matrix. This reveals customer satisfaction patterns specific to each cuisine.

### Key Findings
- **American restaurants** show highest concentration in 5-star reviews (729,469)
- **American restaurants** also have highest 1-star reviews (199,593), indicating polarized opinions
- **Italian and Mexican** cuisines show balanced rating distributions
- **High-star cuisines**: Mediterranean, Thai, Indian maintain higher average ratings
- **Lower-rated cuisines**: Some niche cuisines receive more critical reviews

### Sample Distribution (American Cuisine)
| Stars | Review Count |
|-------|--------------|
| 1.0 | 199,593 |
| 2.0 | 157,956 |
| 3.0 | 215,166 |
| 4.0 | 428,691 |
| 5.0 | 729,469 |

### Data Files
- **Results:** [`10_rating_distribution_by_cuisine.csv`](../../../results/data-analysis/business-analysis/csv/10_rating_distribution_by_cuisine.csv)
- **Visualization:** [`10_rating_distribution_by_cuisine.png`](../../../results/data-analysis/business-analysis/graphs/10_rating_distribution_by_cuisine.png)

![Rating Distribution by Cuisine Type](../../../results/data-analysis/business-analysis/graphs/10_rating_distribution_by_cuisine.png)

### Source Code
- **Script:** [`10_rating_distribution_by_cuisine.py`](10_rating_distribution_by_cuisine.py)

---

## 11. Turnaround Merchants Analysis

**Objective:** Identify businesses whose customer satisfaction has significantly improved, with average rating improvement of at least 1.0 star in the last 12 months compared to their historical average.

### Methodology
1. Calculate historical average rating for all reviews
2. Calculate recent average rating (last 12 months only)
3. Identify businesses with improvement ≥ 1.0 star
4. Filter for meaningful changes in customer perception

### Key Findings
- **Top turnaround**: Superior Heating & Cooling Management (1.31 → 5.0, +3.69 improvement)
- **Lawn Medic**: 1.36 → 5.0 (+3.64 improvement)
- **Moon's Towing**: 1.38 → 5.0 (+3.62 improvement)
- Many service businesses show dramatic improvements
- Suggests successful operational/service quality improvements

### Top 10 Turnarounds
| Business Name | Historical Avg | Recent Avg (12mo) | Improvement |
|---------------|----------------|-------------------|-------------|
| Superior Heating & Cooling Management | 1.31 | 5.0 | +3.69 |
| Lawn Medic | 1.36 | 5.0 | +3.64 |
| Moon's Towing | 1.38 | 5.0 | +3.62 |
| Takl | 1.41 | 5.0 | +3.59 |
| Taco Bell | 1.43 | 5.0 | +3.57 |
| West Hills Hospital | 1.43 | 5.0 | +3.57 |
| Temple Physicians at Palmer Park | 1.45 | 5.0 | +3.55 |
| Premium Leisure | 1.46 | 5.0 | +3.54 |
| Labcorp | 1.47 | 5.0 | +3.53 |
| Affordable Wholesale Appliances | 1.5 | 5.0 | +3.5 |

### Data Files
- **Results:** [`11_turnaround_merchants.csv`](../../../results/data-analysis/business-analysis/csv/11_turnaround_merchants.csv)
- **Visualization:** [`11_turnaround_merchants.png`](../../../results/data-analysis/business-analysis/graphs/11_turnaround_merchants.png)

![Turnaround Merchants Analysis](../../../results/data-analysis/business-analysis/graphs/11_turnaround_merchants.png)

### Source Code
- **Script:** [`11_turnaround_merchants.py`](11_turnaround_merchants.py)

### Business Insights
- Service-oriented businesses (HVAC, lawn care, towing) appear most frequently
- Suggests potential adoption of new customer service practices
- Could indicate management changes or service quality improvements

---

## 12. Category Synergy Pairs

**Objective:** Identify the top 10 pairs of distinct business categories that frequently co-occur within the same merchant's profile, revealing business complementarity.

### Methodology
1. Extract all categories from each business profile
2. Generate all pairwise combinations of distinct categories
3. Count co-occurrence frequency
4. Identify top pairs by frequency

### Key Findings
- **Food + Restaurants** co-occur most frequently (15,472 times) - natural pairing
- **Bars + Nightlife** strongly associated (11,065 times) - logical category relationship
- **Nightlife + Restaurants** (8,723) - bars often serve food
- **Restaurants + Sandwiches** (8,366) - many restaurants specialize in sandwiches

### Top 10 Category Pairs
| Category 1 | Category 2 | Co-occurrence Count |
|-----------|-----------|-------------------|
| Food | Restaurants | 15,472 |
| Bars | Nightlife | 11,065 |
| Nightlife | Restaurants | 8,723 |
| Restaurants | Sandwiches | 8,366 |
| Bars | Restaurants | 8,337 |
| American (Traditional) | Restaurants | 8,139 |
| Pizza | Restaurants | 7,093 |
| Coffee & Tea | Food | 6,703 |
| Fast Food | Restaurants | 6,472 |
| Breakfast & Brunch | Restaurants | 6,239 |

### Data Files
- **Results:** [`12_category_synergy_pairs.csv`](../../../results/data-analysis/business-analysis/csv/12_category_synergy_pairs.csv)
- **Visualization:** [`12_category_synergy_pairs.png`](../../../results/data-analysis/business-analysis/graphs/12_category_synergy_pairs.png)

![Category Synergy Pairs](../../../results/data-analysis/business-analysis/graphs/12_category_synergy_pairs.png)

### Source Code
- **Script:** [`12_category_synergy_pairs.py`](12_category_synergy_pairs.py)

### Business Application
- Multi-category classification improves recommendation systems
- Reveals natural business diversification opportunities
- Informs cross-category marketing and promotion strategies

---

## 13. Polarizing Businesses Analysis

**Objective:** Identify merchants with high review volumes but extremely divisive ratings (high standard deviation), indicating businesses that inspire passionate customer opinions.

### Methodology
1. Filter businesses with ≥100 reviews (to ensure statistical significance)
2. Calculate standard deviation of rating distribution
3. Rank by standard deviation (descending)
4. Top results represent most "love it or hate it" businesses

### Key Findings
- **Apple Repair Shop**: 112 reviews, σ=1.94, avg=2.8 ⭐
- **Zak Dental - Santa Barbara**: 123 reviews, σ=1.93, avg=2.94 ⭐
- Automotive dealerships show high polarization (Nissan, Hyundai, Chevrolet)
- Dental clinics demonstrate divisive customer experiences
- These businesses could benefit from consistency improvements

### Top 10 Polarizing Businesses
| Business Name | Review Count | Average Rating | Std Deviation |
|---------------|--------------|----------------|---------------|
| Apple Repair Shop | 112 | 2.8 | 1.94 |
| Zak Dental - Santa Barbara | 123 | 2.94 | 1.93 |
| Napleton Hyundai of Carmel | 112 | 2.76 | 1.92 |
| Nissan of Clearwater | 176 | 2.96 | 1.91 |
| Champion Chevrolet | 145 | 2.88 | 1.91 |
| Reno Buick GMC Cadillac | 188 | 3.11 | 1.91 |
| Chapman Ford of Horsham | 108 | 3.05 | 1.91 |
| CarZone | 147 | 2.54 | 1.9 |
| Vanderbilt University Medical Center | 102 | 3.13 | 1.9 |
| Lithia Hyundai of Reno | 164 | 2.77 | 1.9 |

### Data Files
- **Results:** [`13_polarizing_businesses.csv`](../../../results/data-analysis/business-analysis/csv/13_polarizing_businesses.csv)
- **Visualization:** [`13_polarizing_businesses.png`](../../../results/data-analysis/business-analysis/graphs/13_polarizing_businesses.png)

![Polarizing Businesses Analysis](../../../results/data-analysis/business-analysis/graphs/13_polarizing_businesses.png)

### Source Code
- **Script:** [`13_polarizing_businesses.py`](13_polarizing_businesses.py)

---

## Notebooks

The complete analysis workflow is documented in:
- **Zeppelin Notebook**: [`business_analysis.zpln`](../../../notebooks/business-analysis/business_analysis.zpln)

## Visualization Files

All charts and summary tables are located in:
- [`../../../results/data-analysis/business-analysis/graphs/`](../../../results/data-analysis/business-analysis/graphs/)

Each analysis includes:
- High-resolution PNG charts
- Data tables formatted for easy interpretation
- Visual hierarchy emphasizing key findings

## Key Metrics Summary

| Metric | Value |
|--------|-------|
| Total Distinct Categories | 1,311 |
| Top Merchant Chain Locations | 724 (Starbucks) |
| Largest City Market | 14,569 merchants (Philadelphia) |
| Most Reviewed Cuisine | 1,730,875 reviews (American) |
| Highest 5-Star Count | 4,014 reviews (Reading Terminal Market) |
| Cuisine Type Diversity | 16 primary cuisines analyzed |
| Turnaround Merchants Identified | 200+ |
| Top Category Pair Co-occurrence | 15,472 (Food + Restaurants) |

---

**Last Updated**: March 2026  
**Data Period**: Historical Yelp dataset through January 2022  
**Analysis Tool**: Apache Spark (PySpark)
