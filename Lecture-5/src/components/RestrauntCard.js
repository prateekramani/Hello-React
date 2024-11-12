import { cdn_url } from "../utils/constant";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestrauntCard = (props) => {
  // console.log(props)
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;
  const { deliveryTime } = sla;
  return (
    <div className=" m-4 p-4 w-[200px]  bg-gray-100 h-96 rounded-md  hover:bg-gray-300 hover:drop-shadow-lg">
      <img className="res-logo rounded-md w-48 h-40" src={cdn_url + cloudinaryImageId}></img>
      <h3 className="font-bold py-4 text-base">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time - {deliveryTime}</h4>
    </div>
  );
};

export default RestrauntCard;
