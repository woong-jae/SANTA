import React, { Component } from "react";
import "./Sections/CardListPage.scss";
import SelectDate from "../common/SelectDate";

class CardListPage extends Component {
  render() {
    return (
      <div className="cardList">
        <header className="cardList-header"></header>
        <section className="cardList-section"></section>
      </div>
    );
  }
}

export default CardListPage;
