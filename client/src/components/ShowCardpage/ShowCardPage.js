import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";

import { getPostById, setShowCard } from '../../actions/show';
import Card from "./Sections/Card";
import "./Sections/ShowCardPage.scss";

export default function ShowCard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [card, setCard] = useState(JSON.parse(localStorage.getItem("card")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push('/');
  };

  useEffect(() => {
    dispatch(setShowCard(card._id));
    setCard(JSON.parse(localStorage.getItem("card")));
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <Card user={user} card={card} />
  )
}
