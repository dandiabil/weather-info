import React, { useState } from "react";
import WeatherCheckResults from "../components/WeatherCheckResults";
import Waves from "../assets/images/waves.png";
import { GEOCODING_API_SERVICE } from "../utils/API";
import FormInput from "../components/FormInput";

const WeatherCheck = ({ results }) => {
  // const [results, setResults] = useState({
  //   lat: 0,
  //   lon: 0,
  // });
  // const [city, setCity] = useState("");

  // async function getGeolocation(e) {
  //   e.preventDefault();
  //   if (!city) return;

  //   const res = await fetch(
  //     `${GEOCODING_API_SERVICE}direct?q=${city}&limit=1&appid=${process.env.REACT_APP_WEATHER_KEY}`
  //   );
  //   const data = await res.json();
  //   setResults({
  //     lat: data[0].lat,
  //     lon: data[0].lon,
  //   });

  //   setCity("");
  // }

  return (
    <>
      <div className="bg-[#EFC2AC] p-16">
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
                {/* <FormInput
                  onSubmit={getGeolocation}
                  city={city}
                  setCity={setCity}
                /> */}
              </section>
              <section className="w-1/2 weather-check-card">
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
