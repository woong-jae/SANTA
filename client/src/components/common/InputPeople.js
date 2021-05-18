import React from "react";
import TextField from "@material-ui/core/TextField";

const InputPeople = (props) => {
  return (
    <TextField
      className="header-input"
      name="peopleNum"
      label="현재 인원"
      type="number"
      defaultValue="1"
      inputProps={{ min: 1 }}
      InputLabelProps={{ shrink: true }}
      onChange={props.handleChange}
    ></TextField>
  );
};

export default InputPeople;
