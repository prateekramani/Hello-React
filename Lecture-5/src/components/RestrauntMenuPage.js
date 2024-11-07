import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"


const RestaurantMenuPage = () =>{

    // const [restrauntMenu, setRestrauntMenu] = useState(null)

    const {resId} = useParams();
    console.log(resId)
    //custom hook
    const restrauntMenu = useRestaurantMenu(resId)

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
    
    const {itemCards} = restrauntMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    return (
        <div className ="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <img></img>
            <h2>{avgRating}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul> {
                itemCards.map((item)=>(
                    <li key={item.card.info.id}> 
                        {item.card.info.name} - {item.card.info.price/100}
                    </li>
                ))
                }
            </ul>
        </div>  
    )
}


export default RestaurantMenuPage