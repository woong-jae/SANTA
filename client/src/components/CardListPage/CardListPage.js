import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import decode from 'jwt-decode';

import { getPosts } from '../../actions/post';
import CardListHeader from "./Sections/CardListHeader";
import CardListBody from "./Sections/CardListBody";
import "./Sections/CardListPage.scss";

const CardListPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
  }

  useEffect(() => {
    dispatch(getPosts(location.state.mountain));
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [dispatch, location]);

  return (
    <div className="cardList">
      <CardListHeader user={user}/>
      <CardListBody user={user}/>
    </div>
  );
};

export default CardListPage;
