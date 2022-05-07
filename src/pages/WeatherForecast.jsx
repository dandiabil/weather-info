import React, { useState } from "react";
import WeatherForecastResults from "../components/WeatherForecastResults";
import { GEOCODING_API_SERVICE } from "../utils/API";

const WeatherForecast = ({ results }) => {
  return (
    <div className="p-16" id="weather-forecast">
      <div className="mx-auto bg-white rounded-xl">
        <div className="w-3/4 mx-auto py-16">
          <header className="block w-64 mb-8 text-center mx-auto">
            <h2 className="text-5xl font-chivo font-black text-black">
              Weather Forecast
            </h2>
          </header>
          <div className="text-center">
            <section className="font-overpass text-black mb-5">
              <p className="text-2xl font-bold mb-5">
                Check the weather forecast for today or tomorrow
              </p>
              <p className="text-lg mb-5">
                The weather forecast data consists of the daily weather for 7
                days ahead, hourly weather for 24 hours ahead and minutely
                weather for an hour ahead.
              </p>
            </section>
          </div>
        </div>
        <section className="weather-forecast-card rounded-t-none">
          <WeatherForecastResults results={results} />
        </section>
      </div>
    </div>
  );
};

export default WeatherForecast;
