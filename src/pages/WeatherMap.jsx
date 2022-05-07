import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../assets/styles/leaflet-openweathermap.css";
import "../utils/leaflet-openweathermap";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_KEY;

const MapComponents = () => {
  const map = useMap();

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

    const overlayMaps = {
      City: city,
      Clouds: clouds,
      Rain: rain,
      "Wind speed": wind,
    };

    const baseMaps = { "OSM Standard": osm };
    // const map = L.map("map", { layers: [osm] });

    const layersControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
  }, [map]);

  return null;
};

const WeatherMap = ({ results }) => {
  const [center, setCenter] = useState([0, 0]);
  const [zoom, setZoom] = useState(3);
  const mapRef = useRef(null);

  useEffect(() => {
    if (results.lat === 0 && results.lon === 0) return;
    // mapRef.current.setView()
    setCenter([results.lat, results.lon]);
    setZoom(10);
  }, [results]);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      ref={mapRef}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapComponents />
    </MapContainer>
  );
};

export default WeatherMap;
