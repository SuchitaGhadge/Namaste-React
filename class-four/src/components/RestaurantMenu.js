// import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
// import cards from "../utils/mockData";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    // const [resMenu, setResMenu] = useState(null)
    // useEffect( () => {
    //     fetchData()
    // }, [])

    // const fetchData =  () => {
        // const data =  await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=28405&catalog_qa=undefined&query=Chinese&submitAction=ENTER');
        // const json = await data.json();
        // console.log('json', json)
        // const data = cards?.find(ele => ele.card.card.info.id === resId);
        // console.log('data', data)
        // setResMenu(data)
    // }

    const {resId} = useParams();
    console.log('params', resId)
    if(resMenu == null) return <Shimmer />

    const {name, costForTwo, } = resMenu?.card?.card?.info;
    return (
        <>
        <h2>{name} - {costForTwo}</h2> 
        <h3>Restaurant Menu</h3> 
            <ul>
                <li>Puran Poli</li>
                <li>Wada Paav</li>
                <li>Sabudana Wada</li>
            </ul>
        </>
    )
}

export default RestaurantMenu;