import React from "react";
import TextField from "@material-ui/core/TextField";

const InputMountain = ({ results, keyword, updateField, getMountainValue }) => {
  var ClickHandler = text => {
    updateField("keyword", text, false);
    updateField("results", []);
    getMountainValue(text);
  }
  var ChangeHandler = e => {
    updateField("keyword", e.target.value)
  }

  var renderResults = results && results.map(( { name, location }, index) => {
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
        label="산/지역명"
        name="mountain"
        className="header-input"
        value={keyword}
        onChange={ChangeHandler}
        autoComplete = "off"
      ></TextField>
      
      {results && results.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}
    </div>
  );
};

const SearchPreview = ({ name, location, index, clickHandler }) => {
  return (
    <div onClick={ () => clickHandler(name, location)}
      className={`search-preview ${index == 0 ? "start" : ""}`}
    >
      <div className="search-element">
        <p className="mntnm">{name}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
};

export default InputMountain;
