import React from "react";
import TextField from "@material-ui/core/TextField";

const InputPeople = () => {
  return (
    <TextField
      className="header-input"
      label="동행 인원"
      type="number"
      defaultValue="0"
      inputProps={{ min: 0 }}
      InputLabelProps={{ shrink: true }}
    ></TextField>
  );
};

export default InputPeople;
