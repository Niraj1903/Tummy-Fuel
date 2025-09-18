import ResturantCards from "./ResturantCards";
import Shimmer from "./Shimmer";
import useResturantData from "../utils/useResturantData";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Body = () => {
  const [inputText, setInputText] = useState("");

  const {
    listOfResturant,
    setListOfResturant,
    filteredResturant,
    setFilteredResturant,
  } = useResturantData(); // Custom hook for fetching the swiggy API

  const topRatedResturant = () => {
    setListOfResturant(
      listOfResturant.filter(
        (item) => item?.info?.avgRating > 4.5
      ) /* Filtering the Resturant which has avgRating > 4.5 
      on Click of top Rated button */
    );
  };

  const filterResturantOnName = () => {
    const filtered = listOfResturant.filter((item) =>
      item?.info?.name.toLowerCase().includes(inputText.toLowerCase())
    ); //filter the resturant based name
    setFilteredResturant(filtered);
  };
  if (!listOfResturant) return;

  return (
    <>
      <div className="flex  m-4 p-4 w-[100%]">
        <button
          onClick={() => topRatedResturant()}
          className="border border-gray-600 rounded-lg px-2 justify-start"
        >
          Top Rated
        </button>
        <input
          className="border border-gray-600 rounded-l-xl px-2 justify-center"
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Find Resturant"
          value={inputText}
        />
        <button
          onClick={() => filterResturantOnName()}
          className="border border-gray-600 rounded-r-xl px-2 py-1"
        >
          <IoSearchOutline />
        </button>
      </div>

      {listOfResturant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-2">
          {filteredResturant.map((item) => (
            <ResturantCards key={item?.info?.id} resItem={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
