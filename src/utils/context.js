import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL, WEATHER_PROFILE } from "./db_prifile";
import { formateTime } from "./formatDate";

const AppContext = createContext();

export const useAPP = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState([]);
  const [weatherState, setWeather] = useState([]);
  const [weatherIndex, setWeatherIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [time, setTime] = useState("");
  // console.log(weatherIndex);
  console.log(isDarkMode);
  const get_data = async (...objValue) => {
    const searchValue = objValue[0] || "ukraine";

    try {
      const response = await fetch(
        `${BASE_URL.apiNews}/${BASE_URL.path}?q=${searchValue}&${BASE_URL.apiKey}`
      );
      const data = await response.json();
      setGlobalState(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getWeatherData = async (...objValue) => {
    const searchValue = objValue[0] || "auto:ip";
    try {
      const response = await fetch(
        `${WEATHER_PROFILE.start_url}${objValue[1]}?${WEATHER_PROFILE.api_key}&q=${searchValue}&aqi=yes&lang=uk&${objValue[2]}`
      );
      const data = await response.json();
      setWeather(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateWeatherState = (newIndex) => {
    setWeatherIndex(newIndex);
  };

  function toogleTheme() {
    setIsDarkMode(!isDarkMode);
  }
  const localTime = formateTime(new Date());
  useEffect(() => {
    localTime >= "19:15" ? setIsDarkMode(true) : setIsDarkMode(false);
    setTime(localTime);
  }, [time]);

  return (
    <AppContext.Provider
      value={{
        globalState,
        get_data,
        weatherState,
        getWeatherData,
        weatherIndex,
        updateWeatherState,
        isDarkMode,
        toogleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
