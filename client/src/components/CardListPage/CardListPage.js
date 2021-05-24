import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post';

import CardListHeader from "./Sections/CardListHeader";
import CardListBody from "./Sections/CardListBody";
import "./Sections/CardListPage.scss";

const CardListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="cardList">
      <CardListHeader />
      <CardListBody />
    </div>
  );
};

export default CardListPage;
