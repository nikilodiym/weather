import React from "react";
import s from "../../style/weather_local.module.css";

const DateLocation = (props) => {
  // debugger;
  const { location } = props;
  // console.log(location.localtime);
  if (!location || !location.localtime) {
    return null;
  }

  const localDateTime = new Date(location.localtime);
  const formattedTime = localDateTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  const formattedDate = localDateTime.toLocaleDateString("uk-UA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`${s.local_container} ${s.container}`}>
      <ul className={s.date_box}>
        <li className={s.cityName}>{location.name}</li>
        <li className={s.time}>{formattedTime}</li>
        <li className={s.date}>{formattedDate}</li>
      </ul>
    </div>
  );
};

export default DateLocation;
