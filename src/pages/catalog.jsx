import React from "react";
import s from "../style/catalog.module.css";
import Card from "../components/card";
import Baner from "../components/baner";
import Footer from "../components/footer";
const Catalog = () => {
  return (
    <div className={s.catalogContainer}>
      {/* <Baner /> */}
      <Card />
      {/* <Baner /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Catalog;
