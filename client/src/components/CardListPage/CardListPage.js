import React from "react";
import "./Sections/CardListPage.scss";
import CardListHeader from "./Sections/CardListHeader";
import CardListBody from "./Sections/CardListBody";

const CardListPage = () => {
  return (
    <div className="cardList">
      <CardListHeader />
      <CardListBody />
    </div>
  );
};

export default CardListPage;
