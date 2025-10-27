import React from "react";
import { NavLink } from "react-router-dom";
import { useAPP } from "../utils/context";
import { dark_mode, light_mode } from "../utils/theme_style";

const Navigation = () => {
  const { isDarkMode } = useAPP();

  function isActivePage() {
    if (isDarkMode) {
      return ({ isActive }) => (isActive ? "active-page_dark" : "");
    }
    return ({ isActive }) => (isActive ? "active-page" : "");
  }
  const currentTheme = isDarkMode ? dark_mode : light_mode;

  return (
    <>
      <NavLink
        className={isActivePage()}
        style={{
          marginLeft: 20,
          textDecoration: "none",
          fontSize: 23,
          color: currentTheme.app_box.color,
        }}
        to="/"
      >
        Main
      </NavLink>
      <NavLink
        className={isActivePage()}
        style={{
          marginLeft: 20,
          textDecoration: "none",
          fontSize: 23,
          color: currentTheme.app_box.color,
        }}
        to="/laptop-catalog"
      >
        Laptop
      </NavLink>
      <NavLink
        className={isActivePage()}
        style={{
          marginLeft: 20,
          textDecoration: "none",
          fontSize: 23,
          color: currentTheme.app_box.color,
        }}
        to="/top-news"
      >
        News
      </NavLink>
      <NavLink
        className={isActivePage()}
        style={{
          marginLeft: 20,
          textDecoration: "none",
          fontSize: 23,
          color: currentTheme.app_box.color,
        }}
        to="/weather"
      >
        Weather
      </NavLink>
    </>
  );
};

export default Navigation;
