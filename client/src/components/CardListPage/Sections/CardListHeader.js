import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CardListPage.scss";

import { Button } from "@material-ui/core";
import { AiOutlineUser } from "react-icons/ai";
import SelectDate from "../../common/SelectDate";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

class CardListHeader extends Component {
  render() {
    return (
      <header className="cardList-header">
        <form>
          <TextField
            required
            label="산/지역명"
            className="header-input"
          ></TextField>
          <SelectDate></SelectDate>
          <TextField
            required
            className="header-input"
            label="동행 인원"
            type="number"
            defaultValue="0"
            InputLabelProps={{ shrink: true }}
          ></TextField>
          <Link to="/list">
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              id="search-btn"
            ></Button>
          </Link>
        </form>
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
