import React, { useContext, useState } from "react";
import Wind from "../images/wind.png";
import Humidity from "../images/humidity.png";
import { Context } from "./weatherApp";

function DisplayData() {
  const { data, error } = useContext(Context);
  const [isFaren, setFaren] = useState('celsius');

  return (
    <div className="flex flex-col items-center bg-inherit p-5 mr-10 text-white rounded-lg shadow-lg mt-4">
      {error && <h1 className="text-red-500">{error}</h1>}
      <select
        onChange={(e) => setFaren(e.target.value)}
        className="p-2 rounded-full bg-white text-black"
      >
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
      </select>
      <img src={data.image} alt="Sorry, no picture for this weather" className="w-32 h-32 mb-4" />
      <h1 className="text-5xl font-bold">
        {isFaren === 'celsius' 
          ? `${data.celcius} °C` 
          : `${(data.celcius * 9/5 + 32)} °F`}
      </h1>
      <h2 className="text-lg">
        {data.city}, {data.country}
      </h2>
      <div className="flex mt-4 space-x-6">
        <div className="flex items-center">
          <img src={Humidity} alt="Humidity" className="w-8 h-8 mr-2" />
          <h4>Humidity: {data.humidity} %</h4>
        </div>
        <div className="flex items-center">
          <img src={Wind} alt="Wind" className="w-8 h-8 mr-2" />
          <h4>Wind Speed: {data.wind} m/s</h4>
        </div>
      </div>
    </div>
  );
}

export default DisplayData;
