import React, { useEffect, useState } from "react";
import s from "../../style/weather_local.module.css";
import wind_dir from "../../assets/weather/wind_dir.png";
import { useAPP } from "../../utils/context";
import { formateDate } from "../../utils/formatDate";

const Hourly_forecast = () => {
  // Використовуємо контекст для отримання глобального стану погоди
  const { weatherState, weatherIndex } = useAPP();
  if (!weatherState) {
    return null;
  }
  const forecastData = weatherState.forecast?.forecastday[weatherIndex].hour;
  const date = weatherState.forecast?.forecastday[weatherIndex].date;
  // console.log(forecastData);

  // // Стейт для визначення індексу погоди (за замовчуванням - 0)
  // const [index, setIndex] = useState(0);

  // // Отримання годинних прогнозів для обраного дня
  // // const forecastData = weatherState.forecast?.forecastday[index].hour;

  // Функція для форматування часу
  const formattedTime = (time) => {
    return new Date(time).toLocaleTimeString([]);
  };

  // Викликаємо функцію для отримання індексу при монтажі компонента та при зміні індексу
  // useEffect(() => {
  //   const getIndex = async () => {
  //     try {
  //       const result = JSON.parse(localStorage.getItem("id"));
  //       setIndex(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getIndex();
  // }, [index]);

  // Move the conditional rendering block here
  // if (!weatherData) {
  //   return null;
  // }

  return (
    <div
      className={`${s.container} ${s.current_container}`}
      style={{
        height: "auto",
        width: "62vw",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2vw", width: "100%" }}>
        Погодиний прогноз на {date}
      </h1>
      <ul style={{ display: "flex", width: "auto" }}>
        {forecastData?.map((item) => (
          // console.log(item),
          <li
            key={item.date}
            style={{
              width: "10vw",
              backgroundColor: "grey",
              marginRight: "1vw",
              borderRadius: "10px",
              padding: "10px 15px",
            }}
          >
            <p style={{ fontSize: "18px" }}>{formattedTime(item.time)}</p>

            <img
              src={item.condition.icon}
              alt={item.condition.text}
              style={{ width: "6vw" }}
            />

            <p
              style={{
                fontSize: "18px",
                fontWeight: "900",
                marginRight: "2vw",
                marginLeft: "1vw",
              }}
            >
              {Math.round(item.temp_c)}°C
            </p>

            <img
              src={wind_dir}
              alt={item.condition.text}
              style={{ width: "6vw", rotate: `${item.wind_degree}deg` }}
            />

            <p
              style={{
                fontSize: "18px",
                fontWeight: "900",
                marginRight: "2vw",
                marginLeft: "1vw",
              }}
            >
              {Math.round(item.wind_kph)} <br />
              <span style={{ fontWeight: 300, fontSize: "12px" }}>км/год</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hourly_forecast;
