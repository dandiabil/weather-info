import React, { useState } from "react";
import FormInput from "../components/FormInput";
import WeatherForecastResults from "../components/WeatherForecastResults";
import { GEOCODING_API_SERVICE } from "../utils/API";

const WeatherForecast = ({ results }) => {
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
    <div className="p-16">
      <div className="mx-auto bg-white rounded-xl">
        <div className="w-3/4 mx-auto py-16">
          <header className="block w-64 mb-16 text-center mx-auto">
            <h2 className="text-5xl font-chivo font-black text-black">
              Weather Forecast
            </h2>
          </header>
          <div className="text-center">
            <section className="font-overpass text-black mb-5">
              <p className="text-2xl font-bold mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus, deserunt?
              </p>
              <p className="text-lg mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                pariatur suscipit eum aliquid saepe voluptas doloremque?
                Quisquam harum tenetur consequatur?
              </p>
              {/* <FormInput
                onSubmit={getGeolocation}
                city={city}
                setCity={setCity}
              /> */}
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
