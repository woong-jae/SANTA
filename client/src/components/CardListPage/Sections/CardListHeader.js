import React from "react";
import { Link } from "react-router-dom";
import "./CardListPage.scss";
import SigninPage from "../../SigninPage/SigninPage";
import "../../common/Sections/Search.scss";
import InputMountain from "../../common/InputMountain";
import InputPeople from "../../common/InputPeople";
import SearchBtn from "../../common/SearchBtn";
import SelectDate from "../../common/SelectDate";
import { Button } from "@material-ui/core";
import { AiOutlineUser } from "react-icons/ai";

const CardListHeader = () => {
  const currentDate = new Date();
  const initialState = {
    mountain: "",
    date:
      currentDate.getFullYear() +
      "/" +
      Number(currentDate.getMonth() + 1) +
      "/" +
      currentDate.getDate(),
    peopleNum: "",
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
    <header className="cardList-header">
      <form className="header-search">
        <InputMountain id="search-mountain" />
        <SelectDate id="search-date" getDateValue={getDateValue} />
        <InputPeople id="search-peopleNum" />
        <SearchBtn type="submit" />
      </form>
      <div className="header-user">
        <Link to="/myPage">
          <Button variant="contained" className="header-btn" id="myPage-btn">
            <AiOutlineUser className="btn-icon" />
          </Button>
        </Link>
        <SigninPage />
      </div>
    </header>
  );
};

export default CardListHeader;
