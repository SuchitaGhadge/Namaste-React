import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props
    const {info : {cloudinaryImageId, name, costForTwo, avgRating, cuisines}} = resData?.card?.card;
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
          <span>{avgRating} stars</span>
        </div>
      </section>
    );
  };

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <> 
        <label className="promoted">Promoted</label>
        <RestaurantCard {...props}/>
      </>
    )
  }
}