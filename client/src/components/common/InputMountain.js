import React, { useState } from "react";
import { TextField, Popper } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const InputMountain = ({
  results,
  keyword,
  updateField,
  getMountainValue,
  getKeyword,
}) => {
  const [isCorrectName, setIsCorrectName] = useState(false);

  var ClickHandler = (text) => {
    console.log(text);
    updateField("keyword", text, false);
    updateField("results", []);
    getMountainValue(text);
    getKeyword(true);
    setIsCorrectName(true);
  };

  var ChangeHandler = (e) => {
    updateField("keyword", e.target.value);
    getKeyword(false);
    setIsCorrectName(false);
  };

  const defaultProps = {
    options: results,
    getOptionLabel: (option) => `${option.name} (${option.location})`,
  };

  const styles = (theme) => ({
    popper: {},
  });

  const popperMy = (props) => {
    return <Popper {...props} style={styles.popper} placement="bottom-start" />;
  };

  return (
    <div className="auto">
      <Autocomplete
        freeSolo
        {...defaultProps}
        PopperComponent={popperMy}
        className="header-input"
        onChange={(event, value) =>
          value ? ClickHandler(value.name) : ClickHandler("")
        }
        renderInput={(params) => (
          <TextField
            //required
            {...params}
            label="산/지역명"
            InputLabelProps={{ shrink: true }}
            id="input=mountain"
            name="mountain"
            value={keyword}
            onChange={ChangeHandler}
            //autoComplete="off"
            // helperText={!isCorrectName && "가고 싶은 산을 선택해주세요"}
            error={!isCorrectName && keyword !== ""}
          ></TextField>
        )}
      ></Autocomplete>
    </div>
  );
};

export default InputMountain;
