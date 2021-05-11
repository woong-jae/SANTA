import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import SelectDate from "./Sections/SelectDate";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "300px",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className="userinput">
      <Grid container justify="space-around">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="산/지역명"
            variant="outlined"
          ></TextField>
          <SelectDate></SelectDate>
          {/* <TextField
            id="outlined-basic"
            label="가고 싶은 날짜"
            variant="outlined"
          ></TextField> */}
          <TextField
            id="outlined-basic"
            label="동행 인원"
            type="number"
            defaultValue="0"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          ></TextField>
          <br></br>
          <Link to="/cardList">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Link>
        </form>
      </Grid>
    </div>
  );
}
