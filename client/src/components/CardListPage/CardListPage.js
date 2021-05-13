import React, { Component } from "react";
import "./Sections/CardListPage.scss";
import CardListHeader from "./Sections/CardListHeader";
import CardListBody from "./Sections/CardListBody";
import CardListFooter from "./Sections/CardListFooter";

class CardListPage extends Component {
  render() {
    return (
      <div className="cardList">
        <CardListHeader />
        <CardListBody />
        <CardListFooter />
      </div>
    );
  }
}

export default CardListPage;
