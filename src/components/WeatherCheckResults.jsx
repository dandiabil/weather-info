import React from "react";
import LoadingGif from "../assets/images/Ajux_loader.gif";
import { convertToPascalCase, convertToUTCDate } from "../utils/utils";
import { Icon } from "@iconify/react";

const DetailCard = ({ icon, detail, type }) => {
  const temperature = (
    <>
      <Icon icon={icon} className="text-5xl mx-auto mb-3 md:mb-0" />
      <div className="md:w-[80%]">
        <div className="flex justify-between md:justify-start">
          <p className="md:w-[150px]">Temperature:</p>
          <p>{detail.temp}°C</p>
        </div>
        <div className="flex justify-between md:justify-start">
          <p className="md:w-[150px]">Temperature Min:</p>
          <p>{detail.temp_min}°C</p>
        </div>
        <div className="flex justify-between md:justify-start">
          <p className="md:w-[150px]">Temperature Max:</p>
          <p>{detail.temp_max}°C</p>
        </div>
        <div className="flex justify-between md:justify-start">
          <p className="md:w-[150px]">Pressure:</p>
          <p>{detail.pressure}hPa</p>
        </div>
        <div className="flex justify-between md:justify-start">
          <p className="md:w-[150px]">Humidity:</p>
          <p>{detail.humidity}%</p>
        </div>
      </div>
    </>
  );

  const visibility = (
    <>
      <Icon icon={icon} className="text-5xl mx-auto mb-3 md:mb-0" />
      <div className="flex justify-between md:justify-start md:w-[80%]">
        <p className="md:w-[150px]">Visibility:</p>
        <p>{detail}km</p>
      </div>
    </>
  );

  const clouds = (
    <>
      <Icon icon={icon} className="text-5xl mx-auto mb-3 md:mb-0" />
      <div className="flex justify-between md:justify-start md:w-[80%]">
        <p className="md:w-[150px]">Cloudiness:</p>
        <p>{detail.all}%</p>
      </div>
    </>
  );

  const wind = (
    <>
      <Icon icon={icon} className="text-5xl mx-auto mb-3 md:mb-0" />
      <div className="md:w-[80%]">
        <div className="flex justify-between md:justify-start">
          <p className="md:w-[150px]">Wind Speed:</p>
          <p>{detail.speed}m/s</p>
        </div>
        <div className="flex justify-between md:justify-start">
          <p className="md:w-[150px]">Wind Direction:</p>
          <p>{detail.deg}deg</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="hover:cursor-pointer h-auto min-h-20 flex flex-col justify-center px-4 py-3 rounded card__details mb-3">
      <div className="md:flex justify-start items-center gap-5 font-semibold">
        {type === "temp" ? temperature : null}
        {type === "vis" ? visibility : null}
        {type === "cloud" ? clouds : null}
        {type === "wind" ? wind : null}
      </div>
    </div>
  );
};

const WeatherCheckResults = ({ results }) => {
  return (
    <div className="cursor-default">
      {!results ? (
        <div className="rounded w-full glass-background">
          <img
            src={LoadingGif}
            alt="loading-animation"
            className="mx-auto w-[200px]"
          />
        </div>
      ) : (
        <div className="py-3 font-overpass lg:flex items-start justify-between gap-5">
          <section className="mb-5">
            <p className="text-3xl md:text-4xl font-semibold">
              {!results
                ? "Location Name"
                : `${results?.name}, ${results?.sys.country}`}
            </p>
            <p className="italic">
              {!results
                ? "Coordinate: 0, 0"
                : `Coordinate : ${results?.coord.lat}, ${results?.coord.lon}`}
            </p>
            <p className="text-md md:text-lg font-semibold">
              {!results
                ? ""
                : convertToUTCDate(results?.dt) +
                  ", " +
                  convertToUTCDate(results?.dt, "time")}
            </p>
            <div className="flex justify-start items-center mb-5">
              <figure className="w-fit lg:w-full mx-auto">
                <img
                  src={
                    !results
                      ? ""
                      : `http://openweathermap.org/img/wn/${results?.weather[0].icon}@2x.png`
                  }
                  alt="weather-icon"
                  className={
                    !results ? "opacity-0 h-[100px] w-[100px]" : "lg:w-full"
                  }
                />
              </figure>
              <div className="w-[80%]">
                <p className="text-4xl md:text-5xl font-semibold">
                  {!results ? "--°C" : `${results?.main.temp}°C`}
                </p>
              </div>
            </div>
            <div className="mb-5">
              <p className="italic md:text-lg">
                {!results ? "Weather Condition" : results?.weather[0].main}
              </p>
              <p className="text-lg md:text-xl font-semibold">
                {!results
                  ? "Weather Description"
                  : convertToPascalCase(results?.weather[0].description)}
              </p>
            </div>
          </section>

          <section className="lg:w-[50%]">
            <DetailCard
              icon={"fluent:temperature-24-regular"}
              detail={results?.main}
              type="temp"
            />
            <DetailCard
              icon={"ic:outline-visibility"}
              detail={results?.visibility}
              type="vis"
            />
            <DetailCard
              icon={"akar-icons:cloud"}
              detail={results?.clouds}
              type="cloud"
            />
            <DetailCard icon={"bi:wind"} detail={results?.wind} type="wind" />
          </section>
        </div>
      )}
    </div>
  );
};

export default WeatherCheckResults;
