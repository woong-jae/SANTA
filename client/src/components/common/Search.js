import React, { Component } from "react";

import InputMountain from "../../common/InputMountain";
import InputPeople from "../../common/InputPeople";
import SearchBtn from "../../common/SearchBtn";
import SelectDate from "../../common/SelectDate";
import "./Sections/Search.scss";

class Search extends Component {
  render() {
    return (
      <form>
        <InputMountain id="search-mountain" />
        <SelectDate id="search-date" />
        <InputPeople id="search-peopleNum" />
        <SearchBtn type="submit" />
      </form>
    );
  }
}

export default Search;
