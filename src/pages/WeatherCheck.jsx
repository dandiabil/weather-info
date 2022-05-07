import React, { useState } from "react";
import WeatherCheckResults from "../components/WeatherCheckResults";
import Waves from "../assets/images/waves.png";

const WeatherCheck = ({ results }) => {
  return (
    <>
      <div className="bg-[#EFC2AC] p-16 z-20 relative" id="weather-check">
        <div className="mx-auto bg-white rounded-xl">
          <div className="w-3/4 mx-auto py-16">
            <div className="flex items-center justify-between h-full">
              <section className="font-overpass text-black">
                <header className="block w-full mb-16">
                  <h2 className="text-5xl font-chivo font-black text-black">
                    Weather Check
                  </h2>
                </header>
                <p className="text-2xl font-bold mb-5">
                  Do you want to go to somewhere?
                </p>
                <p className="text-lg mb-5">
                  Get the latest weather information in that area.
                </p>
              </section>
              <section className="w-1/3 weather-check-card">
                <WeatherCheckResults results={results} />
              </section>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Waves}
        alt="waves"
        className="relative rotate-180 w-full bottom-10"
      />
    </>
  );
};

export default WeatherCheck;
