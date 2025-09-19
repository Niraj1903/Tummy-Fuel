import React, { useState } from "react";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <img className="h-auto w-[80px]" src="/tummyFuel.png" alt="logo" />

        <ul className="flex space-x-6 text-gray-800">
          <li className="cursor-pointer hover:text-orange-500">Home</li>
          <li className="cursor-pointer hover:text-orange-500">About Us</li>
          <li className="cursor-pointer hover:text-orange-500">Contact Us</li>
          <li className="cursor-pointer hover:text-orange-500">Cart</li>
          <li className="cursor-pointer hover:text-orange-500">
            <button onClick={() => setBtn(btn == "Login" ? "Logout" : "Login")}>
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
