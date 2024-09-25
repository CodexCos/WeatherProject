import React, { useState, useEffect, createContext } from "react";
import DisplayData from "./displayData";
import SearchInput from "./searchInput";
import axios from "axios";
import ClearImg from "../images/Clear.png";
import CloudsImg from "../images/Clouds.png";
import RainImg from "../images/Rain.png";
import Drizzle from "../images/Drizzle.png";
import Snow from "../images/Snow.png";

export const Context = createContext();

function WeatherApp() {
  const weatherStatus = {
    clear: ClearImg,
    cloud: CloudsImg,
    rain: RainImg,
    drizzle: Drizzle,
    snow: Snow,
  };

  

  const [name, setName] = useState("");

  const [data, setData] = React.useState({
    celcius: "25",
    city: "Kathmandu",
    country: "NP", 
    humidity: "69",
    wind: "5.14",
    image: weatherStatus.clear,
  });
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!name) return;
      setError("");
      try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d63e6c73f28bf53833981fdf032557d5&units=metric`;
        const res = await axios.get(URL);
        setData({
          celcius: res.data.main.temp,
          city: res.data.name,
          country: res.data.sys.country,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed,
          image: weatherStatus[res.data.weather[0].main.toLowerCase()],
        });
      } catch (err) {
        setError("City not found");
        console.log(err.message);
      }
    };
    fetchWeatherData();
  }, [toggle]);

  function handleButtonPress(e) {
    if (e.key === "Enter") {
      setToggle(!toggle);
    }
  }

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-600">
      <Context.Provider
        value={{
          setName,
          onClick: handleClick,
          onPress: handleButtonPress,
          error,
          data,
        }}
      >
        <h1 className="text-white text-3xl font-bold mb-6">Weather App</h1>

        <SearchInput />
        <DisplayData />
      </Context.Provider>
    </div>
  );
}

export default WeatherApp;
