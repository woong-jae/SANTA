import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import SelectDate from "../common/SelectDate";
import "./Sections/LandingPage.scss";

export default function LandingPage() {
  return (
    <div className="userinput">
      <Grid container justify="space-around">
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="산/지역명"></TextField>
          <SelectDate></SelectDate>
          <TextField
            id="outlined-basic"
            label="동행 인원"
            type="number"
            defaultValue="0"
            inputProps={{ min: 0 }}
            InputLabelProps={{ shrink: true }}
          ></TextField>
          <br></br>
          <Link to="/list">
            <Button
              className="search-btn"
              variant="contained"
              startIcon={<SearchIcon />}
            ></Button>
          </Link>
        </form>
      </Grid>
    </div>
  );
}
