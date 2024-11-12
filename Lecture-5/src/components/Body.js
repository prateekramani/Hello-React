import resList from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  },[]);

  // since we applied only at Body level, offline functionality will come only on Body Component
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1> Internet not available. Please check your Internet Connection. </h1>
  }

  // if (restraunts.length == 0) {
  // return <h1>Loading ...</h1>
  return (
    <div >
      <div className="filter">
        <div className="search mx-2 px-2">
            <input type="text" className = "search-box border-2 border-grey-100 hover:drop-shadow-lg" value= {searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button className="m-4 h-9 px-4 bg-slate-200 hover:drop-shadow-lg rounded-lg" onClick = {()=>{
              const filteredRestraunt =  restraunts.filter(res =>{
                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
              })
              setFilteredRestraunts(filteredRestraunt)
            }}>
              Search
            </button>    
        <button
          className="filter-btn h-9 m-4 px-4 bg-slate-200 hover:drop-shadow-lg rounded-lg"
          onClick={() => {
            const filterRestraunt = restraunts.filter((restraunt) => {
              return restraunt.info.avgRating > 4.5;
            });
            setFilteredRestraunts(filterRestraunt);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {restraunts.length == 0 ? (
          <Shimmer />
        ) : (
          filteredRestraunts.map((restraunt, index) => (
            <Link to={"/restaurants/" + restraunt.info.id} key={restraunt.info.id}>
              <RestrauntCard  resData={restraunt} />
            </Link> 
          ))
        )
        }
      </div>
    </div>
  );
};

export default Body;
