import cards from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className="body">
        <button className="btn btn-filter" onClick={() => console.log("Button clicked")}>Top Rated</button>
        <section className="restaurant-container">
         {cards.length && cards.map((restaurant) =>  <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant}/>)}
       
        </section>
      </div>
    );
  };

  export default Body;