import React, { Component } from "react";
import "./CardListPage.scss";
import { Button } from "@material-ui/core";

class CardListFooter extends Component {
  render() {
    return (
      <footer className="cardList-footer">
        <Button variant="contained" className="footer-btn">
          모임 만들기
        </Button>
      </footer>
    );
  }
}

export default CardListFooter;
