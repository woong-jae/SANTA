import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

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
    fontFamily: "Pacifico",
    fontSize: 150,
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
  const [isCorrectKeyword, setIsCorrectKeyword] = useState(true);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchState.mountain !== "" && isCorrectKeyword) {
      history.push({
        pathname: "/list",
        search: `?mountain=${searchState.mountain}&date=${searchState.date}&peopleNum=${searchState.peopleNum}`,
        state: { mountain: searchState.mountain, date: searchState.date, peopleNum: searchState.peopleNum, correctKeyword: isCorrectKeyword },
      });
    } else if(searchState.mountain === "" && isCorrectKeyword) {
      history.push({
        pathname: "/list",
        state: { mountain: searchState.mountain, date: searchState.date, peopleNum: searchState.peopleNum, correctKeyword: true },
      });
    } 
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

  const getKeyword = (value) => {
    setIsCorrectKeyword(value);
  }

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 100);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="landing-main">
      <div className="landing-body">
        <Typography
          id="landing-logo"
          className={classes.title}
          variant="h1"
          align="center"
        >
          Santa
        </Typography>
        <div className="userinput">
          {windowSize.width >= 700 ? (
            <form className="input-form" onSubmit={handleSubmit}>
              <SearchMountain
                id="search-mountain"
                getMountainValue={getMountainValue}
                getKeyword={getKeyword}
              />
              <SelectDate id="search-date" getDateValue={getDateValue} />
              <InputPeople id="search-peopleNum" handleChange={handleChange} />
              <SearchBtn />
            </form>
          ) : (
            <form className="input-form" onSubmit={handleSubmit}>
              <SearchMountain
                id="search-mountain"
                getMountainValue={getMountainValue}
              />
              <SelectDate id="search-date" getDateValue={getDateValue} />
              <InputPeople id="search-peopleNum" handleChange={handleChange} />
              <SearchBtn />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
