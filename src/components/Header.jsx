import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        {/* Logo */}
        <img className="h-10 w-auto" src="/public/tummyFuel.png" alt="logo" />

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-800">
          <li className="cursor-pointer hover:text-orange-500">Home</li>
          <li className="cursor-pointer hover:text-orange-500">About Us</li>
          <li className="cursor-pointer hover:text-orange-500">Contact Us</li>
          <li className="cursor-pointer hover:text-orange-500">Cart</li>
          <li className="cursor-pointer hover:text-orange-500">Login</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
