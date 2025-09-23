import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";
import axios from "axios";

const useResturantData = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(SWIGGY_API);

    const resturantData =
      response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfResturant(resturantData);
    setFilteredResturant(resturantData);
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
