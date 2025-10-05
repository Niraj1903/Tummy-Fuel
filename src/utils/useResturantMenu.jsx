import axios from "axios";
import { REST_MENU } from "./constants";
import { useEffect, useState } from "react";

const useResturantMenu = () => {
  const [restMenu, setRestMenu] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(REST_MENU);

      const result = data?.data?.cards.find((item) =>
        item?.card?.card["@type"].includes("food.v2.Restaurant")
      )?.card?.card?.info;

      setRestMenu(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { restMenu };
};

export default useResturantMenu;
