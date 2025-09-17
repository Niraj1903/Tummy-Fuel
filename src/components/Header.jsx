import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <img
          className="border border-black p-4"
          src="/public/tummyFuel.png"
          alt="logo"
        />

        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
