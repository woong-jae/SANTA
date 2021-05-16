import React, { Component } from "react";
import { Link } from "react-router-dom";
import SelectDate from "./SelectDate";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import "./Sections/Search.scss";

class Search extends Component {
  render() {
    return (
      <form>
        <TextField label="산/지역명" className="header-input"></TextField>
        <SelectDate className="header-input"></SelectDate>
        <TextField
          className="header-input"
          label="동행 인원"
          type="number"
          defaultValue="0"
          inputProps={{ min: 0 }}
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
    );
  }
}

export default Search;
