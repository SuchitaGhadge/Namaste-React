import cards from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className="body">
        <section className="search">Search</section>
        <section className="restaurant-container">
         {cards.length && cards.map((restaurant) =>  <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant}/>)}
       
        </section>
      </div>
    );
  };

  export default Body;