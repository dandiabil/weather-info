import React, { useEffect, useState } from "react";
import { WEATHER_API_SERVICE } from "../utils/API";
import LoadingGif from "../assets/images/Ajux_loader.gif";
import Tabs from "./Tabs";
import { convertToUTCDate } from "../utils/utils";

const DetailCard = ({ daily, hourly, minutely, active }) => {
  return (
    <>
      {active === "Daily"
        ? daily.map((item) => (
            <div className="hover:cursor-pointer glass-background min-h-20 h-full p-2 rounded">
              <div className="">
                <p>{convertToUTCDate(item.dt)}</p>
                <div>
                  {!daily ? (
                    <img src="" alt="weather-icon" />
                  ) : (
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt="weather-icon"
                    />
                  )}
                  <p>
                    {item.temp.min}, {item.temp.max}
                  </p>
                </div>
              </div>
            </div>
          ))
        : ""}
      {active === "Hourly"
        ? hourly.map((item) => (
            <div className="hover:cursor-pointer glass-background min-h-20 h-full p-2 rounded">
              <div className="">
                <p>{convertToUTCDate(item.dt)}</p>
                <div>
                  {!hourly ? (
                    <img src="" alt="weather-icon" />
                  ) : (
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt="weather-icon"
                    />
                  )}
                  <p>
                    {item.temp.min}, {item.temp.max}
                  </p>
                </div>
              </div>
            </div>
          ))
        : ""}
      {/* {active === "Minutely"
        ? minutely.map((item) => (
            <div className="">
              <p>{convertToUTCDate(item.dt)}</p>
              <div>
                {!minutely ? (
                  <img src="" alt="weather-icon" />
                ) : (
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="weather-icon"
                  />
                )}
                <p>
                  {item.temp.min}, {item.temp.max}
                </p>
              </div>
            </div>
          ))
        : ""} */}
    </>
  );
};

const WeatherForecastResults = ({ results }) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("Daily");
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    getForecast();

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
        <section className="flex items-center justify-between flex-wrap text-white">
          {!forecast ? (
            loadingContent
          ) : (
            <DetailCard
              daily={forecast.daily}
              hourly={forecast.hourly}
              minutely={forecast.minutely}
              active={active}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default WeatherForecastResults;
