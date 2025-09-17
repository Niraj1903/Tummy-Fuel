import React, { useEffect } from "react";
import ResturantCards from "./ResturantCards";

const Body = () => {
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ResturantCards />
    </>
  );
};

export default Body;
