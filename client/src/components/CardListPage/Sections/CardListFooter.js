import React, { Component } from "react";
import CreateCard from "../CreateCard/CreateCard";
import "./CardListPage.scss";

class CardListFooter extends Component {
  render() {
    return (
      <footer className="cardList-footer">
        <CreateCard />
      </footer>
    );
  }
}

export default CardListFooter;
