import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";

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
  const [nick, setNick] = useState(props.user.result.nickname);
  const handleSignOut = () => {
    dispatch({ type: "LOGOUT" });
    document.location.reload(true);
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

  return (
    <header className="cardList-header">
      <form onSubmit={handleSubmit} className="header-search">
        <InputMountain
          id="search-mountain"
          name="mountain"
          handleChange={handleChange}
        />
        <SelectDate id="search-date" name="date" getDateValue={getDateValue} />
        <InputPeople
          id="search-peopleNum"
          name="peopleNum"
          handleChange={handleChange}
        />
        <SearchBtn />
      </form>

      <div className="header-user">
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
        ) : (
          <SigninPage />
        )}
      </div>
    </header>
  );
};

export default CardListHeader;
