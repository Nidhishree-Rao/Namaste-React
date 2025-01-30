
import { useState } from "react";
import ItemList from "./ItemList";





const RestaurantCategory = ({data, toggle, setShowIndex}) => {
     // controlled and uncontrolled compinents
    
     const handleClcik = () =>{
    setShowIndex();

        };

    return (<div>
        {}
        <div className="w-6/12 my-4 mx-auto bg-gray-100 shadow-lg p-4">
            <div className="flex justify-between" onClick={handleClcik}>
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>

            <span>⬇️</span>
            </div>
          { toggle && <ItemList items = {data.itemCards}/>} 
        </div>
        {}
     

    </div>);
} 

export default RestaurantCategory;