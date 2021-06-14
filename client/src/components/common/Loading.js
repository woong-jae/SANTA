import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Loading = (props) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={props.load}>
      <CircularProgress color="inherit"></CircularProgress>
    </Backdrop>
  );
};

export default Loading;