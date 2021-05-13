import React, { Component } from "react";
import "./Sections/CardListPage.scss";
import CardListHeader from "./Sections/CardListHeader";
import CardListFooter from "./Sections/CardListFooter";

class CardListPage extends Component {
  render() {
    return (
      <div className="cardList">
        <CardListHeader />
        <section className="cardList-body"></section>
        <CardListFooter />
      </div>
    );
  }
}

export default CardListPage;
