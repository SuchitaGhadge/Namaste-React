import { useState } from "react";
import cards from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRes, setListOfRes] = useState(cards)
    return (
      <div className="body">
        <button className="btn btn-filter" onClick={() =>  setListOfRes(listOfRes.filter(res =>  res?.card?.card?.info?.avgRating > 4.2)) }>Top Rated</button>
        <section className="restaurant-container">
         {listOfRes.length && listOfRes.map((restaurant) =>  <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant}/>)}
       
        </section>
      </div>
    );
  };

  export default Body;