import React from "react";

import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBtn = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      startIcon={<SearchIcon />}
      id="search-btn"
    ></Button>
  );
};

export default SearchBtn;
