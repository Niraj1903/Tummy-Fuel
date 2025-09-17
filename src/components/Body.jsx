import ResturantCards from "./ResturantCards";
import Shimmer from "./Shimmer";
import useResturantData from "../utils/useResturantData";

const Body = () => {
  const listOfResturant = useResturantData();

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
