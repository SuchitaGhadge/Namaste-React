
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    const {resId} = useParams();
    
    const resMenu = useRestaurantMenu(resId)
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