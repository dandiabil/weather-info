import React from "react";
import WeatherCheckResults from "../components/WeatherCheckResults";
import Waves from "../assets/images/waves.png";
import WeatherForecastResults from "../components/WeatherForecastResults";

const WeatherInfoResults = ({ results, refEl }) => {
  return (
    <>
      <div
        className="bg-[#EFC2AC] py-8 px-5 md:p-16 z-20 relative text-black md:-top-2"
        id="weather-check"
      >
        <div className="w-[80vw] mx-auto card shadow-md" ref={refEl}>
          <div className="w-[80%] mx-auto py-12 md:py-16">
            <section className="font-overpass">
              <header className="w-full mb-8">
                <h2 className="text-3xl md:text-5xl font-chivo font-black text-black">
                  Weather Information
                </h2>
              </header>
              <div className="mb-8">
                <WeatherCheckResults results={results} />
              </div>
              <header className="w-full mb-8">
                <h2 className="text-3xl md:text-5xl font-chivo font-black text-black">
                  Weather Forecast
                </h2>
              </header>
              <div>
                <WeatherForecastResults results={results} />
              </div>
            </section>
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

export default WeatherInfoResults;
