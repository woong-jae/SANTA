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
        <form>
          <InputMountain id="search-mountain" />
          <SelectDate id="search-date" getDateValue={getDateValue} />
          <InputPeople id="search-peopleNum" />
          <Link to="/list">
            <SearchBtn type="submit" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
