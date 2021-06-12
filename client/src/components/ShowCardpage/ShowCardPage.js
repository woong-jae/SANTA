import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import decode from "jwt-decode";
import { makeStyles } from '@material-ui/core/styles';

import { getPostById } from "../../actions/show";
import Card from "./Sections/Card";
import "./Sections/ShowCardPage.scss";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function ShowCard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const card = useSelector(state => state.show.post);
  const userUpdate = useSelector(state => state.auth.authData);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push('/');
  };

  useEffect(() => {
    dispatch(getPostById(id));
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [dispatch, userUpdate]);

  if (card && card._id === id) return (<Card user={user} card={card} />);
  else return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
