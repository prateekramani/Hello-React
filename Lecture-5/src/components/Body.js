import resList from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // const [restraunts, setRestraunts] = useState(resList);
  // whenever there is any change in the state variable, react triggers reconcilliation cycle (re-renders the entire functional component)
  const [restraunts, setRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText , setSearchText] = useState("")
  console.log("Body rendered")
  const fetchData = async () => {
    console.log("fetch data function is being called")
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  useEffect(() => {
    console.log("calling fetch data")
    fetchData();
  }, []);

  // if (restraunts.length == 0) {
  // return <h1>Loading ...</h1>
  return (
    <div>
      <div className="filter">
        <div className="search">
            <input type="text" className = "search-box" value= {searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button onClick = {()=>{
              const filteredRestraunt =  restraunts.filter(res =>{
                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
              })
              setFilteredRestraunts(filteredRestraunt)
            }}>
              Search
            </button>    
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestraunt = restraunts.filter((restraunt) => {
              return restraunt.info.avgRating > 4.5;
            });
            setRestraunts(filterRestraunt);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>

      <div className="res-container">
        {restraunts.length == 0 ? (
          <Shimmer />
        ) : (
          filteredRestraunts.map((restraunt, index) => (
            <RestrauntCard key={restraunt.info.id} resData={restraunt} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
