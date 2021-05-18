import React from "react";
import { Link } from "react-router-dom";
import "../common/Sections/Search.scss";
import InputMountain from "../common/InputMountain";
import InputPeople from "../common/InputPeople";
import SearchBtn from "../common/SearchBtn";
import SelectDate from "../common/SelectDate";
import "./Sections/LandingPage.scss";
import { Typography } from "@material-ui/core";

const LandingPage = () => {
  const currentDate = new Date();
  const initialState = {
    mountain: "",
    date:
      currentDate.getFullYear() +
      "/" +
      Number(currentDate.getMonth() + 1) +
      "/" +
      currentDate.getDate(),
    peopleNum: 1,
  };
  const [searchState, setSearchState] = React.useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    document.location.pathname = "/list";
    setSearchState(initialState);
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    setSearchState({
      ...searchState,
      [name]: value,
    });
  };

  const getDateValue = (value) => {
    setSearchState({
      ...searchState,
      date:
        value.getFullYear() +
        "/" +
        Number(value.getMonth() + 1) +
        "/" +
        value.getDate(),
    });
  };

  return (
    <div className="landing_body">
      <Typography variant="h1" align="center">
        Santa
      </Typography>
      <div className="userinput">
        <form onSubmit={handleSubmit}>
          <InputMountain id="search-mountain" handleChange={handleChange} />
          <SelectDate id="search-date" getDateValue={getDateValue} />
          <InputPeople id="search-peopleNum" handleChange={handleChange} />
          <SearchBtn />
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
