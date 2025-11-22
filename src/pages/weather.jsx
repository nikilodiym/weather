import React, { useEffect, useState } from "react";
import { useAPP } from "../utils/context";
import { WEATHER_PROFILE } from "../utils/db_prifile";
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
    <div className="weather-page">
      <div className="weather-shell">
        <div className="weather-hero">
          <div className="hero-copy">
            <p className="hero-kicker">Живий прогноз</p>
            <h1 className="hero-title">
              Свіжа погода з атмосферним виглядом
            </h1>
            <p className="hero-subtitle">
              Швидкий пошук міст, щогодинні дані та 5-денний прогноз у темній
              обгортці.
            </p>
          </div>
          <form onSubmit={onFormSubmit} className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Введи місто, наприклад: Lviv"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="search-btn">Знайти</button>
          </form>
        </div>

        <div className="forecast_container forecast-row">
          <DateLocation location={weather.location} />
          <CurrentForecast current={weather.current} />
        </div>

        <div className="forecast_container forecast-row secondary">
          <Forecast />
          <Hourly_forecast />
        </div>
      </div>
    </div>
  );
};

export default Weather;
