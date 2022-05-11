import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="w-4/5 mx-auto h-[10vh] flex justify-between items-center font-chivo">
        <p className="font-semibold">
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
        <p className="font-semibold">Copyright&copy; 2022</p>
        <p className="text-2xl font-bold">
          <span className="">Weather Info</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
