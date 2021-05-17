import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      display: "inline-block",
      marginBottom: "15px",
    },
  },
}));

export default function Paging() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={10} />
    </div>
  );
}
