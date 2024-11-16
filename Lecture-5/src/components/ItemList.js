
import { cdn_url } from "../utils/constant"

const ItemList = ({data}) =>{

    
    
    return (
        <div>
           {data.map((item) => (
                
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left justify-between flex">
                    
                    <div className="w-9/12">
                        <div className="p-2">
                            <div></div>
                            <span>{item?.card?.info?.name}</span>
                            <span>- ₹ { item.card.info.price ? parseInt(item?.card?.info?.price)/100 : parseInt(item?.card?.info?.defaultPrice)/100}</span>
                            
                        </div>
                        <p className="text-sm">
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div className="p-4 w-3/12">
                        <div className="absolute ">
                            <button className="bg-black text-zinc-50 p-2 mx-16 rounded-lg shadow-lg "> Add + </button>
                        </div>
                        <img src={cdn_url + item?.card?.info.imageId}></img>
                    </div>
                    
                </div> 
           ))}
            
        </div>
    )
}


export default ItemList