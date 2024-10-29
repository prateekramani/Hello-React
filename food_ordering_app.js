import React from "react"
import  ReactDOM  from "react-dom/client"



console.log(" Food ordering App L4")


const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-hUep2T94JTJ2unGjWmzuJnDzfml3_KMsg&s"></img>
            </div>
            <div className="nav-items">
                <ul>
                <li>About</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor : "#f0f0f0"
}

const RestrauntCard = (props)=>{
    // console.log(props)
    const {resData} = props;
    const {name , cuisines, avgRating, costForTwo, cloudinaryImageId , sla} = resData?.info
    const {deliveryTime} = sla
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>Delivery Time - {deliveryTime}</h4>
        </div>
    )
}


const resObj = {
    "restaurants": [
      {
        "info": {
          "id": "234875",
          "name": "Adil Hotel",
          "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
          "locality": "Rautha Wada",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Tandoor"
          ],
          "avgRating": 4.3,
          "parentId": "27123",
          "avgRatingString": "4.3",
          "totalRatingsString": "1.0K+",
          "sla": {
            "deliveryTime": 44,
            "lastMileTravel": 10.7,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "10.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-26 23:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-058e7a8e-bc48-4657-b817-eaacc4f13c2f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "151518",
          "name": "Bakery World",
          "cloudinaryImageId": "mt2aggiscfl3yviatwng",
          "locality": "Parasia Road",
          "areaName": "Parasia Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Bakery",
            "Ice Cream",
            "Snacks",
            "Beverages"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "40363",
          "avgRatingString": "4.2",
          "totalRatingsString": "238",
          "sla": {
            "deliveryTime": 48,
            "lastMileTravel": 12.6,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "12.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-26 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {},
              "textExtendedBadges": {}
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-058e7a8e-bc48-4657-b817-eaacc4f13c2f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "658210",
          "name": "The Fusion Lounge",
          "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
          "locality": "Triloki nagar",
          "areaName": "Railway Station",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "395453",
          "avgRatingString": "4.1",
          "totalRatingsString": "271",
          "sla": {
            "deliveryTime": 60,
            "lastMileTravel": 10.2,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "10.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-26 23:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {},
              "textBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-058e7a8e-bc48-4657-b817-eaacc4f13c2f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "150591",
          "name": "Satkar Restaurant",
          "cloudinaryImageId": "rvxp5xbniat84r6efku2",
          "locality": "Sinchai Colony",
          "areaName": "Satkar Chowk",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Indian",
            "Salads",
            "Desserts"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "21553",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.2K+",
          "sla": {
            "deliveryTime": 48,
            "lastMileTravel": 11.1,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "11.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-26 22:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-058e7a8e-bc48-4657-b817-eaacc4f13c2f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "531441",
          "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
          "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
          "locality": "Satkar Square",
          "areaName": "Mohan Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Ice Cream Cakes",
            "Desserts",
            "Ice Cream",
            "Bakery"
          ],
          "avgRating": 5,
          "veg": true,
          "parentId": "21932",
          "avgRatingString": "5.0",
          "totalRatingsString": "3",
          "sla": {
            "deliveryTime": 49,
            "lastMileTravel": 11.2,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "11.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-26 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-058e7a8e-bc48-4657-b817-eaacc4f13c2f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/gourmet-ice-cream-cakes-by-baskin-robbins-satkar-square-mohan-nagar-rest531441",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "496348",
          "name": "Pizza Box",
          "cloudinaryImageId": "n7wbtvlifwbw5y4a7rrv",
          "locality": "Sanchar Colony",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Burgers",
            "Beverages"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "3045",
          "avgRatingString": "4.4",
          "totalRatingsString": "206",
          "sla": {
            "deliveryTime": 68,
            "lastMileTravel": 14.5,
            "serviceability": "SERVICEABLE",
            "slaString": "65-70 mins",
            "lastMileTravelString": "14.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-26 22:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {},
              "textExtendedBadges": {}
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-058e7a8e-bc48-4657-b817-eaacc4f13c2f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/pizza-box-sanchar-colony-chhindwara-locality-rest496348",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "385824",
          "name": "The Belgian Waffle Co.",
          "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
          "locality": "Sinchai Colony",
          "areaName": "Mohan Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Waffle",
            "Desserts",
            "Ice Cream",
            "Beverages"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "2233",
          "avgRatingString": "4.6",
          "totalRatingsString": "280",
          "sla": {
            "deliveryTime": 49,
            "lastMileTravel": 11.2,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "11.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-26 22:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {},
              "textExtendedBadges": {}
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-058e7a8e-bc48-4657-b817-eaacc4f13c2f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "151649",
          "name": "Hotel Sai Nath & Sai Restaurant",
          "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
          "locality": "railway station",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "101802",
          "avgRatingString": "4.2",
          "totalRatingsString": "887",
          "sla": {
            "deliveryTime": 51,
            "lastMileTravel": 11.3,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "11.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-26 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "FREE ITEM"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-058e7a8e-bc48-4657-b817-eaacc4f13c2f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "257428",
          "name": "Raajbagh Restaurant ",
          "cloudinaryImageId": "xvyrclhxftulsglktaek",
          "locality": "Seoni Road",
          "areaName": "Chhindwara Locality",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Indian",
            "Chinese",
            "Fast Food",
            "Beverages"
          ],
          "avgRating": 3.7,
          "veg": true,
          "parentId": "164019",
          "avgRatingString": "3.7",
          "totalRatingsString": "966",
          "sla": {
            "deliveryTime": 61,
            "lastMileTravel": 10.7,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "10.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-26 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-058e7a8e-bc48-4657-b817-eaacc4f13c2f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/raajbagh-restaurant-seoni-road-chhindwara-locality-rest257428",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "150597",
          "name": "Scoops Fast Food And Ice Cream",
          "cloudinaryImageId": "fm3rs3g6z7ibfhesmxnu",
          "locality": "Irrigation Colony",
          "areaName": "Khajri Road",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Bakery",
            "Ice Cream",
            "Snacks",
            "Beverages"
          ],
          "avgRating": 4.1,
          "veg": true,
          "parentId": "179482",
          "avgRatingString": "4.1",
          "totalRatingsString": "386",
          "sla": {
            "deliveryTime": 66,
            "lastMileTravel": 12.1,
            "serviceability": "SERVICEABLE",
            "slaString": "65-70 mins",
            "lastMileTravelString": "12.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-10-26 22:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {},
              "textExtendedBadges": {}
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-058e7a8e-bc48-4657-b817-eaacc4f13c2f"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/chhindwara/scoops-fast-food-and-ice-cream-irrigation-colony-khajri-road-rest150597",
          "type": "WEBLINK"
        }
      }
    ]
  }

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search </div>
            <div className="res-container">
                {resObj.restaurants.map((restraunt, index)=>(
                        <RestrauntCard key={restraunt.info.id} resData= {restraunt}/>
                   ))}
            </div>  
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className="app">
            {Header()}
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)