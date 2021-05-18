import React from "react";
import TextField from "@material-ui/core/TextField";

const InputMountain = (props) => {
  return (
    <TextField
      label="산/지역명"
      name="mountain"
      className="header-input"
      onChange={props.handleChange}
    ></TextField>
  );
};

export default InputMountain;
