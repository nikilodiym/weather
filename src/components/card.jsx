import React, { useEffect, useState } from "react";
import style from "../style/cart.module.css";
import { Pagination, PaginationItem } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Card = () => {
  const [notebookData, setNotebookData] = useState([]);
  useEffect(() => {
    async function fetchDataForCard() {
      try {
        const cardData = await fetch("http://localhost:4040/notebook");
        const response = await cardData.json();
        console.log(cardData);
        setNotebookData(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataForCard();
  }, []);
  return (
    <div className={style.cartContainer}>
      <div className={style.cartContainer}>
        {notebookData?.map((goodItem) => {
          return (
            <div className={style.cartBox} key={goodItem.id}>
              <img src={goodItem.img} alt="demo" />
              <h1 className={style.cartBoxTitle}>{goodItem.name}</h1>
              <p className={style.description}>
                Процесор: {goodItem.processor}
              </p>
              <p className={style.description}>
                Обʼєм памяті: {goodItem.storage}
              </p>
              <button>Купити {goodItem.price} USD </button>
            </div>
          );
        })}
      </div>

      <Pagination
        count={Math.round(notebookData.length / 6)}
        color="secondary"
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIos, next: ArrowForwardIos }}
            {...item}
          />
        )}
      />
    </div>
  );
};

export default Card;
