import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="w-[90%] mx-auto h-[10vh] flex justify-between items-center font-chivo">
        <p className="font-semibold text-xs md:text-lg">Copyright&copy; 2022</p>
        <p className="font-semibold text-xs md:text-lg">
          About{" "}
          <span className="underline hover:text-[#969696]">
            <a
              href="https://openweathermap.org/"
              rel="noreferrer"
              target="_blank"
            >
              OpenWeatherMap
            </a>
          </span>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
