import React, { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import WeatherCheck from "./WeatherCheck";
import WeatherForecast from "./WeatherForecast";
import ErrorBoundary from "../components/ErrorBoundary";
import WeatherMap from "./WeatherMap";
import Waves from "../assets/images/waves.png";
import { GEOCODING_API_SERVICE } from "../utils/API";
import { HashLink } from "react-router-hash-link";
import { Icon } from "@iconify/react";

const LandingPage = () => {
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    lat: 0,
    lon: 0,
  });

  async function getGeolocation(e) {
    e.preventDefault();
    if (!city) return;

    const res = await fetch(
      `${GEOCODING_API_SERVICE}direct?q=${city}&limit=1&appid=${process.env.REACT_APP_WEATHER_KEY}`
    );
    const data = await res.json();
    setResults({
      lat: data[0].lat,
      lon: data[0].lon,
    });

    setCity("");
  }

  function getCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setResults({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }

  useEffect(() => {
    getCoordinates();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", shrinkHeader);
  }, []);

  function shrinkHeader(e) {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("header"),
      topEl = document.querySelector(".top");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("shrink");
      topEl.classList.remove("hidden");
    } else {
      headerEl.classList.remove("shrink");
      topEl.classList.add("hidden");
    }
  }

  return (
    <>
      <div className="w-full h-[65vh]">
        <div className="w-[90%] mx-auto my-20">
          <section className="font-overpass text-black text-center w-[60%] mx-auto z-20 relative">
            <p className="text-8xl font-bold mb-9">
              Your One-Stop <span className="text-white">Weather</span> News
              Info
            </p>
            <p className="text-4xl mb-10">
              Check the weather on your local area easily.
            </p>
            <form
              className="inline-flex w-full h-[50px] items-center gap-2"
              autoComplete="off"
              onSubmit={getGeolocation}
            >
              <TextInput
                className="grow h-full"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
              <button className="transition text-white bg-black rounded-lg py-3 px-6 text-lg hover:bg-[#034363]">
                Get Info
              </button>
            </form>
          </section>
        </div>
      </div>
      <img src={Waves} alt="waves" className="absolute w-full z-10 bottom-10" />
      <WeatherCheck results={results} />
      <WeatherForecast results={results} />
      <div className="p-16 bg-white h-auto" id="weather-map">
        <header className="block w-full mb-16">
          <h2 className="text-5xl font-chivo font-black text-black mb-5">
            Weather Map
          </h2>
          <p className="text-2xl font-semibold mb-5">
            Using React Leaflet and OpenWeatherMap API, you can find out certain
            area's temperature in the world, how cloudy it is, the precipitation
            percentages and also the wind speed in that particular area using
            the layer's tile in the top right corner.
          </p>
        </header>
        <ErrorBoundary>
          <WeatherMap results={results} />
        </ErrorBoundary>
      </div>
      <div className="top hidden">
        <HashLink
          className="fixed bottom-8 right-8 bg-[#e2885f] w-[50px] h-[50px] rounded-lg z-40 shadow-md flex items-center justify-center"
          to="#top"
          smooth
        >
          <Icon icon="akar-icons:chevron-up" className="text-3xl text-black" />
        </HashLink>
      </div>
    </>
  );
};

export default LandingPage;
