import React, { useEffect, useRef, useState } from 'react'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../assets/styles/leaflet-openweathermap.css";
import "../components/leaflet-openweathermap";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_KEY;

const WeatherMap = () => {
  const [leafletMap, setLeafletMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const osm = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors</a>',
      }
    );
    const clouds = L.OWM.clouds({
      showLegend: false,
      opacity: 0.5,
      appId: WEATHER_API_KEY,
    });
    const rain = L.OWM.rainClassic({ appId: WEATHER_API_KEY });
    const wind = L.OWM.wind({ appId: WEATHER_API_KEY });
    const city = L.OWM.current({ intervall: 60, appId: WEATHER_API_KEY });
    const map = L.map("map", { layers: [osm] });
    const overlayMaps = {
      City: city,
      Clouds: clouds,
      Rain: rain,
      "Wind speed": wind,
    };
    const baseMaps = { "OSM Standard": osm };
    L.control.layers(baseMaps, overlayMaps).addTo(map);
    setLeafletMap(map);
  }, []);

  // useEffect(() => {
  //   if (isForecastValid(addressContext.latLng)) {
  //     leafletMap.setView(
  //       [addressContext.latLng.lat, addressContext.latLng.lon],
  //       10
  //     );
  //   }
  // }, [addressContext.latLng, leafletMap]);

  return (
    <div className="bg-white">
      <div ref={mapRef} id="map" className="p-2"></div>
    </div>
  )
}

export default WeatherMap