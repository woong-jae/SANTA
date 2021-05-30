import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { AiOutlineUser } from "react-icons/ai";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Popover from "@material-ui/core/Popover";
import SearchIcon from "@material-ui/icons/Search";
import ExpandLess from "@material-ui/icons/ExpandLess";

import SignPage from "../../SignPage/SignPage";
import SearchMountain from "../../../api/searchMountain";
import InputPeople from "../../common/InputPeople";
import SearchBtn from "../../common/SearchBtn";
import SelectDate from "../../common/SelectDate";
import "./CardListPage.scss";
import "../../common/Sections/Search.scss";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Pacifico",
    fontSize: 40,
  },
}));

const CardListHeader = (props) => {
  const dispatch = useDispatch();
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
  const [searchState, setSearchState] = useState(initialState);
  const history = useHistory();

  const handleSignOut = () => {
    dispatch({ type: "LOGOUT" });
    document.location.replace("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchState.mountain !== "") {
      history.push({
        pathname: "/list",
        search: `?mountain=${searchState.mountain}&date=${searchState.date}&peopleNum=${searchState.peopleNum}`,
        state: {
          mountain: searchState.mountain,
          date: searchState.date,
          peopleNum: searchState.peopleNum,
        },
      });
    } else
      history.push({
        pathname: "/list",
        state: {
          mountain: searchState.mountain,
          date: searchState.date,
          peopleNum: searchState.peopleNum,
        },
      });
    document.location.reload(true);
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

  // 해상도 1000px 미만 시 반응형 적용
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

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "search-popover" : undefined;

  return (
    <header className="cardList-header">
      <Link to="/">
        <Typography
          className={classes.title}
          variant="h3"
          align="center"
          id="header-logo"
        >
          Santa
        </Typography>{" "}
      </Link>
      {windowSize.width >= 1000 ? (
        <form onSubmit={handleSubmit} className="input-form">
          <div id="search-mountain" className="search-item">
            <SearchMountain
              id="search-mountain"
              getMountainValue={getMountainValue}
            />
          </div>
          <div id="search-date" className="search-item">
            <SelectDate name="date" getDateValue={getDateValue} />
          </div>
          <div id="search-peopleNum" className="search-item">
            <InputPeople name="peopleNum" handleChange={handleChange} />
          </div>
          <SearchBtn />
        </form>
      ) : (
        <div className="input-form">
          <Button
            id="search-btn"
            variant="contained"
            startIcon={<SearchIcon />}
            onClick={handleClick}
          ></Button>
          <Popover
            className="btn-bar"
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ textAlign: "center", paddingBottom: "13px" }}
            >
              <Button onClick={handleClose}>
                <ExpandLess />
              </Button>
              <div className="input-form">
                <div
                  id="search-mountain"
                  className="search-item"
                  style={{ marginLeft: "30px" }}
                >
                  <SearchMountain
                    id="search-mountain"
                    getMountainValue={getMountainValue}
                  />
                </div>
                <div id="search-date" className="search-item">
                  <SelectDate name="date" getDateValue={getDateValue} />
                </div>
                <div id="search-peopleNum" className="search-item">
                  <InputPeople name="peopleNum" handleChange={handleChange} />
                </div>
              </div>
              <SearchBtn className="responsive-btn" />
            </form>
          </Popover>
        </div>
      )}
      {props.user ? (
        <div className="header-user">
          <Link to="/myPage">
            {windowSize.width >= 1000 ? (
              <Button
                startIcon={<AiOutlineUser />}
                size="small"
                variant="text"
                className="header-btn"
                id="myPage-btn"
              >
                {props.user?.result?.nickname}
              </Button>
            ) : (
              <Button
                size="small"
                variant="text"
                className="header-btn"
                id="myPage-btn"
              >
                <AiOutlineUser />
              </Button>
            )}
          </Link>
          <Button
            variant="contained"
            className="header-btn"
            id="exit-btn"
            onClick={handleSignOut}
          >
            <ExitToAppIcon></ExitToAppIcon>
            {/* sign out */}
          </Button>
        </div>
      ) : (
        <div className="header-user">
          <SignPage />
        </div>
      )}
    </header>
  );
};

export default CardListHeader;
