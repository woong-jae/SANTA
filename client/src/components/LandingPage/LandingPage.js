import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { debounce } from "lodash";

import { Typography, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";

import InputMountain from "../common/InputMountain";
import InputPeople from "../common/InputPeople";
import SearchBtn from "../common/SearchBtn";
import SelectDate from "../common/SelectDate";
import "./Sections/LandingPage.scss";
import "../common/Sections/Search.scss";

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
      ("00" + currentDate.getDate()).slice(-2),
    peopleNum: 1,
  };
  const [searchState, setSearchState] = React.useState(initialState);
  const [isCorrectKeyword, setIsCorrectKeyword] = useState(false);
  const [snack, setSnack] = useState(false);
  const history = useHistory();

  const snackClose = () => {
    setSnack(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isCorrectKeyword) {
      setSnack(true);
    }
    if (searchState.mountain !== "" && isCorrectKeyword) {
      history.push({
        pathname: "/list/" + searchState.mountain + "/" + searchState.date + "/" + searchState.peopleNum,
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
        ("00" + value.getDate()).slice(-2),
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
  };

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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.shiftKey === false) {
      event.preventDefault();
    }
  }

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
            <div>
              <form className="input-form" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                <InputMountain
                  id="search-mountain"
                  getMountainValue={getMountainValue}
                  getKeyword={getKeyword}
                />
                <SelectDate
                  id="search-date"
                  getDateValue={getDateValue}
                  value={new Date()}
                />
                <InputPeople
                  id="search-peopleNum"
                  handleChange={handleChange}
                />
                <SearchBtn />
              </form>
              <Snackbar
                open={snack}
                autoHideDuration={6000}
                onClose={snackClose}
              >
                <Alert onClose={snackClose} severity="error" variant="filled">
                  가고 싶은 산을 선택해주세요!
                </Alert>
              </Snackbar>
            </div>
          ) : (
            <div>
              <form className="input-form" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                <InputMountain
                  id="search-mountain"
                  getMountainValue={getMountainValue}
                  getKeyword={getKeyword}
                />
                <SelectDate
                  id="search-date"
                  getDateValue={getDateValue}
                  value={new Date()}
                />
                <InputPeople
                  id="search-peopleNum"
                  handleChange={handleChange}
                />
                <SearchBtn />
              </form>
              <Snackbar
                open={snack}
                autoHideDuration={6000}
                onClose={snackClose}
              >
                <Alert onClose={snackClose} severity="error" variant="filled">
                  가고 싶은 산을 선택해주세요!
                </Alert>
              </Snackbar>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
