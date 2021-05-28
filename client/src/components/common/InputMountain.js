import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const InputMountain = ({ results, keyword, updateField, getMountainValue }) => {
  const [isCorrectName, setIsCorrectName] = useState(false);
  var ClickHandler = (text) => {
    updateField("keyword", text, false);
    updateField("results", []);
    getMountainValue(text);
    setIsCorrectName(true);
  };
  var ChangeHandler = (e) => {
    updateField("keyword", e.target.value);
    setIsCorrectName(false);
  };

  var renderResults =
    results &&
    results.map(({ name, location }, index) => {
      return (
        <SearchPreview
          key={index}
          clickHandler={ClickHandler}
          index={index}
          name={name}
          location={location}
        />
      );
    });

  return (
    <div className="auto">
      <TextField
        //required
        label="산/지역명"
        name="mountain"
        className="header-input"
        value={keyword}
        onChange={ChangeHandler}
        autoComplete="off"
        helperText={!isCorrectName && "가고 싶은 산을 선택해주세요"}
        error={!isCorrectName && keyword != ""}
      ></TextField>

      {results && results.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}
    </div>
  );
};

const SearchPreview = ({ name, location, index, clickHandler }) => {
  return (
    <div
      onClick={() => clickHandler(name, location)}
      className={`search-preview ${index === 0 ? "start" : ""}`}
    >
      <div className="search-element">
        <p className="mntnm">{name}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
};

export default InputMountain;
