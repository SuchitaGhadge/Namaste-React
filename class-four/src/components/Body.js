import { useEffect, useState } from "react";
import cards from "../utils/mockData";
import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // useState is used to create local state variable inside a function component.
  // Whenever state variable updates, React triggers reconciliation cycle (re-renders  the component)
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([])
    const [searchText, setSearchText] = useState("");

    // If no dependancy array => useEffect will re-render on every component render
    // If dependancy array is empty = [] => useEffect is called on initial render (only once)
    // If dependancy array contains any state => useEffect will called on initial render + on every dependant state update
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
    
  // custom react hook
    const onlineStatus = useOnlineStatus();

  //  Higher Order Component
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
    
    if(!onlineStatus) return <h1>Opps.. Looks like you're offline!! Please check your internet connection.</h1>
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
         {filteredListOfRes.length && filteredListOfRes.map((restaurant) =>  
          <Link key={restaurant?.card?.card?.info?.id} to={`/restaurants/${restaurant?.card?.card?.info?.id}`} >
            {restaurant?.card?.card?.info?.promoted ? <RestaurantCardPromoted resData={restaurant}/> :  <RestaurantCard resData={restaurant}/>}
           
          </Link>
          )}
        </section>
      </div>
    );
  };

  export default Body;

  /**
   * 	https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null
   */