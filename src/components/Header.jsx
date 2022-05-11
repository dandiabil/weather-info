import React from "react";
import LandingIcon from "../assets/images/clouds-transparent.png";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header
      id="header"
      className="sticky top-0 left-0 z-[999] transition-all h-[15vh]"
    >
      <div className="w-4/5 mx-auto flex justify-between items-center font-chivo h-full">
        <figure className="flex items-center hover:cursor-pointer">
          <img src={LandingIcon} alt="logo" className="w-14" />
          <p className="text-2xl text-[#F3F3F3] font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#023047] to-[#219EBC]">
              Weather Info
            </span>
          </p>
        </figure>
        <nav>
          <ul className="flex gap-12 items-center text-black text-lg">
            <NavHashLink
              smooth
              to="#weather-check"
              className="cursor-pointer hover:text-white transition"
            >
              Weather Check
            </NavHashLink>
            <NavHashLink
              smooth
              to="#weather-forecast"
              className="cursor-pointer hover:text-white transition"
            >
              Forecast
            </NavHashLink>
            <NavHashLink
              smooth
              to="#weather-map"
              className="cursor-pointer hover:text-white transition"
            >
              Weather Map
            </NavHashLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
