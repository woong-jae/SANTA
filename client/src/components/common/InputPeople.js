import React from "react";
import { TextField } from "@material-ui/core";

const InputPeople = (props) => {
  return (
    <TextField
      className="header-input"
      name="peopleNum"
      label="현재 인원"
      type="number"
      defaultValue={props.value ? props.value : 1}
      inputProps={{ min: 1 }}
      InputLabelProps={{ shrink: true }}
      onChange={props.handleChange}
    ></TextField>
  );
};

export default InputPeople;
