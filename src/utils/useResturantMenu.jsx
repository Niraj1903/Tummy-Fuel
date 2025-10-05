import axios from "axios";
import { REST_MENU } from "./constants";
import { useEffect, useState } from "react";

const useResturantMenu = () => {
  const [restMenu, setRestMenu] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(REST_MENU);
    setRestMenu(data?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { restMenu };
};

export default useResturantMenu;
