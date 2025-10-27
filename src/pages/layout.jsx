import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import { useAPP } from "../utils/context";
import { dark_mode, light_mode } from "../utils/theme_style";

const Layout = () => {
  const { isDarkMode } = useAPP();
  console.log(isDarkMode);
  const currentTheme = isDarkMode ? dark_mode : light_mode;

  return (
    <div style={{ ...currentTheme.app_box, minHeight: "100vh" }}>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
