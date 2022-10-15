import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
export default function Map() {
  const [result, setResult] = useState([]);
  const [center, setCenter] = useState({ lat: 24, lng: 20 });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios({
      url: "http://jsonplaceholder.typicode.com/users",
      method: "GET",
    }).then((response) => {
      setResult(response.data);
    });
  };

  const iconMarkup = renderToStaticMarkup(<LocationOnIcon size="large" />);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  return (
    <div className="leaflet-test">
      <MapContainer
        center={center}
        style={{ borderRadius: "12px" }}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=pQDQVl4w7MbNhhCJseEU"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {result.map((e, i) => (
          <Marker
            key={i}
            position={[e.address.geo.lat, e.address.geo.lng]}
            icon={customMarkerIcon}
          >
            <Popup>
              {e.company.name} <br /> {e.company.bs} <br />{" "}
              {e.company.catchPhrase}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
