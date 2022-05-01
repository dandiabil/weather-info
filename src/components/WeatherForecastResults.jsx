import React, { useEffect, useState } from "react";
import { WEATHER_API_SERVICE } from "../utils/API";
import LoadingGif from "../assets/images/Ajux_loader.gif";
import Tabs from "./Tabs";
import { convertToPascalCase, convertToUTCDate } from "../utils/utils";
import data from "../onecall-example.json";

const DetailCard = ({ daily, hourly, minutely, active }) => {
  const firstHour = hourly[0];
  return (
    <>
      {active === "Daily"
        ? daily.map((item) => (
            <div className="hover:cursor-pointer glass-background h-full p-2 rounded">
              <div>
                <p className="text-xl text-center font-semibold">
                  {convertToUTCDate(item.dt)}
                </p>
                <div className="text-center mb-5">
                  <img
                    src={
                      !daily
                        ? ""
                        : `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                    }
                    alt="weather-icon"
                    className="w-36 mx-auto"
                  />
                  <p className="-mt-4">
                    {!daily
                      ? ""
                      : `${convertToPascalCase(item.weather[0].description)}`}
                  </p>
                </div>
                <div className="text-lg">
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
          ))
        : ""}
      {active === "Hourly"
        ? hourly.map((item) => (
            <div className="hover:cursor-pointer glass-background h-full p-2 rounded">
              <div>
                <p className="text-xl text-center font-semibold">
                  {convertToUTCDate(item.dt, "time")}
                </p>
                <div className="text-center mb-5">
                  <img
                    src={
                      !hourly
                        ? ""
                        : `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
                    }
                    alt="weather-icon"
                    className="w-36 mx-auto"
                  />
                  <p className="-mt-4">
                    {!hourly
                      ? ""
                      : `${convertToPascalCase(item.weather[0].description)}`}
                  </p>
                </div>
                <div className="text-lg">
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
          ))
        : ""}
      {active === "Minutely" ? (
        <div className="hover:cursor-pointer glass-background p-2 rounded w-full max-h-[450px]">
          <p className="text-3xl text-center font-semibold my-5">
            {convertToUTCDate(firstHour.dt, "time")}
          </p>
          <div className="flex items-center justify-start">
            <div className="text-center w-1/3">
              <img
                src={
                  !firstHour
                    ? ""
                    : `http://openweathermap.org/img/wn/${firstHour.weather[0].icon}@4x.png`
                }
                alt="weather-icon"
                className="mx-auto"
              />
              <p className="-mt-4 text-4xl font-bold">
                {!firstHour
                  ? ""
                  : `${convertToPascalCase(firstHour.weather[0].description)}`}
              </p>
            </div>
            <div className="flex flex-col flex-wrap h-[330px] w-full overflow-auto">
              {minutely.map((item) => {
                return (
                  <>
                    <div className="text-lg mx-2">
                      <p className="flex justify-between gap-6 font-semibold">
                        {convertToUTCDate(item.dt, "time")}
                      </p>
                      <p className="flex justify-between gap-6">
                        <span>Precipitation Vol.</span>
                        <span className="font-semibold">
                          {item.precipitation}mm
                        </span>
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const WeatherForecastResults = ({ results }) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("Daily");
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    // getForecast();
    setForecast(data);
    async function getForecast() {
      if (results.lat === 0 && results.lon === 0) return;

      setLoading(true);

      const res = await fetch(
        `${WEATHER_API_SERVICE}onecall?lat=${results.lat}&lon=${results.lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&exclude=alerts,current&units=metric`
      );
      const data = await res.json();

      setForecast(data);
      setLoading(false);
    }
  }, [results]);

  const loadingContent = (
    <div className="rounded w-full glass-background">
      <img
        src={LoadingGif}
        alt="loading-animation"
        className="mx-auto w-[200px]"
      />
    </div>
  );

  return (
    <div className="p-8 font-overpass backdrop-blur-[2px]">
      <div className="p-2">
        <Tabs active={active} setActive={setActive} />
        <section className="mb-5">
          <p className="text-3xl font-bold text-white">{active} Forecast</p>
          {!forecast ? (
            ""
          ) : (
            <p className="text-xl font-semibold text-white">
              {forecast.timezone}
            </p>
          )}
        </section>
        <section className="flex items-center justify-between text-white overflow-auto gap-3">
          {!forecast ? (
            loadingContent
          ) : (
            <DetailCard
              daily={data.daily}
              hourly={data.hourly}
              minutely={data.minutely}
              active={active}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default WeatherForecastResults;
