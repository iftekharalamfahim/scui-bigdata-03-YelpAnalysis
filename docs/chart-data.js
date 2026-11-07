window.CHART_DATA = {
  "generated": true,
  "total": 90,
  "modules": [
    {
      "id": "data-analysis-business-analysis",
      "track": "data-analysis",
      "module": "Business Analysis",
      "path": "data-analysis/business-analysis",
      "count": 12,
      "charts": [
        {
          "id": "data-analysis-business-analysis-01-top-20-merchants",
          "title": "Top 20 Merchants",
          "source": "data-analysis/business-analysis/csv/01_top_20_merchants.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Starbucks",
            "McDonald's",
            "Dunkin'",
            "Subway",
            "Taco Bell",
            "CVS Pharmacy",
            "Walgreens",
            "Burger King",
            "Wendy's",
            "Wawa",
            "Domino's Pizza",
            "The UPS Store",
            "Pizza Hut",
            "Enterprise Rent-A-Car",
            "Papa John's Pizza",
            "Great Clips",
            "Jimmy John's",
            "US Post Office",
            "KFC",
            "Chick-fil-A"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                724.0,
                703.0,
                510.0,
                459.0,
                365.0,
                345.0,
                341.0,
                338.0,
                331.0,
                307.0,
                295.0,
                281.0,
                272.0,
                232.0,
                196.0,
                185.0,
                175.0,
                174.0,
                171.0,
                162.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 20,
          "shown": 20
        },
        {
          "id": "data-analysis-business-analysis-02-top-10-cities",
          "title": "Top 10 Cities",
          "source": "data-analysis/business-analysis/csv/02_top_10_cities.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Philadelphia",
            "Tucson",
            "Tampa",
            "Indianapolis",
            "Nashville",
            "New Orleans",
            "Reno",
            "Edmonton",
            "Saint Louis",
            "Santa Barbara"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                14569.0,
                9250.0,
                9050.0,
                7540.0,
                6971.0,
                6209.0,
                5935.0,
                5054.0,
                4827.0,
                3829.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 10,
          "shown": 10
        },
        {
          "id": "data-analysis-business-analysis-03-top-5-states",
          "title": "Top 5 States",
          "source": "data-analysis/business-analysis/csv/03_top_5_states.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "PA",
            "FL",
            "TN",
            "IN",
            "MO"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                34039.0,
                26330.0,
                12056.0,
                11247.0,
                10913.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79",
                "#8b3a3a",
                "#5b6b4a"
              ]
            }
          ],
          "rowCount": 5,
          "shown": 5
        },
        {
          "id": "data-analysis-business-analysis-04-top-20-merchants-avg-rating",
          "title": "Top 20 Merchants Avg Rating",
          "source": "data-analysis/business-analysis/csv/04_top_20_merchants_avg_rating.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Starbucks",
            "McDonald's",
            "Dunkin'",
            "Subway",
            "Taco Bell",
            "CVS Pharmacy",
            "Walgreens",
            "Burger King",
            "Wendy's",
            "Wawa",
            "Domino's Pizza",
            "The UPS Store",
            "Pizza Hut",
            "Enterprise Rent-A-Car",
            "Papa John's Pizza",
            "Great Clips",
            "Jimmy John's",
            "US Post Office",
            "KFC",
            "Chick-fil-A"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                724.0,
                703.0,
                510.0,
                459.0,
                365.0,
                345.0,
                341.0,
                338.0,
                331.0,
                307.0,
                295.0,
                281.0,
                272.0,
                232.0,
                196.0,
                185.0,
                175.0,
                174.0,
                171.0,
                162.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "avg rating",
              "data": [
                3.126381215469613,
                1.8634423897581793,
                2.302941176470588,
                2.5860566448801743,
                2.154794520547945,
                2.4565217391304346,
                2.624633431085044,
                2.0281065088757395,
                2.015105740181269,
                3.3192182410423454,
                2.2813559322033896,
                3.215302491103203,
                2.0330882352941178,
                3.2780172413793105,
                2.4081632653061225,
                2.9,
                2.8685714285714288,
                2.4195402298850577,
                1.8596491228070176,
                3.3858024691358026
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 20,
          "shown": 20
        },
        {
          "id": "data-analysis-business-analysis-06-top-10-categories",
          "title": "Top 10 Categories",
          "source": "data-analysis/business-analysis/csv/06_top_10_categories.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Restaurants",
            "Food",
            "Shopping",
            "Home Services",
            "Beauty & Spas",
            "Nightlife",
            "Health & Medical",
            "Local Services",
            "Bars",
            "Automotive"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                52268.0,
                27781.0,
                24395.0,
                14356.0,
                14292.0,
                12281.0,
                11890.0,
                11198.0,
                11065.0,
                10773.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 10,
          "shown": 10
        },
        {
          "id": "data-analysis-business-analysis-07-top-20-merchants-5star-reviews",
          "title": "Top 20 Merchants 5Star Reviews",
          "source": "data-analysis/business-analysis/csv/07_top_20_merchants_5star_reviews.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Reading Terminal Market",
            "Oceana Grill",
            "Hattie B’s Hot Chicken - Nashville",
            "Acme Oyster House",
            "Commander's Palace",
            "Ruby Slipper - New Orleans",
            "Los Agaves",
            "Pappy's Smokehouse",
            "Cochon Butcher",
            "Luke",
            "Cochon",
            "Zahav",
            "Biscuit Love: Gulch",
            "Willie Mae's Scotch House",
            "Royal House",
            "Bern's Steak House",
            "GW Fins",
            "Felix's Restaurant & Oyster Bar",
            "Ulele",
            "Datz"
          ],
          "datasets": [
            {
              "label": "five star count",
              "data": [
                4014.0,
                4012.0,
                3838.0,
                3645.0,
                3095.0,
                3075.0,
                2693.0,
                2675.0,
                2537.0,
                2365.0,
                2340.0,
                2282.0,
                2272.0,
                2136.0,
                2103.0,
                1959.0,
                1853.0,
                1784.0,
                1747.0,
                1746.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 20,
          "shown": 20
        },
        {
          "id": "data-analysis-business-analysis-08-restaurant-types-count",
          "title": "Restaurant Types Count",
          "source": "data-analysis/business-analysis/csv/08_restaurant_types_count.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "American",
            "Mexican",
            "Italian",
            "Chinese",
            "Japanese",
            "Mediterranean",
            "Indian",
            "Thai",
            "Vietnamese",
            "Korean",
            "French",
            "Greek",
            "Middle Eastern",
            "Hawaiian",
            "Spanish",
            "African"
          ],
          "datasets": [
            {
              "label": "Restaurant Count",
              "data": [
                13066.0,
                4049.0,
                3997.0,
                2719.0,
                1765.0,
                920.0,
                754.0,
                687.0,
                592.0,
                291.0,
                276.0,
                242.0,
                188.0,
                120.0,
                114.0,
                84.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 16,
          "shown": 16
        },
        {
          "id": "data-analysis-business-analysis-09-review-count-by-cuisine",
          "title": "Review Count By Cuisine",
          "source": "data-analysis/business-analysis/csv/09_review_count_by_cuisine.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "American",
            "Italian",
            "Mexican",
            "Japanese",
            "Chinese",
            "Mediterranean",
            "Thai",
            "Indian",
            "Vietnamese",
            "French",
            "Korean",
            "Greek",
            "Middle Eastern",
            "Spanish",
            "Hawaiian",
            "African"
          ],
          "datasets": [
            {
              "label": "Review Count",
              "data": [
                1730875.0,
                355606.0,
                349269.0,
                203535.0,
                180324.0,
                85214.0,
                82042.0,
                70876.0,
                58903.0,
                39742.0,
                26984.0,
                16807.0,
                15364.0,
                15283.0,
                11284.0,
                3872.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 16,
          "shown": 16
        },
        {
          "id": "data-analysis-business-analysis-10-rating-distribution-by-cuisine",
          "title": "Rating Distribution By Cuisine",
          "source": "data-analysis/business-analysis/csv/10_rating_distribution_by_cuisine.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "African",
            "American",
            "Chinese",
            "French",
            "Greek",
            "Hawaiian",
            "Indian",
            "Italian",
            "Japanese",
            "Korean",
            "Mediterranean",
            "Mexican",
            "Middle Eastern",
            "Spanish",
            "Thai",
            "Vietnamese",
            "African",
            "American",
            "Chinese",
            "French"
          ],
          "datasets": [
            {
              "label": "Stars",
              "data": [
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                4.0,
                4.0,
                4.0,
                4.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Review Count",
              "data": [
                2199.0,
                729469.0,
                69947.0,
                19655.0,
                8326.0,
                6517.0,
                35763.0,
                160262.0,
                90482.0,
                13494.0,
                45477.0,
                148737.0,
                8683.0,
                7323.0,
                40491.0,
                27417.0,
                914.0,
                428691.0,
                46138.0,
                9737.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 80,
          "shown": 20
        },
        {
          "id": "data-analysis-business-analysis-11-turnaround-merchants",
          "title": "Turnaround Merchants",
          "source": "data-analysis/business-analysis/csv/11_turnaround_merchants.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Superior Heating & Cooling Management",
            "Lawn Medic",
            "Moon's Towing",
            "Takl",
            "West Hills Hospital",
            "Taco Bell",
            "Temple Physicians at Palmer Park",
            "Premium Leisure",
            "Labcorp",
            "Affordable Wholesale Appliances",
            "The Park at Palermo",
            "Retreat at Crosstown",
            "Dave's Best Limousine Service",
            "Papa John's Pizza",
            "Payless Airport Parking",
            "Helzberg Diamonds",
            "Kane's Furniture",
            "Burger King",
            "Easy Inn",
            "Wheeler's Towing Service"
          ],
          "datasets": [
            {
              "label": "Recent Avg (Last 12 Months)",
              "data": [
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Improvement",
              "data": [
                3.69,
                3.64,
                3.62,
                3.59,
                3.57,
                3.57,
                3.55,
                3.54,
                3.53,
                3.5,
                3.5,
                3.5,
                3.48,
                3.46,
                3.44,
                3.44,
                3.44,
                3.44,
                3.43,
                3.43
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "Historical Avg",
              "data": [
                1.31,
                1.36,
                1.38,
                1.41,
                1.43,
                1.43,
                1.45,
                1.46,
                1.47,
                1.5,
                1.5,
                1.5,
                1.52,
                1.54,
                1.56,
                1.56,
                1.56,
                1.56,
                1.57,
                1.57
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 1000,
          "shown": 20
        },
        {
          "id": "data-analysis-business-analysis-12-category-synergy-pairs",
          "title": "Category Synergy Pairs",
          "source": "data-analysis/business-analysis/csv/12_category_synergy_pairs.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Restaurants",
            "Nightlife",
            "Restaurants",
            "Sandwiches",
            "Restaurants",
            "Restaurants",
            "Restaurants",
            "Food",
            "Restaurants",
            "Restaurants"
          ],
          "datasets": [
            {
              "label": "Co-occurrence Count",
              "data": [
                15472.0,
                11065.0,
                8723.0,
                8366.0,
                8337.0,
                8139.0,
                7093.0,
                6703.0,
                6472.0,
                6239.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 10,
          "shown": 10
        },
        {
          "id": "data-analysis-business-analysis-13-polarizing-businesses",
          "title": "Polarizing Businesses",
          "source": "data-analysis/business-analysis/csv/13_polarizing_businesses.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Apple Repair Shop",
            "Zak Dental - Santa Barbara",
            "Napleton Hyundai of Carmel",
            "Nissan of Clearwater",
            "Champion Chevrolet",
            "Reno Buick GMC Cadillac",
            "Chapman Ford of Horsham",
            "CarZone",
            "Vanderbilt University Medical Center",
            "Lithia Hyundai of Reno",
            "Tom Dolan's Reno Kia",
            "The Green Truck Moving & Storage Company",
            "Ferman Chrysler Jeep Dodge RAM - Wesley...",
            "Mercedes-Benz Of Tampa",
            "Mercedes-Benz of Reno",
            "Reindeer Auto Relocation",
            "Piazza Honda Of Springfield",
            "Premiere Center for Cosmetic Surgery",
            "United Nissan Reno",
            "Sun Toyota"
          ],
          "datasets": [
            {
              "label": "Std Deviation",
              "data": [
                1.94,
                1.93,
                1.92,
                1.91,
                1.91,
                1.91,
                1.91,
                1.9,
                1.9,
                1.9,
                1.89,
                1.89,
                1.89,
                1.88,
                1.88,
                1.88,
                1.88,
                1.88,
                1.88,
                1.88
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Review Count",
              "data": [
                112.0,
                123.0,
                112.0,
                176.0,
                145.0,
                188.0,
                108.0,
                147.0,
                102.0,
                164.0,
                104.0,
                126.0,
                103.0,
                209.0,
                152.0,
                166.0,
                100.0,
                101.0,
                213.0,
                178.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "Average Rating",
              "data": [
                2.8,
                2.94,
                2.76,
                2.96,
                2.88,
                3.11,
                3.05,
                2.54,
                3.13,
                2.77,
                2.88,
                3.24,
                2.66,
                3.12,
                2.97,
                3.4,
                3.01,
                3.41,
                3.16,
                2.74
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 20,
          "shown": 20
        }
      ]
    },
    {
      "id": "data-analysis-checkin-analysis",
      "track": "data-analysis",
      "module": "Check-in Analysis",
      "path": "data-analysis/checkin-analysis",
      "count": 6,
      "charts": [
        {
          "id": "data-analysis-checkin-analysis-01-number-of-checkins-per-year",
          "title": "Number Of Checkins Per Year",
          "source": "data-analysis/checkin-analysis/csv/01_number_of_checkins_per_year.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022"
          ],
          "datasets": [
            {
              "label": "checkin count",
              "data": [
                2.0,
                209153.0,
                901457.0,
                1289492.0,
                1552799.0,
                1625884.0,
                1709857.0,
                1554774.0,
                1348466.0,
                1157252.0,
                1035160.0,
                474172.0,
                477467.0,
                20940.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            }
          ],
          "rowCount": 14,
          "shown": 14
        },
        {
          "id": "data-analysis-checkin-analysis-02-checkins-per-hours",
          "title": "Checkins Per Hours",
          "source": "data-analysis/checkin-analysis/csv/02_checkins_per_hours.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23"
          ],
          "datasets": [
            {
              "label": "checkin count",
              "data": [
                1155092.0,
                935985.0,
                669574.0,
                437035.0,
                264905.0,
                152476.0,
                85066.0,
                52295.0,
                35589.0,
                37079.0,
                63824.0,
                115876.0,
                201427.0,
                296364.0,
                407969.0,
                587904.0,
                873108.0,
                1018438.0,
                995358.0,
                922177.0,
                858803.0,
                910653.0,
                1073857.0,
                1206021.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            }
          ],
          "rowCount": 24,
          "shown": 24
        },
        {
          "id": "data-analysis-checkin-analysis-03-most-popular-city-for-checkins",
          "title": "Most Popular City For Checkins",
          "source": "data-analysis/checkin-analysis/csv/03_Most_Popular_City_for_Checkins.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Silver Legacy Resort",
            "Boise Airport",
            "101 Taiwanese Cuisin",
            "Hattie B’s Hot Chick",
            "Peppermill Reno",
            "Lafitte's Blacksmith",
            "Cochon",
            "Cochon Butcher",
            "Mother's Restaurant",
            "Luke",
            "The Original Pierre",
            "Gumbo Shop",
            "30th Street Station",
            "Tucson International",
            "Pat O'Brien’s",
            "Ruby Slipper - New O",
            "Grand Sierra Resort",
            "The Jug Handle Inn",
            "Reno-Tahoe Internati",
            "Acme Oyster House"
          ],
          "datasets": [
            {
              "label": "rank",
              "data": [
                30.0,
                29.0,
                28.0,
                27.0,
                26.0,
                25.0,
                24.0,
                23.0,
                22.0,
                21.0,
                20.0,
                19.0,
                18.0,
                17.0,
                16.0,
                15.0,
                14.0,
                13.0,
                12.0,
                11.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "checkin count",
              "data": [
                7515.0,
                7639.0,
                7739.0,
                7848.0,
                7887.0,
                8092.0,
                8503.0,
                8855.0,
                9034.0,
                9390.0,
                9464.0,
                9574.0,
                10063.0,
                10089.0,
                10135.0,
                10209.0,
                10478.0,
                13244.0,
                13420.0,
                15205.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 30,
          "shown": 20
        },
        {
          "id": "data-analysis-checkin-analysis-04-rank-all-businesses-by-checkin-count",
          "title": "Rank All Businesses By Checkin Count",
          "source": "data-analysis/checkin-analysis/csv/04_Rank_All_Businesses_by_Checkin_Count.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Nan Zhou Hand Drawn",
            "Di Bruno Bros.",
            "Mixto",
            "Han Dynasty",
            "Oyster House",
            "Sabrina's Café",
            "Sampan",
            "The Dandelion",
            "The Dandelion",
            "Good Dog Bar",
            "Elixr Coffee Roaster",
            "E Mei Restaurant",
            "Frankford Hall",
            "Valanni",
            "Good Dog Bar",
            "E Mei Restaurant",
            "Geno's Steaks",
            "Talula's Daily",
            "Shake Shack",
            "Spice 28"
          ],
          "datasets": [
            {
              "label": "year",
              "data": [
                2021.0,
                2021.0,
                2021.0,
                2021.0,
                2021.0,
                2020.0,
                2020.0,
                2020.0,
                2020.0,
                2020.0,
                2020.0,
                2019.0,
                2019.0,
                2019.0,
                2017.0,
                2017.0,
                2017.0,
                2013.0,
                2012.0,
                2012.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "prev checkins",
              "data": [
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                2.0,
                1.0,
                2.0,
                3.0,
                4.0,
                2.0,
                1.0,
                7.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "monthly checkins",
              "data": [
                10.0,
                6.0,
                6.0,
                6.0,
                5.0,
                11.0,
                9.0,
                8.0,
                7.0,
                5.0,
                5.0,
                15.0,
                17.0,
                7.0,
                12.0,
                18.0,
                21.0,
                33.0,
                157.0,
                77.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 30,
          "shown": 20
        },
        {
          "id": "data-analysis-checkin-analysis-05-mom-checkin-growth-rate",
          "title": "Mom Checkin Growth Rate",
          "source": "data-analysis/checkin-analysis/csv/05_MoM_Checkin_Growth_Rate.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup"
          ],
          "datasets": [
            {
              "label": "total checkins",
              "data": [
                18456.0,
                18432.0,
                18307.0,
                17899.0,
                17796.0,
                17739.0,
                17613.0,
                17164.0,
                17132.0,
                16956.0,
                16689.0,
                16657.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 12,
          "shown": 12
        },
        {
          "id": "data-analysis-checkin-analysis-06-review-seasonality-by-cuisine",
          "title": "Review Seasonality By Cuisine",
          "source": "data-analysis/checkin-analysis/csv/06_review_seasonality_by_cuisine.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup",
            "Soup"
          ],
          "datasets": [
            {
              "label": "total checkins",
              "data": [
                18456.0,
                18432.0,
                18307.0,
                17899.0,
                17796.0,
                17739.0,
                17613.0,
                17164.0,
                17132.0,
                16956.0,
                16689.0,
                16657.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 12,
          "shown": 12
        }
      ]
    },
    {
      "id": "data-analysis-comprehensive-analysis",
      "track": "data-analysis",
      "module": "Comprehensive Analysis",
      "path": "data-analysis/comprehensive-analysis",
      "count": 7,
      "charts": [
        {
          "id": "data-analysis-comprehensive-analysis-01-top5-merchants-per-city",
          "title": "Top5 Merchants Per City",
          "source": "data-analysis/comprehensive-analysis/csv/01_top5_merchants_per_city.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "2 Fat Dogs",
            "Arte Salon",
            "Tom & Sons Auto Repair",
            "The Junkluggers of Philadelphia & Montg...",
            "Emoji Sushi & Teriyaki",
            "Beall Mansion An Elegant Bed & Breakfast",
            "Shake Rattle & Roll Drive In",
            "Ambler Theater",
            "Advanced Chiropractic & Wellness Center",
            "Total Performance Automotive",
            "Ambler Beverage Exchange",
            "Ambler Dental Care",
            "Shineworthy Tea",
            "Get your Grub on",
            "Mr & Mrs Empanada",
            "HMC Contracting",
            "Bikini Beach Bar",
            "Zuzack Lawn Services",
            "Faith Latin Cuisine",
            "Pinch A Penny Pool Patio Spa"
          ],
          "datasets": [
            {
              "label": "stars",
              "data": [
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "review count",
              "data": [
                85.0,
                52.0,
                49.0,
                40.0,
                13.0,
                40.0,
                13.0,
                74.0,
                24.0,
                22.0,
                20.0,
                16.0,
                18.0,
                22.0,
                13.0,
                18.0,
                12.0,
                31.0,
                17.0,
                14.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "rank",
              "data": [
                1.0,
                2.0,
                3.0,
                4.0,
                5.0,
                1.0,
                2.0,
                1.0,
                2.0,
                3.0,
                4.0,
                5.0,
                1.0,
                2.0,
                3.0,
                4.0,
                5.0,
                1.0,
                2.0,
                3.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 1000,
          "shown": 20
        },
        {
          "id": "data-analysis-comprehensive-analysis-02-review-conversion-rate",
          "title": "Review Conversion Rate",
          "source": "data-analysis/comprehensive-analysis/csv/02_review_conversion_rate.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "New Orleans",
            "New Orleans",
            "Nashville",
            "Philadelphia",
            "New Orleans",
            "New Orleans",
            "New Orleans",
            "New Orleans",
            "New Orleans",
            "New Orleans",
            "Philadelphia",
            "Nashville",
            "Saint Louis",
            "New Orleans",
            "New Orleans",
            "New Orleans",
            "Santa Barbara",
            "Reno",
            "New Orleans",
            "Philadelphia"
          ],
          "datasets": [
            {
              "label": "total reviews",
              "data": [
                7673.0,
                7516.0,
                6160.0,
                5778.0,
                5264.0,
                5254.0,
                5146.0,
                4969.0,
                4661.0,
                4480.0,
                4293.0,
                4247.0,
                4093.0,
                4034.0,
                3971.0,
                3917.0,
                3889.0,
                3634.0,
                3633.0,
                3428.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "total checkins",
              "data": [
                15205.0,
                21542.0,
                7848.0,
                18615.0,
                10209.0,
                9034.0,
                28927.0,
                7261.0,
                9390.0,
                8503.0,
                7264.0,
                4467.0,
                6178.0,
                7146.0,
                9574.0,
                8855.0,
                6356.0,
                10478.0,
                6326.0,
                4959.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "stars",
              "data": [
                4.0,
                4.0,
                4.5,
                4.5,
                4.5,
                3.5,
                4.0,
                4.5,
                4.0,
                4.0,
                3.0,
                4.0,
                4.5,
                4.0,
                4.0,
                4.5,
                4.5,
                3.0,
                4.5,
                2.5
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 100,
          "shown": 20
        },
        {
          "id": "data-analysis-comprehensive-analysis-03-checkin-dropoff-analysis-1",
          "title": "Checkin Dropoff Analysis 1",
          "source": "data-analysis/comprehensive-analysis/csv/03_checkin_dropoff_analysis_1.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "39.02"
          ],
          "datasets": [
            {
              "label": "Total Businesses Analyzed",
              "data": [
                238.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Businesses With No Change",
              "data": [
                9.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "Businesses With Increase",
              "data": [
                98.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 1,
          "shown": 1
        },
        {
          "id": "data-analysis-comprehensive-analysis-03-checkin-dropoff-analysis-2",
          "title": "Checkin Dropoff Analysis 2",
          "source": "data-analysis/comprehensive-analysis/csv/03_checkin_dropoff_analysis_2.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "New Orleans",
            "Tampa",
            "Tampa",
            "New Orleans",
            "Reno",
            "Brandon",
            "Tampa",
            "Philadelphia",
            "Reno",
            "Santa Barbara",
            "Tampa",
            "Philadelphia",
            "Metairie",
            "Reno",
            "Saint Petersburg",
            "St. Louis",
            "Santa Barbara",
            "St. Louis",
            "New Orleans",
            "St. Louis"
          ],
          "datasets": [
            {
              "label": "Checkins Before Spike",
              "data": [
                37.0,
                34.0,
                34.0,
                32.0,
                30.0,
                26.0,
                26.0,
                26.0,
                23.0,
                22.0,
                21.0,
                18.0,
                17.0,
                16.0,
                15.0,
                15.0,
                13.0,
                13.0,
                13.0,
                12.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Checkins After Spike",
              "data": [
                72.0,
                71.0,
                66.0,
                57.0,
                62.0,
                73.0,
                68.0,
                67.0,
                54.0,
                39.0,
                55.0,
                32.0,
                60.0,
                28.0,
                48.0,
                34.0,
                28.0,
                25.0,
                24.0,
                35.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "% Change in Checkins",
              "data": [
                -94.59,
                -108.82,
                -94.12,
                -78.13,
                -106.67,
                -180.77,
                -161.54,
                -157.69,
                -134.78,
                -77.27,
                -161.9,
                -77.78,
                -252.94,
                -75.0,
                -220.0,
                -126.67,
                -115.38,
                -92.31,
                -84.62,
                -191.67
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 20,
          "shown": 20
        },
        {
          "id": "data-analysis-comprehensive-analysis-03-checkin-dropoff-analysis-3",
          "title": "Checkin Dropoff Analysis 3",
          "source": "data-analysis/comprehensive-analysis/csv/03_checkin_dropoff_analysis_3.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "2.63"
          ],
          "datasets": [
            {
              "label": "Total Businesses",
              "data": [
                131.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Max % Drop",
              "data": [
                100.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "Avg % Drop",
              "data": [
                39.02
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 1,
          "shown": 1
        },
        {
          "id": "data-analysis-comprehensive-analysis-03-checkin-dropoff-analysis-4",
          "title": "Checkin Dropoff Analysis 4",
          "source": "data-analysis/comprehensive-analysis/csv/03_checkin_dropoff_analysis_4.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "Drop in Checkins",
            "No Change",
            "Increase in Checkins"
          ],
          "datasets": [
            {
              "label": "Min % Change",
              "data": [
                2.63,
                0,
                -252.94
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Max % Change",
              "data": [
                100.0,
                0,
                -1.35
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "Business Count",
              "data": [
                131.0,
                9.0,
                98.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 3,
          "shown": 3
        },
        {
          "id": "data-analysis-comprehensive-analysis-03-checkin-dropoff-analysis-5",
          "title": "Checkin Dropoff Analysis 5",
          "source": "data-analysis/comprehensive-analysis/csv/03_checkin_dropoff_analysis_5.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Philadelphia",
            "New Orleans",
            "Kenner",
            "New Orleans",
            "New Orleans",
            "New Orleans",
            "Nashville",
            "New Orleans",
            "New Orleans",
            "Reno",
            "New Orleans",
            "New Orleans",
            "New Orleans",
            "Philadelphia",
            "Goleta",
            "New Orleans",
            "Tampa",
            "Santa Barbara",
            "Reno",
            "New Orleans"
          ],
          "datasets": [
            {
              "label": "Checkins Before Spike",
              "data": [
                518.0,
                508.0,
                252.0,
                235.0,
                149.0,
                130.0,
                127.0,
                115.0,
                108.0,
                100.0,
                97.0,
                94.0,
                91.0,
                90.0,
                81.0,
                67.0,
                63.0,
                59.0,
                59.0,
                58.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Checkins After Spike",
              "data": [
                525.0,
                413.0,
                260.0,
                263.0,
                161.0,
                174.0,
                134.0,
                82.0,
                100.0,
                123.0,
                73.0,
                88.0,
                123.0,
                104.0,
                55.0,
                59.0,
                39.0,
                40.0,
                76.0,
                62.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "% Change in Checkins",
              "data": [
                -1.35,
                18.7,
                -3.17,
                -11.91,
                -8.05,
                -33.85,
                -5.51,
                28.7,
                7.41,
                -23.0,
                24.74,
                6.38,
                -35.16,
                -15.56,
                32.1,
                11.94,
                38.1,
                32.2,
                -28.81,
                -6.9
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 238,
          "shown": 20
        }
      ]
    },
    {
      "id": "data-analysis-rating-analysis",
      "track": "data-analysis",
      "module": "Rating Analysis",
      "path": "data-analysis/rating-analysis",
      "count": 7,
      "charts": [
        {
          "id": "data-analysis-rating-analysis-01-rating-distribution",
          "title": "Rating Distribution",
          "source": "data-analysis/rating-analysis/csv/01_rating_distribution.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "46.23",
            "20.78",
            "9.9",
            "7.79",
            "15.3"
          ],
          "datasets": [
            {
              "label": "star rating",
              "data": [
                5.0,
                4.0,
                3.0,
                2.0,
                1.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "review count",
              "data": [
                3231627.0,
                1452918.0,
                691934.0,
                544240.0,
                1069561.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 5,
          "shown": 5
        },
        {
          "id": "data-analysis-rating-analysis-02-weekly-rating-frequency",
          "title": "Weekly Rating Frequency",
          "source": "data-analysis/rating-analysis/csv/02_weekly_rating_frequency.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "1-Mon",
            "2-Tue",
            "3-Wed",
            "4-Thu",
            "5-Fri",
            "6-Sat",
            "7-Sun"
          ],
          "datasets": [
            {
              "label": "review count",
              "data": [
                1030129.0,
                943417.0,
                945565.0,
                917648.0,
                942156.0,
                1065456.0,
                1145909.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            },
            {
              "label": "avg rating",
              "data": [
                3.72,
                3.753,
                3.77,
                3.778,
                3.767,
                3.751,
                3.712
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#c47a1a",
              "pointRadius": 3
            }
          ],
          "rowCount": 7,
          "shown": 7
        },
        {
          "id": "data-analysis-rating-analysis-03-top-businesses-with-most-five-stars",
          "title": "Top Businesses With Most Five Stars",
          "source": "data-analysis/rating-analysis/csv/03_top_businesses_with_most_five_stars.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Starbucks",
            "First Watch",
            "Reading Terminal Mar",
            "Oceana Grill",
            "Acme Oyster House",
            "Hattie B’s Hot Chick",
            "Los Agaves",
            "Chick-fil-A",
            "Ruby Slipper Cafe",
            "Commander's Palace",
            "Ruby Slipper - New O",
            "Pappy's Smokehouse",
            "Cochon Butcher",
            "Cochon",
            "Peg's Glorified Ham",
            "Luke",
            "Sabrina's Café",
            "Zahav",
            "Biscuit Love: Gulch",
            "Enterprise Rent-A-Ca"
          ],
          "datasets": [
            {
              "label": "five star count",
              "data": [
                5877.0,
                4550.0,
                4019.0,
                4012.0,
                3979.0,
                3958.0,
                3496.0,
                3473.0,
                3360.0,
                3095.0,
                3075.0,
                2675.0,
                2625.0,
                2434.0,
                2375.0,
                2365.0,
                2317.0,
                2282.0,
                2272.0,
                2269.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 20,
          "shown": 20
        },
        {
          "id": "data-analysis-rating-analysis-04-top-ten-cities-with-highest-ratings",
          "title": "Top Ten Cities With Highest Ratings",
          "source": "data-analysis/rating-analysis/csv/04_top_ten_cities_with_highest_ratings.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Santa Barbara",
            "Carpinteria",
            "Collingswood",
            "Tampa Bay",
            "Safety Harbor",
            "Lambertville",
            "Gulfport",
            "Webster Groves",
            "Montecito",
            "Saint Pete Beach"
          ],
          "datasets": [
            {
              "label": "merchant count",
              "data": [
                3829.0,
                298.0,
                169.0,
                141.0,
                139.0,
                124.0,
                115.0,
                111.0,
                93.0,
                57.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "avg rating",
              "data": [
                4.051,
                4.017,
                3.926,
                3.936,
                4.129,
                3.984,
                4.0,
                3.937,
                4.156,
                4.026
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 10,
          "shown": 10
        },
        {
          "id": "data-analysis-rating-analysis-05-rating-differential-by-cuisine-and-city",
          "title": "Rating Differential By Cuisine And City",
          "source": "data-analysis/rating-analysis/csv/05_rating_differential_by_cuisine_and_city.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Sahuarita",
            "Marrero",
            "Antioch",
            "Rosemont",
            "Saint Ann",
            "Nashville",
            "Saint Petersburg",
            "Meridian",
            "Springfield",
            "Valley Park",
            "Granite City",
            "Florissant",
            "Indianapolis",
            "Lutz",
            "Nashville",
            "Smyrna",
            "Harvey",
            "Metairie",
            "Brandon",
            "Saint Louis"
          ],
          "datasets": [
            {
              "label": "rating differential",
              "data": [
                2.01,
                1.933,
                1.799,
                1.79,
                1.769,
                1.745,
                1.71,
                1.707,
                1.704,
                1.698,
                1.697,
                1.692,
                1.683,
                1.679,
                1.676,
                1.675,
                1.669,
                1.668,
                1.656,
                1.642
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "merchant avg stars",
              "data": [
                5.0,
                4.17,
                4.38,
                4.69,
                5.0,
                5.0,
                4.78,
                4.83,
                4.84,
                4.93,
                4.6,
                4.71,
                5.0,
                4.9,
                4.9,
                5.0,
                4.6,
                4.71,
                4.82,
                4.92
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "city cuisine avg",
              "data": [
                2.99,
                2.236,
                2.582,
                2.901,
                3.231,
                3.255,
                3.068,
                3.126,
                3.135,
                3.235,
                2.903,
                3.022,
                3.317,
                3.217,
                3.219,
                3.325,
                2.931,
                3.044,
                3.168,
                3.275
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 30,
          "shown": 20
        },
        {
          "id": "data-analysis-rating-analysis-06a-weekend-vs-weekdays-for-nightlife",
          "title": "Weekend Vs Weekdays For Nightlife",
          "source": "data-analysis/rating-analysis/csv/06A_weekend_vs_weekdays_for_nightlife.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "Weekday",
            "Weekend"
          ],
          "datasets": [
            {
              "label": "review count",
              "data": [
                1012962.0,
                526795.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            },
            {
              "label": "avg rating",
              "data": [
                3.825,
                3.728
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#c47a1a",
              "pointRadius": 3
            }
          ],
          "rowCount": 2,
          "shown": 2
        },
        {
          "id": "data-analysis-rating-analysis-06b-weekend-vs-weekdays-daily-breakdown",
          "title": "Weekend Vs Weekdays Daily Breakdown",
          "source": "data-analysis/rating-analysis/csv/06B_weekend_vs_weekdays_daily_breakdown.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "1-Mon",
            "2-Tue",
            "3-Wed",
            "4-Thu",
            "5-Fri",
            "6-Sat",
            "7-Sun"
          ],
          "datasets": [
            {
              "label": "review count",
              "data": [
                235534.0,
                197381.0,
                195633.0,
                188810.0,
                195604.0,
                240849.0,
                285946.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            },
            {
              "label": "avg rating",
              "data": [
                3.77,
                3.837,
                3.846,
                3.851,
                3.834,
                3.764,
                3.698
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#c47a1a",
              "pointRadius": 3
            }
          ],
          "rowCount": 7,
          "shown": 7
        }
      ]
    },
    {
      "id": "data-analysis-review-analysis",
      "track": "data-analysis",
      "module": "Review Analysis",
      "path": "data-analysis/review-analysis",
      "count": 12,
      "charts": [
        {
          "id": "data-analysis-review-analysis-01-reviews-per-year",
          "title": "Reviews Per Year",
          "source": "data-analysis/review-analysis/csv/01_reviews_per_year.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022"
          ],
          "datasets": [
            {
              "label": "Review Count",
              "data": [
                854.0,
                3853.0,
                15363.0,
                48226.0,
                74387.0,
                138587.0,
                230813.0,
                286570.0,
                383950.0,
                522275.0,
                688415.0,
                758882.0,
                820048.0,
                906362.0,
                907284.0,
                554557.0,
                618189.0,
                31665.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            }
          ],
          "rowCount": 18,
          "shown": 18
        },
        {
          "id": "data-analysis-review-analysis-02-useful-funny-cool-reviews",
          "title": "Useful Funny Cool Reviews",
          "source": "data-analysis/review-analysis/csv/02_useful__funny_cool_reviews.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "3485476"
          ],
          "datasets": [
            {
              "label": "Total Useful",
              "data": [
                8280748.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Total Funny",
              "data": [
                2282743.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 1,
          "shown": 1
        },
        {
          "id": "data-analysis-review-analysis-03-total-number-of-reviews",
          "title": "Total Number Of Reviews",
          "source": "data-analysis/review-analysis/csv/03_total_number_of_reviews.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "0yYCMhDWCEIVUyZLzDWwqQ",
            "5aVByErCyBwi-cnx_iEJmg",
            "6O0MxTs3Pzzj5cXSHgYmrw",
            "bJ5FtCtZX3ZZacz2_2PJjA",
            "RdJ7Ykelg8w4y5FTmxjT8g",
            "TLcUXi2bn6v4hdB8X-M73w",
            "rjD5JDrDndu0vZvUhnnA7g",
            "kS1MQHYwIfD0462PE61IBw",
            "gpqGjIHlvUKDTttna4wcZQ",
            "6s-g2vFu12OemhiK3FJuOQ",
            "JM2PVRrNAXTtHVT5Nbo3jg",
            "4U4vN1wDwgaSUBmV7dTzqw",
            "gfQqQYI5_hCAGEHlHXIz2Q",
            "x-t7rHvsXsDvFlZgXB8lWQ",
            "T6zcfyO8eR2Py9V_bK_K4w",
            "wBKALvzEZM1ZxpkWeDjmsA",
            "1eqy55tfazEXqDvGq2LDFw",
            "gfQqQYI5_hCAGEHlHXIz2Q",
            "TDXV6AC5PYOZEyN9eeODfA",
            "nnImk681KaRqUVHlSfZjGQ"
          ],
          "datasets": [
            {
              "label": "Year",
              "data": [
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2007.0,
                2006.0,
                2006.0,
                2006.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Review Count",
              "data": [
                316.0,
                305.0,
                264.0,
                263.0,
                228.0,
                218.0,
                198.0,
                175.0,
                172.0,
                144.0,
                120.0,
                109.0,
                107.0,
                101.0,
                87.0,
                83.0,
                65.0,
                137.0,
                107.0,
                78.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 1000,
          "shown": 20
        },
        {
          "id": "data-analysis-review-analysis-04-top-20-common-words",
          "title": "Top 20 Common Words",
          "source": "data-analysis/review-analysis/csv/04_top_20_common_words.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "food",
            "good",
            "place",
            "great",
            "service",
            "nice",
            "best",
            "dont",
            "ordered",
            "staff",
            "order",
            "love",
            "didnt",
            "friendly",
            "delicious",
            "first",
            "restaurant",
            "chicken",
            "definitely",
            "experience"
          ],
          "datasets": [
            {
              "label": "Frequency",
              "data": [
                3595656.0,
                3277585.0,
                3153865.0,
                3055940.0,
                2296961.0,
                1215974.0,
                1210991.0,
                1210343.0,
                1151679.0,
                1129668.0,
                1123286.0,
                1027506.0,
                1023906.0,
                1018283.0,
                1013027.0,
                1002603.0,
                999428.0,
                960585.0,
                945309.0,
                896036.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 20,
          "shown": 20
        },
        {
          "id": "data-analysis-review-analysis-05-top-10-bigrams-positive-reviews",
          "title": "Top 10 Bigrams Positive Reviews",
          "source": "data-analysis/review-analysis/csv/05_top_10_bigrams_positive_reviews.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "food great",
            "great service",
            "food good",
            "friendly staff",
            "great place",
            "customer service",
            "good service",
            "food service",
            "delicious food",
            "highly recommend"
          ],
          "datasets": [
            {
              "label": "Frequency",
              "data": [
                5760.0,
                5357.0,
                4947.0,
                4764.0,
                4492.0,
                2595.0,
                2553.0,
                2490.0,
                2429.0,
                2023.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 10,
          "shown": 10
        },
        {
          "id": "data-analysis-review-analysis-06-top-10-bigrams-negative-reviews",
          "title": "Top 10 Bigrams Negative Reviews",
          "source": "data-analysis/review-analysis/csv/06_top_10_bigrams_negative_reviews.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "waste money",
            "terrible service",
            "poor service",
            "worst experience",
            "horrible service",
            "service terrible",
            "bad experience",
            "too bad",
            "wait staff",
            "bad service"
          ],
          "datasets": [
            {
              "label": "Frequency",
              "data": [
                1000.0,
                789.0,
                764.0,
                751.0,
                731.0,
                720.0,
                708.0,
                694.0,
                658.0,
                614.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 10,
          "shown": 10
        },
        {
          "id": "data-analysis-review-analysis-07-word-cloud-pos-tagging",
          "title": "Word Cloud Pos Tagging",
          "source": "data-analysis/review-analysis/csv/07_word_cloud_pos_tagging.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "staff",
            "nice",
            "order",
            "delicious",
            "best",
            "restaurant",
            "experience",
            "chicken",
            "menu",
            "everything",
            "area",
            "night",
            "fresh",
            "cheese",
            "minutes",
            "friendly",
            "table",
            "wait",
            "pizza",
            "times"
          ],
          "datasets": [
            {
              "label": "Frequency",
              "data": [
                22579.0,
                22530.0,
                22274.0,
                20090.0,
                19926.0,
                18559.0,
                17104.0,
                14610.0,
                14207.0,
                13483.0,
                13009.0,
                12988.0,
                12892.0,
                12643.0,
                12588.0,
                11957.0,
                11824.0,
                11381.0,
                11340.0,
                11267.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 100,
          "shown": 20
        },
        {
          "id": "data-analysis-review-analysis-08-word-association-graph",
          "title": "Word Association Graph",
          "source": "data-analysis/review-analysis/csv/08_word_association_graph.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "salad",
            "shrimp",
            "salad",
            "sandwich",
            "shrimp",
            "salad",
            "pizza",
            "fresh",
            "fresh",
            "sushi",
            "shrimp",
            "fresh",
            "seafood",
            "salad",
            "mexican",
            "fresh",
            "warm",
            "fresh",
            "sandwich",
            "warm"
          ],
          "datasets": [
            {
              "label": "Association Strength",
              "data": [
                2058.0,
                1146.0,
                1009.0,
                977.0,
                923.0,
                848.0,
                842.0,
                833.0,
                829.0,
                786.0,
                765.0,
                743.0,
                725.0,
                707.0,
                690.0,
                658.0,
                644.0,
                618.0,
                602.0,
                590.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 30,
          "shown": 20
        },
        {
          "id": "data-analysis-review-analysis-09-top-15-pain-point-bigrams",
          "title": "Top 15 Pain Point Bigrams",
          "source": "data-analysis/review-analysis/csv/09_top_15_pain_point_bigrams.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "never_again",
            "waited_minutes",
            "waste_money",
            "wait_staff",
            "poor_service",
            "terrible_service",
            "wait_minutes",
            "worst_experience",
            "horrible_service",
            "bad_experience",
            "service_slow",
            "never_return",
            "too_bad",
            "service_terrible",
            "bad_service"
          ],
          "datasets": [
            {
              "label": "Frequency",
              "data": [
                40116.0,
                29860.0,
                23655.0,
                15977.0,
                15717.0,
                15683.0,
                15475.0,
                14977.0,
                14716.0,
                14693.0,
                14507.0,
                14340.0,
                14291.0,
                13943.0,
                13818.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 15,
          "shown": 15
        },
        {
          "id": "data-analysis-review-analysis-10-review-length-vs-rating",
          "title": "Review Length Vs Rating",
          "source": "data-analysis/review-analysis/csv/10_review_length_vs_rating.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "2.0",
            "1.0",
            "3.0",
            "4.0",
            "5.0"
          ],
          "datasets": [
            {
              "label": "Avg Word Count",
              "data": [
                134.3,
                134.0,
                124.2,
                108.0,
                84.5
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79",
                "#8b3a3a",
                "#5b6b4a"
              ]
            }
          ],
          "rowCount": 5,
          "shown": 5
        },
        {
          "id": "data-analysis-review-analysis-11-mixed-signal-reviews",
          "title": "Mixed Signal Reviews",
          "source": "data-analysis/review-analysis/csv/11_mixed_signal_reviews.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "KIklbj14hNtcLdw_mJYcFQ",
            "mkjtrUtV8wgdo2Qe36v-yA",
            "I8AzDdu53ye-3HmubeqmMg",
            "_cew3OnhKe6DCqij7E6Eng",
            "ruWWCJZKTOneyaEqLKhcCA",
            "-Z719PUrHg_6zBaDY9UNJw",
            "SjrKvxcw2-GC9qqre02yEA",
            "9SBFeTwmFxCwKX0s4SBNKQ",
            "VXkBOKnA7_d-fcs49qAbpQ",
            "PUSOHlLBFnpHmUeH6pQScg",
            "kOyg5c6kFzxmGBCprLG_KQ",
            "-o4sbjrUSB1uZVFG7cFfqA",
            "1_mmQv4YSwEhMAwlr3B7VQ",
            "7Xgzk0WVgMGAbvnvNn8ijA",
            "AndOleTmOddTfxITcSamZQ",
            "jxNvoQhC0k77Mi3ZivrwKA",
            "o4pF1RlqjCgtXpm3rr_baw",
            "Yn_RTWi5XGpzDZYtfJW7ew",
            "vOcQR5X-o6vsfiezbRS1hw",
            "E5aR-Ls-McTNuLhNEuO-Yw"
          ],
          "datasets": [
            {
              "label": "Stars",
              "data": [
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "Positive Keywords Found",
              "data": [
                10.0,
                9.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                8.0,
                7.0,
                7.0,
                7.0,
                7.0,
                7.0,
                8.0,
                8.0,
                7.0,
                7.0,
                7.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 20,
          "shown": 20
        },
        {
          "id": "data-analysis-review-analysis-12-menu-items-chinese-restaurants",
          "title": "Menu Items Chinese Restaurants",
          "source": "data-analysis/review-analysis/csv/12_menu_items_chinese_restaurants.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "dumpling",
            "dumplings",
            "rice",
            "soup",
            "noodle",
            "pork",
            "noodles",
            "beef",
            "chicken",
            "dim sum",
            "bun",
            "shrimp",
            "broth",
            "fried rice",
            "duck",
            "buns",
            "lobster",
            "wonton",
            "spring roll",
            "tofu"
          ],
          "datasets": [
            {
              "label": "Mentions",
              "data": [
                3796.0,
                3490.0,
                3328.0,
                3288.0,
                2847.0,
                2588.0,
                2284.0,
                1983.0,
                1497.0,
                1197.0,
                1124.0,
                1064.0,
                1058.0,
                950.0,
                725.0,
                672.0,
                292.0,
                287.0,
                245.0,
                236.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 32,
          "shown": 20
        }
      ]
    },
    {
      "id": "data-analysis-user-analysis",
      "track": "data-analysis",
      "module": "User Analysis",
      "path": "data-analysis/user-analysis",
      "count": 10,
      "charts": [
        {
          "id": "data-analysis-user-analysis-1-number-of-users-joining",
          "title": "Number Of Users Joining",
          "source": "data-analysis/user-analysis/csv/1.Number_of_Users_Joining.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022"
          ],
          "datasets": [
            {
              "label": "total users",
              "data": [
                90.0,
                937.0,
                5423.0,
                15340.0,
                31097.0,
                64911.0,
                109054.0,
                176435.0,
                195955.0,
                209762.0,
                233465.0,
                247850.0,
                217620.0,
                151024.0,
                133568.0,
                104655.0,
                47444.0,
                40485.0,
                2782.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            }
          ],
          "rowCount": 19,
          "shown": 19
        },
        {
          "id": "data-analysis-user-analysis-10-elite-status-impact",
          "title": "Elite Status Impact",
          "source": "data-analysis/user-analysis/csv/10.Elite_Status_Impact.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "after_elite",
            "before_elite"
          ],
          "datasets": [
            {
              "label": "total reviews",
              "data": [
                1564508.0,
                161150.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "avg word count",
              "data": [
                150.53,
                122.87
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "avg useful votes",
              "data": [
                2.4,
                1.35
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 2,
          "shown": 2
        },
        {
          "id": "data-analysis-user-analysis-2-top-reviewers",
          "title": "Top Reviewers",
          "source": "data-analysis/user-analysis/csv/2.Top_Reviewers.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Hi10sGSZNxQH3NLyWSZ1oA",
            "8k3aO-mPeyhbR5HUucA5aA",
            "hWDybu_KvYLSdEFzGrniTw",
            "RtGqdDBvvBCjcu5dUqwfzA",
            "P5bUL3Engv-2z6kKohB6qQ",
            "nmdkHL2JKFx55T3nq5VziA",
            "bQCHF5rn5lMI9c5kEwCaNA",
            "8RcEwGrFIgkt9WQ35E6SnQ",
            "Xwnf20FKuikiHcSpcEbpKQ",
            "CxDOIDnH8gp9KXzpBHJYXw"
          ],
          "datasets": [
            {
              "label": "user review count",
              "data": [
                17473.0,
                16978.0,
                16567.0,
                12868.0,
                9941.0,
                8363.0,
                8354.0,
                7738.0,
                6766.0,
                6679.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 10,
          "shown": 10
        },
        {
          "id": "data-analysis-user-analysis-3-most-popular-users",
          "title": "Most Popular Users",
          "source": "data-analysis/user-analysis/csv/3.Most_Popular_Users.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "37cpUoM8hlkSQfReIEBd-Q",
            "hizGc5W1tBHPghM5YKCAtg",
            "Hi10sGSZNxQH3NLyWSZ1oA",
            "JjXuiru1_ONzDkYVrHN0aw",
            "j14WgRoU_-2ZE1aw1dXrJg",
            "VHdY6oG2JPVNjihWhOooAQ",
            "iLjMdZi0Tm7DQxX1C1_2dg",
            "lt7bNHl-TXziny4FETu8nA",
            "fgwI3rYHOv1ipfVfCSx7pg",
            "ITa3vh5ERI90G_WP4SmGUQ"
          ],
          "datasets": [
            {
              "label": "user fans",
              "data": [
                12497.0,
                3642.0,
                3493.0,
                3243.0,
                3138.0,
                2627.0,
                2547.0,
                2451.0,
                2424.0,
                2388.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 10,
          "shown": 10
        },
        {
          "id": "data-analysis-user-analysis-4-ratio-of-elite-users-to-regular-users",
          "title": "Ratio Of Elite Users To Regular Users",
          "source": "data-analysis/user-analysis/csv/4.Ratio_of_Elite_Users_to_Regular_Users.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022"
          ],
          "datasets": [
            {
              "label": "total users",
              "data": [
                90.0,
                937.0,
                5423.0,
                15340.0,
                31097.0,
                64911.0,
                109054.0,
                176435.0,
                195955.0,
                209762.0,
                233465.0,
                247850.0,
                217620.0,
                151024.0,
                133568.0,
                104655.0,
                47444.0,
                40485.0,
                2782.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            },
            {
              "label": "regular users",
              "data": [
                63.0,
                536.0,
                3680.0,
                11552.0,
                25418.0,
                57220.0,
                99126.0,
                164931.0,
                185787.0,
                200174.0,
                224263.0,
                239814.0,
                211912.0,
                147402.0,
                131317.0,
                103314.0,
                47105.0,
                40303.0,
                2782.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#c47a1a",
              "pointRadius": 3
            },
            {
              "label": "elite users",
              "data": [
                27.0,
                401.0,
                1743.0,
                3788.0,
                5679.0,
                7691.0,
                9928.0,
                11504.0,
                10168.0,
                9588.0,
                9202.0,
                8036.0,
                5708.0,
                3622.0,
                2251.0,
                1341.0,
                339.0,
                182.0,
                0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#1f4e79",
              "pointRadius": 3
            }
          ],
          "rowCount": 19,
          "shown": 19
        },
        {
          "id": "data-analysis-user-analysis-5-proportion-of-total-users-and-silent-users",
          "title": "Proportion Of Total Users And Silent Users",
          "source": "data-analysis/user-analysis/csv/5.Proportion_of_Total_Users_and_Silent_Users.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022"
          ],
          "datasets": [
            {
              "label": "total users",
              "data": [
                90.0,
                937.0,
                5423.0,
                15340.0,
                31097.0,
                64911.0,
                109054.0,
                176435.0,
                195955.0,
                209762.0,
                233465.0,
                247850.0,
                217620.0,
                151024.0,
                133568.0,
                104655.0,
                47444.0,
                40485.0,
                2782.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            },
            {
              "label": "silent users",
              "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                1.0,
                1.0,
                3.0,
                1.0,
                1.0,
                2.0,
                3.0,
                5.0,
                4.0,
                6.0,
                7.0,
                13.0,
                7.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#c47a1a",
              "pointRadius": 3
            },
            {
              "label": "silent ratio",
              "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0.01,
                0.01,
                0.03,
                0.25
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#1f4e79",
              "pointRadius": 3
            }
          ],
          "rowCount": 19,
          "shown": 19
        },
        {
          "id": "data-analysis-user-analysis-6-yearly-statistics",
          "title": "Yearly Statistics",
          "source": "data-analysis/user-analysis/csv/6.Yearly_Statistics.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022"
          ],
          "datasets": [
            {
              "label": "total reviews",
              "data": [
                14577.0,
                226005.0,
                920176.0,
                2011487.0,
                3162898.0,
                4401364.0,
                5444361.0,
                6344607.0,
                5405586.0,
                4820434.0,
                4354298.0,
                3630507.0,
                2500839.0,
                1457654.0,
                938027.0,
                559500.0,
                197284.0,
                112349.0,
                3723.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            },
            {
              "label": "new users",
              "data": [
                90.0,
                937.0,
                5423.0,
                15340.0,
                31097.0,
                64911.0,
                109054.0,
                176435.0,
                195955.0,
                209762.0,
                233465.0,
                247850.0,
                217620.0,
                151024.0,
                133568.0,
                104655.0,
                47444.0,
                40485.0,
                2782.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#c47a1a",
              "pointRadius": 3
            },
            {
              "label": "elite users",
              "data": [
                27.0,
                401.0,
                1743.0,
                3788.0,
                5679.0,
                7691.0,
                9928.0,
                11504.0,
                10168.0,
                9588.0,
                9202.0,
                8036.0,
                5708.0,
                3622.0,
                2251.0,
                1341.0,
                339.0,
                182.0,
                0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#1f4e79",
              "pointRadius": 3
            }
          ],
          "rowCount": 19,
          "shown": 19
        },
        {
          "id": "data-analysis-user-analysis-7-early-adopters",
          "title": "Early Adopters",
          "source": "data-analysis/user-analysis/csv/7.Early_Adopters.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "iPkdNziqnhNukjnmsrSzmg",
            "zAMpV0uFt9XpqRDFNLWPrQ",
            "wBKALvzEZM1ZxpkWeDjmsA",
            "0Igx-a1wAstiBDerGxXk2A",
            "0yYCMhDWCEIVUyZLzDWwqQ",
            "gfQqQYI5_hCAGEHlHXIz2Q",
            "n-lBS02-3yvlY5Q91mmwDA",
            "bnVzSHI48lEHPaEzZNIqJg",
            "VL12EhEdT4OWqGq0nIqkzw",
            "bJ5FtCtZX3ZZacz2_2PJjA",
            "TnxZgS3lrNYsPohd_OpiCg",
            "HQG3no8C5U31z-k1MaYCqQ",
            "bYENop4BuQepBjM1-BI3fA",
            "qunxFdBDVl0ordRJEPVNtQ",
            "S-P2haI61umZRkGPCWrqfA",
            "m-n_AHwndmHAgZIsu52kYA",
            "ytqI9hBiB17L2nUCYbuI5Q",
            "nnImk681KaRqUVHlSfZjGQ",
            "5aVByErCyBwi-cnx_iEJmg",
            "Xw7ZjaGfr0WNVt6s_5KZfA"
          ],
          "datasets": [
            {
              "label": "early review count",
              "data": [
                24.0,
                23.0,
                19.0,
                18.0,
                17.0,
                17.0,
                16.0,
                16.0,
                16.0,
                15.0,
                15.0,
                14.0,
                14.0,
                14.0,
                14.0,
                14.0,
                14.0,
                14.0,
                13.0,
                13.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 20,
          "shown": 20
        },
        {
          "id": "data-analysis-user-analysis-8-user-rating-evolution",
          "title": "User Rating Evolution",
          "source": "data-analysis/user-analysis/csv/8.User_Rating_Evolution.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "SXiN6Rkcv8RAn0sB308_xg",
            "RNSMuwdio8aoAalSjGLE8w",
            "x4KtqwnXwr3DQe5f4CH9tA",
            "v_S39Ceob4IFRXkCCbNtOQ",
            "UWkxtns0-z3oFWk7xbakzA",
            "RP0Cway_5DnZWpGYJmbBcw",
            "USo-V3V0Id-F-_KBomtTIw",
            "CQRZPS7hnk7hBXp-UmgsqQ",
            "wyLEvT5_icNAnf-WxjcObg",
            "RTNzZHsuyVH0dWIiT4Xu5Q",
            "UUHDT_NRWK33Jg2i-ftbXQ",
            "SmEMM6z8riqOBjtkMurt-A",
            "-H2Ja5gFeGsPrEq9o_ufiA",
            "vWIJB9ScDw2kF4NlmXbCUQ",
            "UUgfAyU-elYeRQsV52v04g",
            "Sp5ChKiXxW-Waqbs23ByBg",
            "-af1gLyiYIV7vPPzAwcFVA",
            "-8Vf9roRMLb-_vxmM347Pg",
            "wyfx1aWF3J20pytS_Pik1Q",
            "SreXALLL-xgHo92UKkXckA"
          ],
          "datasets": [
            {
              "label": "star change",
              "data": [
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0,
                -4.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "avg stars year 3",
              "data": [
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "avg stars year 1",
              "data": [
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0,
                5.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 1000,
          "shown": 20
        },
        {
          "id": "data-analysis-user-analysis-9-dining-diversity",
          "title": "Dining Diversity",
          "source": "data-analysis/user-analysis/csv/9.Dining_Diversity.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "_BcWyKQL16ndpBdggh2kNA",
            "Xw7ZjaGfr0WNVt6s_5KZfA",
            "ET8n-r7glWYqZhuR6GcdNw",
            "0Igx-a1wAstiBDerGxXk2A",
            "bYENop4BuQepBjM1-BI3fA",
            "1HM81n6n4iPIFU5d2Lokhw",
            "-G7Zkl1wIWBBmD0KRy_sCw",
            "fr1Hz2acAb3OaL3l6DyKNg",
            "wXdbkFZsfDR7utJvbWElyA",
            "Um5bfs5DH6eizgjH3xZsvg",
            "qjfMBIZpQT9DDtw_BWCopQ",
            "VL12EhEdT4OWqGq0nIqkzw",
            "pou3BbKsIozfH50rxmnMew",
            "bJ5FtCtZX3ZZacz2_2PJjA",
            "-kLVfaJytOJY2-QdQoCcNQ",
            "vHc-UrI9yfL_pnnc6nJtyQ",
            "AHRrG3T1gJpHvtpZ-K0G_g",
            "B-s-8VUnuBjGTP3d01jsyw",
            "I2XpWCHAom1JRyHXZQrnfg",
            "AaJ9d4OrFmgc4S_U2QiSZg"
          ],
          "datasets": [
            {
              "label": "total reviews",
              "data": [
                14432.0,
                8850.0,
                8802.0,
                8553.0,
                8283.0,
                7667.0,
                7455.0,
                7415.0,
                7197.0,
                7025.0,
                6817.0,
                6756.0,
                6709.0,
                6702.0,
                5993.0,
                5687.0,
                5505.0,
                5499.0,
                5082.0,
                5005.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "distinct cuisines",
              "data": [
                553.0,
                464.0,
                505.0,
                489.0,
                422.0,
                394.0,
                413.0,
                380.0,
                436.0,
                480.0,
                422.0,
                409.0,
                459.0,
                379.0,
                482.0,
                426.0,
                484.0,
                439.0,
                495.0,
                447.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 50,
          "shown": 20
        }
      ]
    },
    {
      "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution",
      "track": "data-enrichment",
      "module": "Cursed Storefronts & Attribution",
      "path": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution",
      "count": 14,
      "charts": [
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-01-business-potential-distribution",
          "title": "Business Potential Distribution",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/01_business_potential_distribution.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "Poor",
            "Good",
            "Moderate",
            "Excellent"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                27218.0,
                3266.0,
                2186.0,
                1112.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79",
                "#8b3a3a"
              ]
            }
          ],
          "rowCount": 4,
          "shown": 4
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-01-walk-score-categories-distribution",
          "title": "Walk Score Categories Distribution",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/01_walk_score_categories_distribution.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "Very Car-Dependent",
            "Car-Dependent",
            "Somewhat Walkable",
            "Very Walkable"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                27218.0,
                3630.0,
                1822.0,
                1112.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79",
                "#8b3a3a"
              ]
            }
          ],
          "rowCount": 4,
          "shown": 4
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-02-cursed-level-distribution",
          "title": "Cursed Level Distribution",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/02_Cursed_Level_Distribution.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "POTENTIALLY CURSED",
            "CURSED",
            "SEVERELY CURSED"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                1266.0,
                806.0,
                127.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79"
              ]
            }
          ],
          "rowCount": 3,
          "shown": 3
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-02-failure-rate-distribution",
          "title": "Failure Rate Distribution",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/02_Failure_Rate_Distribution.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "40-60%",
            "80-100%",
            "20-40%",
            "0-20%",
            "60-80%"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                1065.0,
                747.0,
                171.0,
                117.0,
                99.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79",
                "#8b3a3a",
                "#5b6b4a"
              ]
            }
          ],
          "rowCount": 5,
          "shown": 5
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-02-top-20-most-cursed-cities",
          "title": "Top 20 Most Cursed Cities",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/02_Top_20_Most_Cursed_Cities.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Philadelphia",
            "Nashville",
            "New Orleans",
            "Tampa",
            "Indianapolis",
            "Reno",
            "Tucson",
            "Santa Barbara",
            "Saint Louis",
            "Boise",
            "Sparks",
            "Clearwater",
            "Edmonton",
            "Franklin",
            "Wilmington",
            "Goleta",
            "Palm Harbor",
            "St. Petersburg",
            "Carmel",
            "Largo"
          ],
          "datasets": [
            {
              "label": "total closures",
              "data": [
                646.0,
                216.0,
                210.0,
                206.0,
                206.0,
                195.0,
                170.0,
                158.0,
                149.0,
                46.0,
                39.0,
                38.0,
                35.0,
                31.0,
                28.0,
                21.0,
                21.0,
                21.0,
                18.0,
                18.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "cursed count",
              "data": [
                398.0,
                146.0,
                132.0,
                134.0,
                130.0,
                117.0,
                119.0,
                97.0,
                87.0,
                36.0,
                24.0,
                26.0,
                24.0,
                23.0,
                20.0,
                16.0,
                14.0,
                14.0,
                16.0,
                13.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 20,
          "shown": 20
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-03-rating-distribution",
          "title": "Rating Distribution",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/03_Rating_Distribution.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "11654",
            "19357",
            "21049"
          ],
          "datasets": [
            {
              "label": "avg rating",
              "data": [
                5.0,
                4.5,
                4.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79"
              ]
            }
          ],
          "rowCount": 3,
          "shown": 3
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-03-top-20-cities-with-golden-locations",
          "title": "Top 20 Cities With Golden Locations",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/03_Top_20_Cities_with_Golden_Locations.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Philadelphia",
            "Tucson",
            "Tampa",
            "Indianapolis",
            "New Orleans",
            "Nashville",
            "Reno",
            "Saint Louis",
            "Edmonton",
            "Santa Barbara",
            "Boise",
            "Clearwater",
            "Saint Petersburg",
            "Sparks",
            "Metairie",
            "St. Louis",
            "St. Petersburg",
            "Franklin",
            "Wilmington",
            "Carmel"
          ],
          "datasets": [
            {
              "label": "golden count",
              "data": [
                4549.0,
                3153.0,
                3125.0,
                2541.0,
                2366.0,
                2307.0,
                2078.0,
                1637.0,
                1626.0,
                1546.0,
                1201.0,
                844.0,
                723.0,
                580.0,
                534.0,
                521.0,
                503.0,
                462.0,
                445.0,
                406.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 20,
          "shown": 20
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-04-attribute-patterns-parking-vs-noise-level",
          "title": "Attribute Patterns Parking Vs Noise Level",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/04_Attribute_Patterns_Parking_vs_Noise_Level.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Unknown",
            "Unknown",
            "Average",
            "Quiet",
            "Loud",
            "Unknown",
            "Average",
            "Quiet",
            "Loud",
            "Average"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                3908.0,
                2825.0,
                2101.0,
                581.0,
                358.0,
                83.0,
                41.0,
                34.0,
                26.0,
                1.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 10,
          "shown": 10
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-04-noise-level-in-cursed-locations",
          "title": "Noise Level In Cursed Locations",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/04_Noise_Level_in_Cursed_Locations.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "Unknown",
            "Average",
            "Quiet",
            "Loud"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                6816.0,
                2143.0,
                615.0,
                384.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79",
                "#8b3a3a"
              ]
            }
          ],
          "rowCount": 4,
          "shown": 4
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-04-parking-availability-in-cursed-locations",
          "title": "Parking Availability In Cursed Locations",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/04_Parking_Availability_in_Cursed_Locations.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "Yes",
            "Unknown",
            "No"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                5865.0,
                4009.0,
                84.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79"
              ]
            }
          ],
          "rowCount": 3,
          "shown": 3
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-05-pain-point-distribution",
          "title": "Pain Point Distribution",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/05_Pain_Point_Distribution.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "Bad Location",
            "Price Issues",
            "Parking Issues",
            "Hidden Location",
            "Noise Complaints",
            "Slow Service"
          ],
          "datasets": [
            {
              "label": "Count",
              "data": [
                22413.0,
                10646.0,
                10201.0,
                3451.0,
                1884.0,
                1259.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79",
                "#8b3a3a",
                "#5b6b4a",
                "#2a6f97"
              ]
            }
          ],
          "rowCount": 6,
          "shown": 6
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-06-post-mortem-summary-dashboard",
          "title": "Post-Mortem Summary Dashboard",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/06_Post-Mortem_Summary_Dashboard.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "Total Business Closures",
            "Total Cursed Storefronts",
            "Average Failure Rate",
            "Most Cursed City",
            "Top Pain Point",
            "Common Attribute Flaw"
          ],
          "datasets": [
            {
              "label": "Value",
              "data": [
                7354.0,
                3053.0,
                78.6,
                0,
                0,
                0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79",
                "#8b3a3a",
                "#5b6b4a",
                "#2a6f97"
              ]
            }
          ],
          "rowCount": 6,
          "shown": 6
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-06-recommendation-scorecard",
          "title": "Recommendation Scorecard",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/06_Recommendation_Scorecard.csv",
          "type": "table",
          "indexAxis": "x",
          "columns": [
            "Recommendation",
            "Priority",
            "Risk Factor",
            "Action"
          ],
          "rows": [
            [
              "Parking Audit",
              "HIGH",
              "Critical for success",
              "Conduct before lease"
            ],
            [
              "Address History Check",
              "HIGH",
              "Avoid cursed addresses",
              "Check prior closures"
            ],
            [
              "Location Visibility",
              "MEDIUM",
              "Hidden = High risk",
              "Invest in signage"
            ],
            [
              "Competition Analysis",
              "MEDIUM",
              "High density = More closures",
              "Research area"
            ]
          ],
          "rowCount": 4,
          "shown": 4
        },
        {
          "id": "data-enrichment-cursed-storefronts-multi-dimentional-attribution-06-severity-of-distribution",
          "title": "Severity Of Distribution",
          "source": "data-enrichment/Cursed_Storefronts_&_Multi-Dimentional_Attribution/csv/06_severity_of_distribution.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "Highly Cursed",
            "Moderately Cursed",
            "Mildly Cursed"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                1477.0,
                1291.0,
                285.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79"
              ]
            }
          ],
          "rowCount": 3,
          "shown": 3
        }
      ]
    },
    {
      "id": "data-enrichment-open-world-data-safari",
      "track": "data-enrichment",
      "module": "Crime Enrichment",
      "path": "data-enrichment/open-world-data-safari",
      "count": 9,
      "charts": [
        {
          "id": "data-enrichment-open-world-data-safari-01-crime-severity-distribution",
          "title": "Crime Severity Distribution",
          "source": "data-enrichment/open-world-data-safari/csv/01_crime_severity_distribution.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "LOW",
            "MEDIUM",
            "HIGH"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                366140.0,
                283846.0,
                86047.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79"
              ]
            }
          ],
          "rowCount": 3,
          "shown": 3
        },
        {
          "id": "data-enrichment-open-world-data-safari-02-crime-zone-per-district",
          "title": "Crime Zone Per District",
          "source": "data-enrichment/open-world-data-safari/csv/02_crime_zone_per_district.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "HIGH",
            "HIGH",
            "HIGH",
            "HIGH",
            "HIGH",
            "HIGH",
            "HIGH",
            "HIGH",
            "MEDIUM",
            "MEDIUM",
            "MEDIUM",
            "MEDIUM",
            "MEDIUM",
            "MEDIUM",
            "MEDIUM",
            "LOW",
            "LOW",
            "LOW",
            "LOW",
            "LOW"
          ],
          "datasets": [
            {
              "label": "total crimes",
              "data": [
                54050.0,
                52924.0,
                51671.0,
                48433.0,
                46575.0,
                43471.0,
                41746.0,
                41540.0,
                41255.0,
                38716.0,
                35424.0,
                33983.0,
                33846.0,
                32657.0,
                29305.0,
                27599.0,
                22576.0,
                19622.0,
                13891.0,
                12690.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "high severity count",
              "data": [
                7441.0,
                6643.0,
                7396.0,
                5640.0,
                6523.0,
                8197.0,
                4574.0,
                5657.0,
                5813.0,
                4823.0,
                2774.0,
                3448.0,
                2172.0,
                2613.0,
                3022.0,
                3186.0,
                1564.0,
                1836.0,
                732.0,
                1372.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "dc dist",
              "data": [
                24.0,
                15.0,
                22.0,
                19.0,
                35.0,
                25.0,
                14.0,
                12.0,
                39.0,
                18.0,
                6.0,
                2.0,
                9.0,
                3.0,
                26.0,
                16.0,
                8.0,
                17.0,
                7.0,
                1.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 22,
          "shown": 20
        },
        {
          "id": "data-enrichment-open-world-data-safari-03-restaurants-per-crime-zone",
          "title": "Restaurants Per Crime Zone",
          "source": "data-enrichment/open-world-data-safari/csv/03_restaurants_per_crime_zone.csv",
          "type": "doughnut",
          "indexAxis": "x",
          "labels": [
            "UNKNOWN",
            "MEDIUM",
            "HIGH",
            "LOW"
          ],
          "datasets": [
            {
              "label": "count",
              "data": [
                3567.0,
                1125.0,
                678.0,
                634.0
              ],
              "borderColor": "#ffffff",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": [
                "#0f6b5c",
                "#c47a1a",
                "#1f4e79",
                "#8b3a3a"
              ]
            }
          ],
          "rowCount": 4,
          "shown": 4
        },
        {
          "id": "data-enrichment-open-world-data-safari-04-restaurant-survival-rate-by-crime-zone",
          "title": "Restaurant Survival Rate By Crime Zone",
          "source": "data-enrichment/open-world-data-safari/csv/04_restaurant_survival_rate_by_crime _zone.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "MEDIUM",
            "HIGH",
            "LOW"
          ],
          "datasets": [
            {
              "label": "total restaurants",
              "data": [
                1125.0,
                678.0,
                634.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "survival rate pct",
              "data": [
                60.98,
                68.44,
                67.35
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "open restaurants",
              "data": [
                686.0,
                464.0,
                427.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 3,
          "shown": 3
        },
        {
          "id": "data-enrichment-open-world-data-safari-05-average-ratings-by-crime-zone",
          "title": "Average Ratings By Crime Zone",
          "source": "data-enrichment/open-world-data-safari/csv/05_average_ratings_by_crime_zone.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "MEDIUM",
            "HIGH",
            "LOW"
          ],
          "datasets": [
            {
              "label": "total reviews",
              "data": [
                128364.0,
                64041.0,
                54591.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "restaurant count",
              "data": [
                1125.0,
                678.0,
                634.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "avg stars",
              "data": [
                3.572,
                3.636,
                3.497
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 3,
          "shown": 3
        },
        {
          "id": "data-enrichment-open-world-data-safari-06-cuisine-distribution-by-crime-zone",
          "title": "Cuisine Distribution By Crime Zone",
          "source": "data-enrichment/open-world-data-safari/csv/06_cuisine_distribution_by_crime_zone.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "American",
            "Pizza",
            "American",
            "American",
            "Italian",
            "Pizza",
            "Pizza",
            "Chinese",
            "Fast Food",
            "Burgers",
            "Mexican",
            "Seafood",
            "Italian",
            "Seafood",
            "Japanese",
            "Fast Food",
            "Burgers",
            "Chinese",
            "Burgers",
            "Seafood"
          ],
          "datasets": [
            {
              "label": "restaurant count",
              "data": [
                243.0,
                164.0,
                163.0,
                156.0,
                117.0,
                112.0,
                89.0,
                79.0,
                73.0,
                72.0,
                65.0,
                55.0,
                52.0,
                48.0,
                47.0,
                47.0,
                46.0,
                43.0,
                41.0,
                41.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "avg stars",
              "data": [
                3.582,
                3.335,
                3.509,
                3.651,
                3.714,
                3.268,
                3.062,
                3.405,
                2.808,
                2.958,
                3.577,
                3.564,
                3.413,
                3.552,
                3.564,
                2.309,
                3.098,
                3.442,
                2.939,
                3.695
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 48,
          "shown": 20
        },
        {
          "id": "data-enrichment-open-world-data-safari-07-yearly-rating-trend-by-crime-zone",
          "title": "Yearly Rating Trend By Crime Zone",
          "source": "data-enrichment/open-world-data-safari/csv/07_yearly_rating_trend_by_crime_zone.csv",
          "type": "line",
          "indexAxis": "x",
          "labels": [
            "HIGH",
            "HIGH",
            "HIGH",
            "HIGH",
            "HIGH",
            "LOW",
            "LOW",
            "LOW",
            "LOW",
            "LOW",
            "MEDIUM",
            "MEDIUM",
            "MEDIUM",
            "MEDIUM",
            "MEDIUM"
          ],
          "datasets": [
            {
              "label": "year",
              "data": [
                2018.0,
                2019.0,
                2020.0,
                2021.0,
                2022.0,
                2018.0,
                2019.0,
                2020.0,
                2021.0,
                2022.0,
                2018.0,
                2019.0,
                2020.0,
                2021.0,
                2022.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#0f6b5c",
              "pointRadius": 3
            },
            {
              "label": "review count",
              "data": [
                7425.0,
                7831.0,
                4145.0,
                4112.0,
                197.0,
                6560.0,
                6501.0,
                3285.0,
                2977.0,
                156.0,
                14664.0,
                13738.0,
                6940.0,
                7496.0,
                375.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#c47a1a",
              "pointRadius": 3
            },
            {
              "label": "avg stars",
              "data": [
                3.92,
                3.902,
                3.915,
                3.893,
                3.949,
                3.765,
                3.757,
                3.856,
                3.78,
                4.013,
                3.917,
                3.93,
                3.956,
                3.933,
                3.955
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 2,
              "fill": false,
              "tension": 0.25,
              "backgroundColor": "#1f4e79",
              "pointRadius": 3
            }
          ],
          "rowCount": 15,
          "shown": 15
        },
        {
          "id": "data-enrichment-open-world-data-safari-08-checkin-volume-by-crime-zone",
          "title": "Checkin Volume By Crime Zone",
          "source": "data-enrichment/open-world-data-safari/csv/08_checkin _volume_by_crime_zone.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "MEDIUM",
            "HIGH",
            "LOW"
          ],
          "datasets": [
            {
              "label": "total checkins",
              "data": [
                1092.0,
                658.0,
                620.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "business count",
              "data": [
                1092.0,
                658.0,
                620.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "avg checkins per biz",
              "data": [
                1.0,
                1.0,
                1.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 3,
          "shown": 3
        },
        {
          "id": "data-enrichment-open-world-data-safari-09-crime-dining-correlation",
          "title": "Crime-Dining Correlation",
          "source": "data-enrichment/open-world-data-safari/csv/09_crime-dining_correlation.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "MEDIUM",
            "HIGH",
            "LOW"
          ],
          "datasets": [
            {
              "label": "total restaurants",
              "data": [
                1125.0,
                678.0,
                634.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "survival rate pct",
              "data": [
                60.98,
                68.44,
                67.35
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "avg stars",
              "data": [
                3.572,
                3.636,
                3.497
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 3,
          "shown": 3
        }
      ]
    },
    {
      "id": "data-enrichment-review-manipulation",
      "track": "data-enrichment",
      "module": "Review Manipulation",
      "path": "data-enrichment/review_manipulation",
      "count": 7,
      "charts": [
        {
          "id": "data-enrichment-review-manipulation-1-suspicious-five-star-spike-detection",
          "title": "Suspicious Five Star Spike Detection",
          "source": "data-enrichment/review_manipulation/csv/1_Suspicious_Five_Star_Spike_Detection.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Mother's Restaurant",
            "Broadway Oyster Bar",
            "The Franklin Fountain",
            "Morimoto",
            "Café Du Monde",
            "Mesa Verde",
            "Nada",
            "El Charro Cafe",
            "Sandbar",
            "Lure Fish House",
            "Bartaco",
            "City Museum",
            "Tavern",
            "Nine Ting",
            "Cajun Encounters Tour Company",
            "Conch Republic Grill",
            "Craft Street Kitchen - Oldsmar",
            "Tupelo Honey",
            "Bleu Sushi",
            "Cantina Dos Segundos"
          ],
          "datasets": [
            {
              "label": "total reviews",
              "data": [
                5185.0,
                2076.0,
                2062.0,
                1914.0,
                1880.0,
                1796.0,
                1619.0,
                1583.0,
                1546.0,
                1453.0,
                1368.0,
                1366.0,
                1222.0,
                1213.0,
                1210.0,
                1175.0,
                1013.0,
                999.0,
                938.0,
                904.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "spike weeks",
              "data": [
                1.0,
                1.0,
                1.0,
                1.0,
                9.0,
                5.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                2.0,
                1.0,
                2.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "normal weekly avg",
              "data": [
                2.55,
                2.74,
                1.95,
                1.98,
                2.85,
                4.73,
                3.83,
                1.72,
                2.03,
                3.4,
                2.56,
                1.99,
                1.67,
                2.74,
                2.32,
                1.84,
                2.79,
                2.36,
                2.27,
                1.3
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 260,
          "shown": 20
        },
        {
          "id": "data-enrichment-review-manipulation-2a-ghost-account-behavior-analysis",
          "title": "Ghost Account Behavior Analysis",
          "source": "data-enrichment/review_manipulation/csv/2a_Ghost_Account_Behavior_Analysis.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "1.15"
          ],
          "datasets": [
            {
              "label": "total suspicious reviews",
              "data": [
                60237.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "pct no fans accounts",
              "data": [
                56.03
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "pct new accounts under6mo",
              "data": [
                14.7
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 1,
          "shown": 1
        },
        {
          "id": "data-enrichment-review-manipulation-2b-fraudulent-review-text-analysis",
          "title": "Fraudulent Review Text Analysis",
          "source": "data-enrichment/review_manipulation/csv/2b_Fraudulent_Review_Text_Analysis.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "definitely",
            "recommend",
            "highly",
            "server",
            "came",
            "ordered",
            "attentive",
            "while",
            "took",
            "enjoyed",
            "didn",
            "especially",
            "knowledgeable",
            "disappointed",
            "gave",
            "husband",
            "each",
            "thanks",
            "overall",
            "anyone"
          ],
          "datasets": [
            {
              "label": "freq",
              "data": [
                2083.0,
                1883.0,
                1036.0,
                1022.0,
                859.0,
                729.0,
                549.0,
                509.0,
                470.0,
                412.0,
                368.0,
                335.0,
                314.0,
                308.0,
                305.0,
                302.0,
                300.0,
                299.0,
                295.0,
                289.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 40,
          "shown": 20
        },
        {
          "id": "data-enrichment-review-manipulation-3a-reviewer-teleportation-detection",
          "title": "Reviewer Teleportation Detection",
          "source": "data-enrichment/review_manipulation/csv/3a_Reviewer_Teleportation_Detection.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Um5bfs5DH6eizgjH3xZsvg",
            "_BcWyKQL16ndpBdggh2kNA",
            "bYENop4BuQepBjM1-BI3fA",
            "PnwOegp7RXfMeNAyO9fQhQ",
            "VL12EhEdT4OWqGq0nIqkzw",
            "ppsm8EDKjA1fp1yTCP3RrQ",
            "sh3V6hnNMLVV9YwFA9QNaw",
            "1HM81n6n4iPIFU5d2Lokhw",
            "-dgC1iRp_JqBTmn5d1wRhg",
            "qjfMBIZpQT9DDtw_BWCopQ",
            "AQxmbuDiToMv2WYtq4Mfdw",
            "REFGsoLynoBWxdTEJeXYfw",
            "2iS1vg5TYpV_iEiNC8osTg",
            "GcdYgbaF75vj7RO6EZhPOQ",
            "r9S0VYrdXJrdhfR7OXj8tA",
            "vYMvOTL31e0KbTo9Hd0tjg",
            "XzpJ4uHkxARCFQiZ9bffyg",
            "B-s-8VUnuBjGTP3d01jsyw",
            "0Igx-a1wAstiBDerGxXk2A",
            "cIVmIJD7nIiEcVGamfBoVw"
          ],
          "datasets": [
            {
              "label": "teleportation count",
              "data": [
                686.0,
                428.0,
                407.0,
                388.0,
                351.0,
                345.0,
                326.0,
                294.0,
                291.0,
                283.0,
                265.0,
                253.0,
                237.0,
                235.0,
                226.0,
                215.0,
                210.0,
                208.0,
                206.0,
                201.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "min hours between",
              "data": [
                0.006,
                0.005,
                0.032,
                0.008,
                0.013,
                0.008,
                0.006,
                0.005,
                0.036,
                0.013,
                0.016,
                0.011,
                0.004,
                0.033,
                0.01,
                0.004,
                0.017,
                0.039,
                0.015,
                0.003
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            }
          ],
          "rowCount": 30,
          "shown": 20
        },
        {
          "id": "data-enrichment-review-manipulation-3b-review-syndicate-network-detection",
          "title": "Review Syndicate Network Detection",
          "source": "data-enrichment/review_manipulation/csv/3b_Review_Syndicate_Network_Detection.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "gOmL86XU9QQ26F4TkPaFyw",
            "WPvir9su9Jvf5nnKpWfC8g",
            "gOmL86XU9QQ26F4TkPaFyw",
            "iHXi8xUGDlF7j4VdMe_PZg",
            "cNnfIpt5CeO-87lMk_e4RQ",
            "PuHt70ZBMuT69lotWFxJzg",
            "Tdsrg5IfAR4OhxQCO9qFfQ",
            "gOmL86XU9QQ26F4TkPaFyw",
            "gOmL86XU9QQ26F4TkPaFyw",
            "qu7rVt2iPsQ_Ccf09CEeYg",
            "cNnfIpt5CeO-87lMk_e4RQ",
            "cNnfIpt5CeO-87lMk_e4RQ",
            "Tdsrg5IfAR4OhxQCO9qFfQ",
            "Uaxor1pdX2OoyA8w91rj4w",
            "Fk-x-tFaBlYCa6V25__sTQ",
            "LYNF5oLS3Ns4_TyOXYBzOQ",
            "DHMGb05cNF6a4VvzGnIXnA",
            "1bestYCnx4i--RGoTEHytg",
            "aV5UprEcaioNiMT1Iu1I8w",
            "oXJdDkodq1Q8BFerSd9ZJw"
          ],
          "datasets": [
            {
              "label": "shared biz count",
              "data": [
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                2.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 30,
          "shown": 20
        },
        {
          "id": "data-enrichment-review-manipulation-4a-rating-manipulation-impact-analysis",
          "title": "Rating Manipulation Impact Analysis",
          "source": "data-enrichment/review_manipulation/csv/4a_Rating_Manipulation_Impact_Analysis.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "The Holy Ground",
            "Scoopers Drive-In",
            "Bluewater Grill - Santa Barbara",
            "Independence Prime",
            "Wingstop",
            "Fit Buddha",
            "La Botana Tacos",
            "Sammy's Mexican Grill",
            "City Fitness - Graduate Hospital",
            "Whiskey Cake",
            "Acropolis Greek Taverna",
            "Saudia Shuler's Country Cookin'",
            "Pi Pizzeria - Delmar Loop",
            "The Human Bean",
            "Hippot Shabu Shabu",
            "Felipe's Mexican Taqueria - French Quarter",
            "Crazy Sushi",
            "Blaze Pizza",
            "Baja Sharkeez",
            "Oasis Nails"
          ],
          "datasets": [
            {
              "label": "still open",
              "data": [
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0,
                1.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "review count during",
              "data": [
                23.0,
                17.0,
                31.0,
                17.0,
                29.0,
                15.0,
                23.0,
                32.0,
                33.0,
                25.0,
                18.0,
                27.0,
                22.0,
                22.0,
                51.0,
                26.0,
                30.0,
                22.0,
                28.0,
                20.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "review count before",
              "data": [
                3.0,
                3.0,
                65.0,
                17.0,
                9.0,
                1.0,
                11.0,
                1.0,
                14.0,
                42.0,
                15.0,
                2.0,
                9.0,
                7.0,
                51.0,
                16.0,
                10.0,
                10.0,
                16.0,
                1.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 214,
          "shown": 20
        },
        {
          "id": "data-enrichment-review-manipulation-4b-closure-and-manipulation-intensity-analysis",
          "title": "Closure And Manipulation Intensity Analysis",
          "source": "data-enrichment/review_manipulation/csv/4b_Closure_And_Manipulation_Intensity_Analysis.csv",
          "type": "bar",
          "indexAxis": "x",
          "labels": [
            "Heavy   (drop >= 1.0 stars)",
            "Light   (drop < 0.5 stars)",
            "Moderate(drop >= 0.5 stars)",
            "Severe  (drop >= 1.5 stars)"
          ],
          "datasets": [
            {
              "label": "closure rate pct",
              "data": [
                16.7,
                6.7,
                5.6,
                0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "business count",
              "data": [
                18.0,
                150.0,
                36.0,
                10.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "avg pre spike rating",
              "data": [
                4.14,
                4.46,
                4.26,
                4.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 4,
          "shown": 4
        }
      ]
    },
    {
      "id": "data-enrichment-weather-mood-analysis",
      "track": "data-enrichment",
      "module": "Weather-Mood Analysis",
      "path": "data-enrichment/weather-mood-analysis",
      "count": 6,
      "charts": [
        {
          "id": "data-enrichment-weather-mood-analysis-01-avg-rating-by-weather-condition",
          "title": "Avg Rating By Weather Condition",
          "source": "data-enrichment/weather-mood-analysis/csv/01_avg_rating_by_weather_condition.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Normal",
            "Extreme Heat",
            "Rain",
            "Heavy Rain",
            "Extreme Cold",
            "Heavy Snow",
            "Snow",
            "Strong Wind"
          ],
          "datasets": [
            {
              "label": "total reviews",
              "data": [
                1675965.0,
                124229.0,
                122885.0,
                74675.0,
                19654.0,
                18878.0,
                2299.0,
                1635.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "one star pct",
              "data": [
                12.51,
                14.03,
                12.23,
                11.99,
                11.74,
                12.76,
                12.44,
                13.21
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "one star count",
              "data": [
                209666.0,
                17428.0,
                15027.0,
                8954.0,
                2307.0,
                2409.0,
                286.0,
                216.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 8,
          "shown": 8
        },
        {
          "id": "data-enrichment-weather-mood-analysis-02-checkin-volume-by-weather-condition",
          "title": "Checkin Volume By Weather Condition",
          "source": "data-enrichment/weather-mood-analysis/csv/02_checkin_volume_by_weather_condition.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Normal",
            "Rain",
            "Extreme Heat",
            "Heavy Rain",
            "Extreme Cold",
            "Heavy Snow",
            "Snow",
            "Strong Wind"
          ],
          "datasets": [
            {
              "label": "unique restaurants",
              "data": [
                21913.0,
                14578.0,
                11867.0,
                11780.0,
                5841.0,
                5248.0,
                1580.0,
                1178.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "total checkins",
              "data": [
                2111929.0,
                146875.0,
                139867.0,
                88286.0,
                24545.0,
                21975.0,
                2591.0,
                1890.0
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "avg checkins per day",
              "data": [
                1144.7,
                212.2,
                199.2,
                212.2,
                148.8,
                103.7,
                70.0,
                145.4
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 8,
          "shown": 8
        },
        {
          "id": "data-enrichment-weather-mood-analysis-03-food-categories-by-extreme-weather",
          "title": "Food Categories By Extreme Weather",
          "source": "data-enrichment/weather-mood-analysis/csv/03_food_categories_by_extreme_weather.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Coffee",
            "Coffee",
            "Burgers",
            "Burgers",
            "Coffee",
            "Sandwiches",
            "Pizza",
            "Pizza",
            "Sandwiches",
            "Burgers",
            "Sandwiches",
            "Pizza",
            "Chinese",
            "Chinese",
            "Fast Food",
            "Soup",
            "Fast Food",
            "Ice Cream",
            "Soup",
            "Ice Cream"
          ],
          "datasets": [
            {
              "label": "checkin count",
              "data": [
                20290.0,
                19027.0,
                13300.0,
                12367.0,
                12135.0,
                11684.0,
                11436.0,
                10472.0,
                9835.0,
                7468.0,
                7152.0,
                5884.0,
                5325.0,
                4899.0,
                4751.0,
                4026.0,
                3808.0,
                3565.0,
                3505.0,
                3382.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            }
          ],
          "rowCount": 45,
          "shown": 20
        },
        {
          "id": "data-enrichment-weather-mood-analysis-04-avg-rating-by-weather-per-city",
          "title": "Avg Rating By Weather Per City",
          "source": "data-enrichment/weather-mood-analysis/csv/04_avg_rating_by_weather_per_city.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Tampa",
            "Philadelphia",
            "New Orleans",
            "Nashville",
            "Reno",
            "Indianapolis",
            "Tucson",
            "Santa Barbara",
            "St. Louis",
            "Tucson",
            "Boise",
            "Tampa",
            "Tampa",
            "Reno",
            "Philadelphia",
            "Tampa",
            "Nashville",
            "New Orleans",
            "New Orleans",
            "New Orleans"
          ],
          "datasets": [
            {
              "label": "total reviews",
              "data": [
                790224.0,
                343339.0,
                293382.0,
                236138.0,
                204657.0,
                169612.0,
                147020.0,
                130559.0,
                123995.0,
                75139.0,
                70764.0,
                59390.0,
                39340.0,
                37268.0,
                32225.0,
                27306.0,
                25420.0,
                24989.0,
                23353.0,
                22474.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "one star pct",
              "data": [
                18.08,
                14.82,
                11.98,
                15.74,
                19.59,
                14.9,
                19.65,
                12.6,
                15.87,
                20.4,
                18.16,
                17.97,
                17.52,
                20.25,
                15.24,
                19.45,
                15.65,
                11.57,
                12.14,
                12.2
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "one star count",
              "data": [
                142838.0,
                50881.0,
                35145.0,
                37176.0,
                40101.0,
                25272.0,
                28888.0,
                16451.0,
                19674.0,
                15329.0,
                12850.0,
                10674.0,
                6892.0,
                7547.0,
                4910.0,
                5312.0,
                3978.0,
                2892.0,
                2836.0,
                2742.0
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 60,
          "shown": 20
        },
        {
          "id": "data-enrichment-weather-mood-analysis-04b-overall-weather-impact-summary",
          "title": "Overall Weather Impact Summary",
          "source": "data-enrichment/weather-mood-analysis/csv/04b_overall_weather_impact_summary.csv",
          "type": "bar",
          "indexAxis": "y",
          "labels": [
            "Normal",
            "Extreme Heat",
            "Rain",
            "Heavy Rain",
            "Heavy Snow",
            "Extreme Cold",
            "Snow",
            "Strong Wind"
          ],
          "datasets": [
            {
              "label": "total reviews",
              "data": [
                2509690.0,
                200677.0,
                178125.0,
                107320.0,
                28530.0,
                28102.0,
                3519.0,
                2470.0
              ],
              "borderColor": "#0f6b5c",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#0f6b5c"
            },
            {
              "label": "one star pct",
              "data": [
                16.31,
                18.58,
                15.79,
                15.41,
                16.02,
                14.56,
                16.4,
                16.36
              ],
              "borderColor": "#c47a1a",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#c47a1a"
            },
            {
              "label": "five star pct",
              "data": [
                52.69,
                52.31,
                52.54,
                52.61,
                52.01,
                50.64,
                51.46,
                50.32
              ],
              "borderColor": "#1f4e79",
              "borderWidth": 1,
              "fill": true,
              "tension": 0,
              "backgroundColor": "#1f4e79"
            }
          ],
          "rowCount": 8,
          "shown": 8
        },
        {
          "id": "data-enrichment-weather-mood-analysis-04c-actionable-business-recommendations",
          "title": "Actionable Business Recommendations",
          "source": "data-enrichment/weather-mood-analysis/csv/04c_actionable_business_recommendations.csv",
          "type": "table",
          "indexAxis": "x",
          "columns": [
            "Weather Condition",
            "Staffing Recommendation",
            "Inventory/Menu Recommendation",
            "Review Risk"
          ],
          "rows": [
            [
              "Heavy Rain",
              "Increase delivery staff",
              "Promote soups, hot food, comfort meals",
              "High — bad weather frustrates customers"
            ],
            [
              "Extreme Heat",
              "Add outdoor cooling, extra AC staff",
              "Promote cold drinks, ice cream, salads",
              "Medium — heat reduces walk-ins"
            ],
            [
              "Extreme Cold",
              "Reduce outdoor seating staff",
              "Promote hot beverages, soups, stews",
              "High — cold drives indoor dining"
            ],
            [
              "Heavy Snow",
              "Reduce floor staff, increase delivery",
              "Focus on delivery-friendly menu items",
              "Very High — snow drastically cuts foot traffic"
            ],
            [
              "Snow",
              "Moderate staffing reduction",
              "Promote warm comfort food",
              "Medium — light snow still affects walk-ins"
            ],
            [
              "Strong Wind",
              "Close outdoor seating entirely",
              "No special promotions needed",
              "Low — mainly affects outdoor seating"
            ],
            [
              "Normal",
              "Standard staffing levels",
              "Standard menu",
              "None — baseline conditions"
            ]
          ],
          "rowCount": 7,
          "shown": 7
        }
      ]
    }
  ],
  "errors": []
};
