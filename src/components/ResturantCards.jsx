import React from "react";
import { RESTURANT_IMAGE } from "../utils/constants";

const ResturantCards = ({ resItem }) => {
  const { avgRating, cloudinaryImageId, name, cuisines, areaName, sla } =
    resItem.info;
  return (
    <>
      <div className="w-[240px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
        <div className="relative">
          {/* Restaurant Image */}
          <img
            className="w-full h-40 object-cover"
            src={RESTURANT_IMAGE + cloudinaryImageId}
            alt={name}
          />
        </div>

        <div className="p-3">
          {/* Restaurant Name */}
          <h2 className="text-base font-semibold text-gray-800 truncate">
            {name}
          </h2>

          {/* Rating and Delivery Time */}
          <div className="flex items-center text-sm text-gray-700 mt-1">
            <span className="text-green-600 font-semibold mr-1">
              ★ {avgRating}
            </span>
            <span className="text-gray-400">• {sla?.deliveryTime} mins</span>
          </div>

          {/* Cuisines */}
          <p className="text-sm text-gray-500 truncate mt-1">
            {cuisines?.join(", ")}
          </p>

          {/* Area Name */}
          <p className="text-xs text-gray-400 mt-1">{areaName}</p>
        </div>
      </div>
    </>
  );
};

export default ResturantCards;
