import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {/* Placeholder for a single card */}
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="w-60 h-72 bg-gray-200 rounded-lg overflow-hidden animate-pulse"
        >
          <div className="w-full h-36 bg-gray-300 mb-4"></div>
          <div className="w-3/4 h-5 bg-gray-300 mb-2"></div>
          <div className="w-1/2 h-4 bg-gray-300"></div>
          <div className="mt-4 flex justify-between items-center">
            <div className="w-1/4 h-3 bg-gray-300"></div>
            <div className="w-1/3 h-3 bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
