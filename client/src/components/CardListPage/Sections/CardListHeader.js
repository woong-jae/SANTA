import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { Link, useHistory } from "react-router-dom";
<<<<<<< HEAD
import { useDispatch } from "react-redux";

import { AiOutlineUser } from "react-icons/ai";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
=======
import { Button, Typography } from "@material-ui/core";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
>>>>>>> 278df75692015073df863b8279958a52a7eb3d36

import SigninPage from "../../SignPage/SignPage";
import InputMountain from "../../common/InputMountain";
import InputPeople from "../../common/InputPeople";
import SearchBtn from "../../common/SearchBtn";
import SelectDate from "../../common/SelectDate";
import "./CardListPage.scss";
import "../../common/Sections/Search.scss";

const CardListHeader = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
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
  const [searchState, setSearchState] = useState(initialState);
  const [nick, setNick] = useState(props.user?.result?.nickname);
  const handleSignOut = () => {
    dispatch({ type: "LOGOUT" });
<<<<<<< HEAD
    document.location.reload(true);
=======
    document.location.replace("/");
>>>>>>> 278df75692015073df863b8279958a52a7eb3d36
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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

  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight
  // });

  // const handleResize = debounce(() => {
  //   setWindowSize({
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   });
  // }, 1000);

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => { // cleanup 
  //     window.removeEventListener('resize', handleResize);
  //   }
  // }, []);

  return (
    <header className="cardList-header">
      <Typography variant="h3" align="center" id="header-logo">
        Santa
      </Typography>
      <form onSubmit={handleSubmit} className="input-form">
        <div id="search-mountain" className="search-item">
          <InputMountain name="mountain" handleChange={handleChange} />
        </div>
        <div id="search-date" className="search-item">
          <SelectDate name="date" getDateValue={getDateValue} />
        </div>
        <div id="search-peopleNum" className="search-item">
          <InputPeople name="peopleNum" handleChange={handleChange} />
        </div>
        <SearchBtn />
      </form>

      <div className="header-user">
<<<<<<< HEAD
        {props.user && (
          <Link to="/myPage">
            <Button variant="contained" className="header-btn" id="myPage-btn">
              <AiOutlineUser className="btn-icon" />
            </Button>
          </Link>
        )}
        {props.user ? (
          <Button
            variant="contained"
            className="header-btn"
            onClick={handleSignOut}
          >
            sign out
          </Button>
=======
        {props.user ? (
          <>
            <Link to="/myPage">
              <Button
                variant="contained"
                className="header-btn"
                id="myPage-btn"
              >
                {nick}
                {/* <AiOutlineUser className="btn-icon" /> */}
              </Button>
            </Link>
            <Button
              variant="contained"
              className="header-btn"
              onClick={handleSignOut}
            >
              sign out
            </Button>
          </>
>>>>>>> 278df75692015073df863b8279958a52a7eb3d36
        ) : (
          <SigninPage />
        )}
      </div>
    </header>
  );
};

export default CardListHeader;
