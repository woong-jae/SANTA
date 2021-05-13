import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CardListPage.scss";
import Search from "../../common/Search";
import { Button } from "@material-ui/core";
import { AiOutlineUser } from "react-icons/ai";

class CardListHeader extends Component {
  render() {
    return (
      <header className="cardList-header">
        <Search />
        <div>
          <Link to="/myPage">
            <Button variant="contained" className="header-btn" id="myPage-btn">
              <AiOutlineUser className="btn-icon" />
            </Button>
          </Link>
          <Button variant="contained" className="header-btn" id="signIn-btn">
            sign in
          </Button>
        </div>
      </header>
    );
  }
}

export default CardListHeader;
