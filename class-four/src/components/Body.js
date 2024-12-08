import { useEffect, useState } from "react";
import cards from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
const Body = () => {
  // Whenever state variable updates, React triggers reconciliation cycle (re-renders  the component)
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([])
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
      fetchData()
    },[])

    console.log("re-render" )
    fetchData = async () => {
      console.log('running fetch')
      // const data = await fetch("https://api.freeapi.app/api/v1/public/books" );
      // console.log('fetch data', data)
      // const json = await data.json();
      // console.log('newData', json?.data.data)
      setTimeout( () =>{ setListOfRes(cards)
        setFilteredListOfRes(cards)
      }, 500)
    }
     return listOfRes.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter">
                <input className="input-search" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={() => {
                  console.log(searchText);
                  setFilteredListOfRes(listOfRes.filter(res => {
                    return res?.card?.card?.info?.name === "" ? listOfRes : 
                    res?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                  }))
                }} >Search</button>
                <button className="btn btn-filter" onClick={() =>  setFilteredListOfRes(listOfRes.filter(res =>  res?.card?.card?.info?.avgRating > 4.2)) }>Top Rated
                </button>
        </div>
        <section className="restaurant-container">
         {filteredListOfRes.length && filteredListOfRes.map((restaurant) =>  <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant}/>)}
       
        </section>
      </div>
    );
  };

  export default Body;

  /**
   * 	https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null
   */