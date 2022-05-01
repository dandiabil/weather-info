import React, { useEffect, useState } from "react";
import LoadingGif from "../assets/images/Ajux_loader.gif";
import { WEATHER_API_SERVICE } from "../utils/API";
import { convertToPascalCase, convertToUTCDate } from "../utils/utils";
import { Icon } from "@iconify/react";

const DetailCard = ({ icon, detail, type }) => {
  const temperature = (
    <>
      <Icon icon={icon} className="text-[30px]" />
      <div>
        <p>Temperature : {detail.temp}°C</p>
        <p>Temperature Min. : {detail.temp_min}°C</p>
        <p>Temperature Max. : {detail.temp_max}°C</p>
        <p>Pressure : {detail.pressure}hPa</p>
        <p>Humidity : {detail.humidity}%</p>
      </div>
    </>
  );

  const visibility = (
    <>
      <Icon icon={icon} className="text-[30px]" />
      <p>Visibility : {detail}km</p>
    </>
  );

  const clouds = (
    <>
      <Icon icon={icon} className="text-[30px]" />
      <p>Cloudiness : {detail.all}%</p>
    </>
  );

  const wind = (
    <>
      <Icon icon={icon} className="text-[30px]" />
      <div>
        <p>Wind Speed : {detail.speed}m/s</p>
        <p>Wind Direction : {detail.deg}deg</p>
      </div>
    </>
  );

  return (
    <div className="hover:cursor-pointer glass-background h-auto min-h-20 flex flex-col justify-center px-4 py-3 rounded mb-3">
      <div className="flex justify-start items-center gap-5 font-semibold">
        {type === "temp" ? temperature : null}
        {type === "vis" ? visibility : null}
        {type === "cloud" ? clouds : null}
        {type === "wind" ? wind : null}
      </div>
    </div>
  );
};

const WeatherCheckResults = ({ results }) => {
  const [loading, setLoading] = useState(false);
  const [curWeather, setCurWeather] = useState(null);

  // console.log(curWeather)

  useEffect(() => {
    getWeatherData();

    async function getWeatherData() {
      if (results.lat === 0 && results.lon === 0) return;
      setLoading(true);

      const res = await fetch(
        `${WEATHER_API_SERVICE}weather?lat=${results.lat}&lon=${results.lon}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`
      );
      const data = await res.json();

      setCurWeather(data);
      setLoading(false);
    }
  }, [results]);

  const loadingContent = (
    <div className="rounded w-fit glass-background">
      <img src={LoadingGif} alt="loading-animation" className="mx-auto" />
    </div>
  );

  return (
    <div className="backdrop-blur-[2px] rounded-[30px] cursor-default">
      <div className="px-8 py-6 text-white font-overpass">
        <section className="flex justify-start items-center gap-5 mb-5">
          <div className="glass-background rounded-full">
            <figure>
              {!curWeather ? (
                <img
                  src={``}
                  alt="weather-icon"
                  className="opacity-0 h-[100px] w-[100px]"
                />
              ) : (
                <img
                  src={`http://openweathermap.org/img/wn/${curWeather.weather[0].icon}@2x.png`}
                  alt="weather-icon"
                />
              )}
            </figure>
          </div>
          <div>
            {!curWeather ? (
              <>
                <p className="text-5xl font-semibold">--°C</p>
                <p className="italic">Weather Condition</p>
                <p className="text-lg font-semibold">Weather Description</p>
              </>
            ) : (
              <>
                <p className="text-5xl font-semibold">
                  {curWeather.main.temp}°C
                </p>
                <p className="italic">{curWeather.weather[0].main}</p>
                <p className="text-lg font-semibold">
                  {convertToPascalCase(curWeather.weather[0].description)}
                </p>
              </>
            )}
          </div>
        </section>
        <section className="mb-5">
          {!curWeather ? (
            <>
              <p className="italic">Coordinate : 0, 0</p>
              <p className="text-lg">Location Name</p>
            </>
          ) : (
            <>
              <p className="italic">
                Coordinate : {curWeather.coord.lat}, {curWeather.coord.lon}
              </p>
              <p className="text-xl">
                {curWeather.name}, {curWeather.sys.country}
              </p>
              <p className="text-md">
                {convertToUTCDate(curWeather.dt)}
                {", "}
                {convertToUTCDate(curWeather.dt, "time")}
              </p>
            </>
          )}
        </section>
        <section className="">
          {!curWeather ? (
            loadingContent
          ) : (
            <>
              <DetailCard
                icon={"fluent:temperature-24-regular"}
                detail={curWeather.main}
                type="temp"
              />
              <DetailCard
                icon={"ic:outline-visibility"}
                detail={curWeather.visibility}
                type="vis"
              />
              <DetailCard
                icon={"akar-icons:cloud"}
                detail={curWeather.clouds}
                type="cloud"
              />
              <DetailCard
                icon={"bi:wind"}
                detail={curWeather.wind}
                type="wind"
              />
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default WeatherCheckResults;
