import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props
    console.log("res data", resData);
    const {info : {cloudinaryImageId, name, costForTwo, avgRatingString, cuisines}} = resData?.card?.card;
    return (
      <section className="restaurant-card">
        <div className="restaurant-img-container">
          <img
            className="restaurant-img"
            src={CDN_URL+cloudinaryImageId}
            alt="food img"
          />
        </div>
        <div className="restaurant-info">
          <h3>{name}</h3>
          <p >{cuisines?.join(", ")}</p>
          <p>{costForTwo}</p>
          <span>{avgRatingString} stars</span>
        </div>
      </section>
    );
  };

export default RestaurantCard;