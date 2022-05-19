import React, { useEffect, useState } from "react";
import { WEATHER_API_SERVICE } from "../utils/API";
import LoadingGif from "../assets/images/Ajux_loader.gif";
import Tabs from "./Tabs";
import { convertToPascalCase, convertToUTCDate } from "../utils/utils";

const DetailCard = ({ daily, hourly, active }) => {
  return (
    <>
      {active === "Daily"
        ? daily.map((item) => (
            <div className="cursor-default h-full p-2 rounded card__details shadow-md lg:w-[400px] lg:py-4">
              <p className="hidden font-bold lg:block lg:text-center lg:text-xl">
                {convertToUTCDate(item.dt)}
              </p>
              <div className="flex items-center justify-evenly">
                <figure className="lg:max-w-[100px]">
                  <img
                    src={
                      !daily
                        ? ""
                        : `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                    }
                    alt="weather-icon"
                    className="w-full mx-auto"
                  />
                  <p className="text-xs lg:text-sm -mt-3 lg:-mt-5 font-semibold text-center">
                    {convertToPascalCase(item.weather[0].description)}
                  </p>
                </figure>
                <div className="w-1/2">
                  <p className="text-sm md:text-base font-bold lg:hidden">
                    {convertToUTCDate(item.dt)}
                  </p>
                  <div className="text-xs md:text-sm lg:text-base">
                    <p className="flex justify-between">
                      <span>Max Temp</span>
                      <span className="font-semibold">{item.temp.max}°C</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Min Temp</span>
                      <span className="font-semibold">{item.temp.min}°C</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Precipitation</span>
                      <span className="font-semibold">
                        {Math.round(item.pop * 100)}%
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span>Cloudiness</span>
                      <span className="font-semibold">{item.clouds}%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
      {active === "Hourly"
        ? hourly.map((item) => (
            <div className="cursor-default h-full p-2 rounded card__details shadow-md lg:w-[400px] lg:py-4">
              <div className="flex items-center justify-evenly">
                <figure className="lg:max-w-[100px]">
                  <img
                    src={
                      !hourly
                        ? ""
                        : `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                    }
                    alt="weather-icon"
                    className="w-full mx-auto"
                  />
                  <p className="text-xs -mt-3 font-semibold text-center">
                    {convertToPascalCase(item.weather[0].description)}
                  </p>
                </figure>
                <div className="w-1/2">
                  <p className="text-sm md:text-base font-bold lg:text-lg">
                    {convertToUTCDate(item.dt, "time")}
                  </p>
                  <div className="text-xs md:text-sm lg:text-base">
                    <p className="flex justify-between gap-2">
                      <span>Temperature</span>
                      <span className="font-semibold">{item.temp}°C</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Humidity</span>
                      <span className="font-semibold">{item.humidity}%</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Precipitation</span>
                      <span className="font-semibold">
                        {Math.round(item.pop * 100)}%
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span>Cloudiness</span>
                      <span className="font-semibold">{item.clouds}%</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-lg"></div>
            </div>
          ))
        : ""}
    </>
  );
};

const WeatherForecastResults = ({ results }) => {
  const [active, setActive] = useState("Daily");
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    getForecast();

    async function getForecast() {
      if (results.lat === 0 && results.lon === 0) return;

      const res = await fetch(
        `${WEATHER_API_SERVICE}onecall?lat=${results.lat}&lon=${results.lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&exclude=alerts,current,minutely&units=metric`
      );
      const data = await res.json();

      setForecast(data);
    }
  }, [results]);

  return (
    <div className="font-overpass">
      {!forecast ? (
        <div className="rounded w-full">
          <img
            src={LoadingGif}
            alt="loading-animation"
            className="mx-auto w-[200px]"
          />
        </div>
      ) : (
        <div>
          <Tabs active={active} setActive={setActive} />
          <section className="mb-3">
            <p className="text-3xl md:text-4xl font-bold mt-8">
              {active} Forecast
            </p>
            {!forecast ? (
              ""
            ) : (
              <p className="text-xl md:text-2xl font-semibold">
                {forecast.timezone}
              </p>
            )}
          </section>
          <section className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-evenly overflow-auto gap-3">
            {!forecast ? (
              ""
            ) : (
              <DetailCard
                daily={forecast.daily}
                hourly={forecast.hourly}
                active={active}
              />
            )}
            {/* {forecast && (
              <DetailCard
                daily={forecast.daily}
                hourly={forecast.hourly}
                minutely={forecast.minutely}
                active={active}
              />
            )} */}
          </section>
        </div>
      )}
    </div>
  );
};

export default WeatherForecastResults;
