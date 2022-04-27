import React from "react";
import LandingIcon from "../assets/images/clouds-transparent.png";

const Header = () => {
  return (
    <header className="w-4/5 mx-auto h-[15vh] flex justify-between items-center font-chivo">
      <figure className="flex items-center hover:cursor-pointer">
        <img src={LandingIcon} alt="logo" className="w-14" />
        <p className="text-2xl text-[#F3F3F3] font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#023047] to-[#219EBC]">
            Weather App
          </span>
        </p>
      </figure>
      <nav>
        <ul className="flex gap-12 items-center text-black text-lg">
          <li className="cursor-pointer">Weather Check</li>
          <li className="cursor-pointer">Forecast</li>
          <li className="cursor-pointer">Weather Map</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
