import {useEffect , useState} from "react"
import { menu_api } from "./constant";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)

    const fetchData = async() => {
        const url = menu_api + resId +"&catalog_qa=undefined&query=Burger&submitAction=ENTER"
        const data = await fetch(url)
        const json = await data.json()

        console.log(url , json)
        setResInfo(json)
    }

    useEffect(()=>{
        fetchData()
    },[])
   
    return resInfo;
};


export default useRestaurantMenu
