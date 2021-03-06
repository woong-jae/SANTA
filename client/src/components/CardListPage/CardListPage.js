import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import decode from "jwt-decode";

import { getPostByMt, getPosts } from "../../actions/post";
import CardListHeader from "./Sections/CardListHeader";
import CardListBody from "./Sections/CardListBody";
import "./Sections/CardListPage.scss";

const CardListPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const userUpdate = useSelector(state => state.auth.authData);

  const splitedPath = location.pathname.split("/");

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
  };

  useEffect(() => {
    dispatch(getPostByMt(splitedPath[2], splitedPath[3], splitedPath[4]));
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [dispatch, location, userUpdate]);

  return (
    <div className="cardList">
      <div className="cardList-main">
        <CardListHeader user={user} />
        <CardListBody user={user} />
      </div>
    </div>
  );
};

export default CardListPage;
