import ItemList from "./ItemList"
import { useState } from "react"

const RestrauntCategory = ({data, showItems, setShowIndex}) => {
    
    
    const handleClick = () =>{
        // clicking on the same Accordion
        // can be written as a ternary condition 
        if (showItems) {
            console.log("I clicked the same toogle")
            setShowIndex(true)
        } else {
            setShowIndex()
        }
        
    }
    const {itemCards, title} = data
    
    return (
        <div className=" w-6/12 bg-gray-100 shadow-lg m-auto p-4 my-6 rounded-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>    
                <span className="font-bold text-lg"> {title} ({itemCards.length})</span>
                <span className="text-2xl">⌄</span>
            </div>
            {/* Accordian Body */}
            {showItems && <ItemList data = {itemCards}/>}
            
        </div>
    )
}

export default RestrauntCategory