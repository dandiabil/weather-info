import React, { useEffect, useRef, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Map from "../components/Map";

const WeatherMap = ({ results }) => {
  return (
    <div className="py-16 px-8 lg:px-36 bg-white h-auto" id="weather-map">
      <header className="w-full mb-16">
        <h2 className="text-3xl md:text-5xl font-chivo font-black text-black mb-5">
          Weather Map
        </h2>
        <p className="md:text-lg lg:text-xl mb-5 font-overpass">
          Using React Leaflet and OpenWeatherMap API, you can find out certain
          area's temperature in the world, how cloudy it is, the precipitation
          percentages and also the wind speed in that particular area using the
          layer's tile in the top right corner.
        </p>
      </header>
      <ErrorBoundary>
        <Map results={results} />
      </ErrorBoundary>
    </div>
  );
};

export default WeatherMap;
