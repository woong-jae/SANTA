import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { AiOutlineUser } from "react-icons/ai";
import {
  Button,
  Typography,
  Tooltip,
  Popover,
  Zoom,
  Snackbar,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import ExpandLess from "@material-ui/icons/ExpandLess";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import { Alert } from "@material-ui/lab";

import SignPage from "../../SignPage/SignPage";
import InputMountain from "../../common/InputMountain";
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
  const history = useHistory();
  const classes = useStyles();
  const { mountain, date, peopleNum } = useParams();
  const [searchState, setSearchState] = useState({ mountain, date, peopleNum });
  const [isCorrectKeyword, setIsCorrectKeyword] = useState(false);
  const [snack, setSnack] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  // 해상도 1000px 미만 시 반응형 적용
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 100);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleSignOut = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  const handleMyPage = () => {
    history.push({
      pathname: "/mypage",
      state: {
        mountain: searchState.mountain,
        date: searchState.date,
        peopleNum: searchState.peopleNum,
        correctKeyword: isCorrectKeyword,
      },
    });
  };

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
        pathname:
          "/list/" +
          searchState.mountain +
          "/" +
          searchState.date +
          "/" +
          searchState.peopleNum,
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.shiftKey === false) {
      event.preventDefault();
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "search-popover" : undefined;
  const m_date = searchState.date;
  let defaultDate = new Date();
  if (m_date) {
    defaultDate = new Date(
      m_date.substring(0, 4),
      m_date.substring(5, 7) - 1,
      m_date.substring(8, 10),
      23,
      59,
      59
    );
  }

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
      <div className="header-bar">
        {windowSize.width >= 1150 ? (
          <div>
            <form
              onSubmit={handleSubmit}
              onKeyDown={handleKeyDown}
              className="input-form"
            >
              <div id="search-mountain" className="search-item">
                <InputMountain
                  id="search-mountain"
                  getMountainValue={getMountainValue}
                  getKeyword={getKeyword}
                  value={searchState.mountain}
                />
              </div>
              <div id="search-date" className="search-item">
                <SelectDate
                  name="date"
                  getDateValue={getDateValue}
                  value={defaultDate}
                />
              </div>
              <div id="search-peopleNum" className="search-item">
                <InputPeople
                  name="peopleNum"
                  handleChange={handleChange}
                  value={searchState.peopleNum}
                />
              </div>
              <SearchBtn />
            </form>
            <Snackbar open={snack} autoHideDuration={6000} onClose={snackClose}>
              <Alert onClose={snackClose} severity="error" variant="filled">
                가고 싶은 산을 선택해주세요!
              </Alert>
            </Snackbar>
          </div>
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
                onKeyDown={handleKeyDown}
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
                    <InputMountain
                      id="search-mountain"
                      getMountainValue={getMountainValue}
                      getKeyword={getKeyword}
                      value={searchState.mountain}
                    />
                  </div>
                  <div id="search-date" className="search-item">
                    <SelectDate
                      name="date"
                      getDateValue={getDateValue}
                      value={defaultDate}
                    />
                  </div>
                  <div id="search-peopleNum" className="search-item">
                    <InputPeople
                      name="peopleNum"
                      handleChange={handleChange}
                      value={searchState.peopleNum}
                    />
                  </div>
                </div>
                <SearchBtn className="responsive-btn" />
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
            </Popover>
          </div>
        )}
        {props.user ? (
          <div className="header-user">
            <div>
              {windowSize.width >= 1150 ? (
                <Tooltip title="MY PAGE" TransitionComponent={Zoom}>
                  <Button
                    startIcon={<AiOutlineUser />}
                    size="small"
                    variant="text"
                    className="header-btn"
                    id="myPage-btn"
                    onClick={handleMyPage}
                  >
                    {props.user?.result?.nickname}
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip title="MY PAGE">
                  <Button
                    size="small"
                    variant="text"
                    className="header-btn"
                    id="myPage-btn"
                    onClick={handleMyPage}
                  >
                    <AiOutlineUser />
                  </Button>
                </Tooltip>
              )}
            </div>
            <Tooltip title="SIGN OUT" TransitionComponent={Zoom}>
              <Button
                variant="contained"
                className="header-btn"
                id="exit-btn"
                onClick={handleSignOut}
              >
                <ExitToAppIcon></ExitToAppIcon>
              </Button>
            </Tooltip>
          </div>
        ) : (
          <div className="header-user">
            <SignPage
              btn={
                <Button
                  variant="contained"
                  className="header-btn"
                  id="signIn-btn"
                >
                  <FingerprintIcon></FingerprintIcon>
                </Button>
              }
              isGoback={false}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default CardListHeader;
