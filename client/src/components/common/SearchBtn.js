import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBtn = () => {
  return (
    <Link to="/list">
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        id="search-btn"
      ></Button>
    </Link>
  );
};

export default SearchBtn;
