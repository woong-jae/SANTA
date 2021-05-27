import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AiOutlineUser } from "react-icons/ai";
import { Button, Divider } from "@material-ui/core";
import { Typography } from "@material-ui/core";

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
  const handleSignOut = () => {
    dispatch({ type: "LOGOUT" });
    document.location.replace("/");
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

      {props.user ? (
        <div className="header-user">
          <Link to="/myPage">
            <Button variant="contained" className="header-btn" id="myPage-btn">
              {props.user?.result?.nickname}
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
        </div>
      ) : (
        <div className="header-user">
          <SigninPage />
        </div>
      )}
    </header>
  );
};

export default CardListHeader;
