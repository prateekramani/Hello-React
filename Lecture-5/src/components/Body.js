import resList from "../utils/mockData"
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

const Body = () => {
 
const [restraunts , setRestraunts] = useState(resList)
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestraunt = restraunts.filter(restraunt =>{
                return restraunt.info.avgRating > 4.5
            })
            setRestraunts(filterRestraunt)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        { restraunts.map((restraunt, index) => (
          <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
