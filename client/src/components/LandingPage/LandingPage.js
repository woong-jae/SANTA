import React from "react";
//import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import SearchMountain from "../../api/searchMountain";
import InputPeople from "../common/InputPeople";
import SearchBtn from "../common/SearchBtn";
import SelectDate from "../common/SelectDate";
import "./Sections/LandingPage.scss";
import "../common/Sections/Search.scss";
import { useHistory } from "react-router";

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
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchState.mountain !== "") {
      history.push({
        pathname: "/list",
        search: `?mountain=${searchState.mountain}`,
        state: { mountain: searchState.mountain },
      });
    }
    else 
      history.push({
        pathname: '/list',
        state: { mountain: searchState.mountain }
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
        "/" +
        Number(value.getMonth() + 1) +
        "/" +
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
      <Typography variant="h1" align="center">
        Santa
      </Typography>
      <div className="userinput">
        <form onSubmit={handleSubmit}>
<<<<<<< HEAD
          <SearchMountain 
            id="search-mountain" 
            getMountainValue={getMountainValue} 
=======
          <SearchMountain
            id="search-mountain"
            getMountainValue={getMountainValue}
>>>>>>> cd6742d9da6207cccd29095e89af3f316f311107
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
