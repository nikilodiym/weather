import React, { useEffect, useState } from "react";
import { useAPP } from "../utils/context";
import { WEATHER_PROFILE } from "../utils/db_prifile";
import s from "../style/news.module.css";
import DateLocation from "../components/weather/date_location";
import "../App.css";
import CurrentForecast from "../components/weather/current_forecast";
import Forecast from "../components/weather/forecast";
import Hourly_forecast from "../components/weather/hourly_forecast";

const Weather = () => {
  // debugger;
  const { weatherState, getWeatherData } = useAPP();
  const [weather, setWeather] = useState(weatherState);
  // const [forecast, setForecast] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // const fetchWeatherData = async () => {
  //   try {
  //     const result = await getWeatherData(inputValue, WEATHER_PROFILE.path);
  //     setWeather(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const forecastData = async () => {
    try {
      const result = await getWeatherData(
        inputValue,
        WEATHER_PROFILE.forecast_path,
        "days=5&aqi=no&alerts=no"
      );
      setWeather(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchWeatherData();
    forecastData();
  }, []);

  // Використовуємо useEffect для слідкування за змінами в forecast
  // useEffect(() => {
  //   setForecast(weatherState.forecast);
  // }, [weatherState.forecast]);

  // console.log(forecast);
  // console.log(weather.location);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    forecastData();
  }

  return (
    <div className="main_container">
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className={s.searchInput}
          placeholder="What you want?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button>Знайти</button>
      </form>
      <div
        style={{ margin: "0, auto", marginTop: "38px" }}
        className="forecast_container"
      >
        <DateLocation location={weather.location} />
        <CurrentForecast current={weather.current} />
      </div>
      <div
        style={{ margin: "0, auto", marginTop: "28px" }}
        className="forecast_container"
      >
        <Forecast />
        <Hourly_forecast />
      </div>
    </div>
  );
};

export default Weather;
