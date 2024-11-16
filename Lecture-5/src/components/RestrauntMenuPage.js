import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestrauntCategory from "./RestrauntCategory"

const RestaurantMenuPage = () =>{

    // const [restrauntMenu, setRestrauntMenu] = useState(null)

    const {resId} = useParams();

    //custom hook
    const restrauntMenu = useRestaurantMenu(resId)

    const [showIndex , setShowIndex] = useState(null)
    // const fetchMenu = async () => {
    //     const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" + resId +"&catalog_qa=undefined&query=Burger&submitAction=ENTER"
    //     const data = await fetch(url)
    //     const json = await data.json()
    //     setRestrauntMenu(json)
    //     console.log("items" , json.data)
        
    // }

    // useEffect(()=>{
    //     fetchMenu();
    // }, [])

    if (restrauntMenu == null) return (<Shimmer/>)  
    
    const {name, cuisines, avgRating, costForTwoMessage} = restrauntMenu.data.cards[2].card.card.info
    const categories = restrauntMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    // const {itemCards} = restrauntMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    return (

        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} | {avgRating} ⭐️ | {costForTwoMessage}</p>
            {/* <h2>{avgRating}</h2>
            <h2>{costForTwoMessage}</h2> */}

            {/* controlled component for RestrauntCategory */}
            {categories.map((category, index)=>(
                <RestrauntCategory key={category.card.card.title} data={category.card.card} showItems={index == showIndex ? true : false}  setShowIndex= {(hideAll = false) => {
                    console.log("value of hideAll " , hideAll)
                    hideAll ? setShowIndex(null) : setShowIndex(index)}}/>
            ))}
        </div>
    )
}


export default RestaurantMenuPage