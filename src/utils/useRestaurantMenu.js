
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

//Custom Hook for fetching the data
const useRestaurantMenu = (resid) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {

        const data = await fetch(MENU_API + resid);
        const json = await data.json();
        setResInfo(json.data);
        
    };
    return resInfo;
};

export default useRestaurantMenu;