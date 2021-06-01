import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getPostById } from "../../../actions/show";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

const Cards = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { card } = props;
  let isExpired = false;
  const date =
    card.date.substring(0, 4) +
    "/" +
    card.date.substring(5, 7) +
    "/" +
    card.date.substring(8, 10);
  const ageLimit = card.ageLimit[0] + "~" + card.ageLimit[1];

  const handleClick = async () => {
    await dispatch(getPostById(card._id));
    history.push('/list/show');
  };

  if (
    new Date(
      card.date.substring(0, 4),
      card.date.substring(5, 7),
      card.date.substring(8, 10)
    ) <= new Date() ||
    card.currentMember.length >= card.maxMember
  )
    isExpired = true;

  return (
    <Card className="cards" id={isExpired ? "disable-card" : "enable-card"}>
      <CardContent>
        <Typography className="card-info" id="card-writer">
          <strong>{card.createdUser?.nickname}</strong> 님의 게시물
        </Typography>
        <hr />
        <Typography className="card-info" id="card-title">
          <strong>{card.title}</strong>
        </Typography>
        <Typography className="card-info">
          <strong>산</strong> : {card.mountain}
        </Typography>
        <Typography className="card-info">
          <strong>현재 인원</strong> : {card.currentMember.length + 1} /{" "}
          {card.maxMember}
        </Typography>
        <Typography className="card-info">
          <strong>제한 연령</strong> : {ageLimit}
        </Typography>
        <Typography className="card-info">
          <strong>날짜</strong> : {date}
        </Typography>
      </CardContent>
      <CardActions className="card-action">
        <Button variant="contained" className="card-btn" onClick={handleClick}>
          ➜
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
