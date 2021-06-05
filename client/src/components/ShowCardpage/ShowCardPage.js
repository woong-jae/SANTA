import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import decode from "jwt-decode";

import { getPostById } from "../../actions/show";
import Card from "./Sections/Card";
import "./Sections/ShowCardPage.scss";

export default function ShowCard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const card = useSelector(state => state.show.post);

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
  }, [dispatch]);

  if (card && card._id === id) return (<Card user={user} card={card} />);
  else return <div></div>
}
