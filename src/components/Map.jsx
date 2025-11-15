import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
  iconSize: [38, 38],
});

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.setView(e.latlng, 13);
    });
  }, [map]);

  return position === null ? null : (
    <Marker icon={userIcon} position={position}>
      <Popup>You are here 📍</Popup>
    </Marker>
  );
}

export default function Map() {
  return (
    <div className="w-full flex justify-center py-10 px-4 bg-[#0B0B0B]">
      <div className="w-full max-w-7xl h-[500px] rounded-2xl overflow-hidden shadow-xl">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <LocationMarker />
        </MapContainer>
      </div>
    </div>
  );
}
