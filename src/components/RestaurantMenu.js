
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu = () => {
    const { resid } = useParams();
    const resInfo = useRestaurantMenu(resid);

    const [showIndex, setShowIndex] = useState(null); //lifiting the state up 


    if ( resInfo === null) return <Shimmer />;

 
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   // console.log(categories);
   return (<div className="text-center">
             <h1 className="font-bold my-6">{name}</h1>
             <h2>{cuisines?.join(", ")} - {costForTwoMessage}</h2>
            {
                categories.map((category, index)=> 
                <RestaurantCategory key={category?.card?.card?.title} 
                data = {category?.card?.card}
                toggle={index === showIndex ? true : false}
                setShowIndex ={() => setShowIndex(index)}
                />)
           
            }


        </div>
    );
};

export default RestaurantMenu;