import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";

const useResturantData = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    setListOfResturant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResturant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    listOfResturant,
    setListOfResturant,
    filteredResturant,
    setFilteredResturant,
  };
};

export default useResturantData;
