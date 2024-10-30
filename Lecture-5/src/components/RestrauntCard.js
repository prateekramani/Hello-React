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
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={cdn_url + cloudinaryImageId}></img>

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time - {deliveryTime}</h4>
    </div>
  );
};

export default RestrauntCard;
