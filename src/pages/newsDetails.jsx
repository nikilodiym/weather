import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAPP } from "../utils/context";

const NewsDetails = () => {
  const { get_data, globalState } = useAPP();
  const [detailsNews, setDetailsNews] = useState(null);

  const { title } = useParams();

  const updateNews = async (params) => {
    try {
      const data = await get_data();
      const filteredNews = data.articles.filter(
        (item) => item.title === params
      );

      if (filteredNews.length > 0) {
        setDetailsNews(filteredNews[0]);
      } else {
        console.error(`News with title "${params}" not found.`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateNews(title);
  }, [title]);

  // Перевірка чи існує detailsNews перед використанням його в рендері
  if (!detailsNews) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 style={{marginTop: "50px"}}>{detailsNews.title}</h1>
      <p>{detailsNews.content}</p>
      <img src={detailsNews.urlToImage} alt={detailsNews.title} style={{marginBottom: "50px", marginTop: "50px"}} />
    </div>
  );
};

export default NewsDetails;
