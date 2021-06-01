import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import decode from "jwt-decode";

import { getPostById } from "../../actions/show";
import Card from "./Sections/Card";
import "./Sections/ShowCardPage.scss";

export default function ShowCard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [card, setCard] = useState(JSON.parse(localStorage.getItem("card")));
  const [refreshed, setRefreshed] = useState(true);
  const cardUpdated = useSelector(state => state.show.post);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.goBack();
  };

  useEffect(() => {
    if (refreshed) { 
      dispatch(getPostById(card._id));
      setRefreshed(false);
    };
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
    setCard(JSON.parse(localStorage.getItem("card")));
  }, [cardUpdated]);

  return (
    <Card user={user} card={card} />
  )
}
