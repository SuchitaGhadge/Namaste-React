
import { useEffect, useState } from 'react'
import cards from "../utils/mockData";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    // fetch data
    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // const data =  await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=28405&catalog_qa=undefined&query=Chinese&submitAction=ENTER');
        // const json = await data.json();
        // console.log('json', json)
        const data = cards?.find(ele => ele.card.card.info.id === resId);
        console.log('data', data)
        setResInfo(data);
    }

    return resInfo;
}

export default useRestaurantMenu