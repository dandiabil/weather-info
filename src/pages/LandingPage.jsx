import React, { useEffect, useRef, useState } from "react";
import TextInput from "../components/TextInput";
import WeatherInfoResults from "./WeatherInfoResults";
import WeatherMap from "./WeatherMap";
import Waves from "../assets/images/waves.png";
import { GEOCODING_API_SERVICE } from "../utils/API";

const LandingPage = () => {
  const [city, setCity] = useState("");
  const resultEl = useRef(null);
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
    resultEl.current.scrollIntoView();
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

  return (
    <>
      <div className="w-full max-h-[65vh]">
        <div className="w-[90%] mx-auto mt-16 md:mt-32">
          <section className="font-overpass text-black sm:text-center w-full md:w-[60%] mx-auto z-20 relative">
            <p className="text-3xl lg:text-8xl font-bold mb-3 md:mb-9">
              Your One-Stop <span className="text-white">Weather</span> News
              Info
            </p>
            <p className="text-xl md:text-4xl mb-3 md:mb-10">
              Check the weather on your local area easily.
            </p>
            <form
              className="md:inline-flex w-full h-[50px] items-center gap-2"
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
      <img src={Waves} alt="waves" className="relative w-full z-10" />
      <WeatherInfoResults results={results} refEl={resultEl} />
      <WeatherMap results={results} />
    </>
  );
};

export default LandingPage;
