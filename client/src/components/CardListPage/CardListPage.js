import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Sections/CardListPage.scss";
import { AiOutlineUser } from "react-icons/ai";
import SelectDate from "../common/SelectDate";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

class CardListPage extends Component {
  render() {
    return (
      <div className="cardList">
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
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              id="input-btn"
            ></Button>
          </form>
          <div>
            <Link to="/myPage">
              <Button
                variant="contained"
                className="header-btn"
                id="myPage-btn"
              >
                <AiOutlineUser className="btn-icon" />
              </Button>
            </Link>
            <Button variant="contained" className="header-btn" id="signIn-btn">
              sign in
            </Button>
          </div>
        </header>
        <section className="cardList-body"></section>
      </div>
    );
  }
}

export default CardListPage;
