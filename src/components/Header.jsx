import React from "react";
import WeatherInfoLogo from "../assets/images/WeatherInfo-Logo.png";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header id="header" className="h-[8vh] md:h-[10vh] w-full">
      <div className="w-[90%] md:w-4/5 mx-auto flex justify-between items-center font-chivo h-full">
        <figure className="hover:cursor-pointer w-[150px] md:w-[250px]">
          <img src={WeatherInfoLogo} alt="logo" className="" />
        </figure>
        <nav className="text-xs md:text-lg text-black inline-block font-semibold">
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noreferrer"
          >
            OpenWeatherMap
            <Icon icon="bx:link-external" className="inline-block mb-1" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
