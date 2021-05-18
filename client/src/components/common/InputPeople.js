import React from "react";
import TextField from "@material-ui/core/TextField";

const InputPeople = () => {
  return (
    <TextField
      className="header-input"
      label="현재 인원"
      type="number"
      defaultValue="1"
      inputProps={{ min: 1 }}
      InputLabelProps={{ shrink: true }}
    ></TextField>
  );
};

export default InputPeople;
