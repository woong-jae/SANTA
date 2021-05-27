import React from "react";
//import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SearchMountain from "../../api/searchMountain";
import InputPeople from "../common/InputPeople";
import SearchBtn from "../common/SearchBtn";
import SelectDate from "../common/SelectDate";
import "./Sections/LandingPage.scss";
import "../common/Sections/Search.scss";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "PermanentMarker",
    fontSize: 200,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const currentDate = new Date();
  const initialState = {
    mountain: "",
    date:
      currentDate.getFullYear() +
      "-" +
      ("00" + (currentDate.getMonth() + 1)).slice(-2) +
      "-" +
      currentDate.getDate(),
    peopleNum: 1,
  };
  const [searchState, setSearchState] = React.useState(initialState);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchState.mountain !== "") {
      history.push({
        pathname: "/list",
        search: `?mountain=${searchState.mountain}&date=${searchState.date}`,
        state: { mountain: searchState.mountain, date: searchState.date },
      });
    } else
      history.push({
        pathname: "/list",
        state: { mountain: searchState.mountain, date: searchState.date },
      });
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
        "-" +
        ("00" + (value.getMonth() + 1)).slice(-2) +
        "-" +
        value.getDate(),
    });
  };

  const getMountainValue = (value) => {
    setSearchState({
      ...searchState,
      mountain: value,
    });
  };

  return (
    <div className="landing_body">
      <Typography className={classes.title} variant="h1" align="center">
        Santa
      </Typography>
      <div className="userinput">
        <form className="input-form" onSubmit={handleSubmit}>
          <SearchMountain
            id="search-mountain"
            getMountainValue={getMountainValue}
          />
          <SelectDate id="search-date" getDateValue={getDateValue} />
          <InputPeople id="search-peopleNum" handleChange={handleChange} />
          <SearchBtn />
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
