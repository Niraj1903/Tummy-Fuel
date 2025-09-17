import React, { useEffect, useState } from "react";
import ResturantCards from "./ResturantCards";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    console.log(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfResturant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {listOfResturant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2">
          {listOfResturant.map((item) => (
            <ResturantCards key={item?.info?.id} resItem={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
