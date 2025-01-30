import RestuarantCard, { withPromotedLabel } from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestuarant, setfilteredRestuarant] = useState([]);
  const [searchText, setsearchText] = useState("");
  //const shouldRenderFooter = false;

  const RestaurantCardPromoted = withPromotedLabel(RestuarantCard);

 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestuarant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!listOfRestaurants || listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex items-center">
        <input
          type="text"
          data-testid="searchInput"
          className="border border-solid border-black px-3 py-1 ml-5"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />

        <button
          className="search-container px-4 py-2 bg-green-100 ml-3 rounded-lg"
          onClick={() => {
            const filteredRestuarant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            
            );
            setfilteredRestuarant(filteredRestuarant);

          }}
          
        >
          Search
        </button>

        <div className="search m-3 p-3 items-center">
  <button
    className="px-5 py-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
    onClick={() => {
      // Ensure listOfRestaurants is not empty or undefined
      if (!listOfRestaurants || listOfRestaurants.length === 0) {
        console.error("No restaurants to filter.");
        return;
      }

      // Filter restaurants with avgRating > 4.3
      const filteredList = listOfRestaurants.filter(
        (res) => res.info && res.info.avgRating && res.info.avgRating > 4.3
      )
      

      // Update the state
      setListOfRestraunt(filteredList);

      // Log for debugging
      console.log("Filtered Restaurants:", filteredList);
    }}
  >
    Top Rated Restaurants
  </button>
</div>

      </div>

      <div className="flex flex-wrap">
        {filteredRestuarant.map((restaurant) => (
          <Link
            to={"/restauarants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestuarantCard resData={restaurant} />
            )}
          </Link>
        ))}
  
         </div>
   
    </div>
    
  );
};

export default Body;
