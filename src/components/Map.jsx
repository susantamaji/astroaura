import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";


export default function Map() {
  return (
    <div className="w-full flex justify-center py-10 px-4 bg-[#0B0B0B]">
      <div className="w-full max-w-7xl h-[500px] rounded-2xl overflow-hidden shadow-xl">
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7003.413271121834!2d88.355271!3d22.57958!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM0JzQ2LjUiTiA4OMKwMjEnMjguMyJF!5e1!3m2!1sen!2sin!4v1763797406202!5m2!1sen!2sin" className="w-full h-[400px]"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
