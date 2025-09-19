import ResturantCards from "./ResturantCards";
import Shimmer from "./Shimmer";
import useResturantData from "../utils/useResturantData";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Body = () => {
  const [inputText, setInputText] = useState("");

  const { listOfResturant, filteredResturant, setFilteredResturant } =
    useResturantData(); // Custom hook for fetching the swiggy API

  const topRatedResturant = () => {
    setFilteredResturant(
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
    setInputText(""); // empties the input search after search is clicked
  };

  if (!listOfResturant) return;
  if (!filteredResturant) return;
  return (
    <>
      <div className="flex justify-center items-center py-2 bg-orange-50">
        <div className="flex items-center gap-3 bg-white p-6 rounded-xl shadow-lg">
          <button
            onClick={() => topRatedResturant()}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200 shadow-sm"
          >
            Top Rated Resturant
          </button>

          <div className="flex items-center border border-orange-500 rounded-lg overflow-hidden shadow-sm">
            <input
              className="px-4 py-2 focus:outline-none text-gray-700"
              onChange={(e) => setInputText(e.target.value)}
              type="text"
              placeholder="Find Restaurant"
              value={inputText}
            />
            <button
              onClick={() => filterResturantOnName()}
              className="bg-white border-l border-orange-500 text-orange-500 px-3 py-2 hover:bg-orange-100 active:scale-95 active:bg-orange-200 transition duration-150 rounded-r-lg"
            >
              <IoSearchOutline size={20} />
            </button>
          </div>
        </div>
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
