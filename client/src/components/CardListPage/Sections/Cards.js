import React from "react";
import { useHistory } from "react-router-dom";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Tooltip,
  Fade
} from "@material-ui/core";

const Cards = (props) => {
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
    history.push("/list/" + card._id);
  };

  if (
    new Date(
      card.date.substring(0, 4),
      card.date.substring(5, 7) - 1,
      card.date.substring(8, 10),
      23,
      59,
      59
    ) <= new Date()
  ) {
    isExpired = true;
  }

  return (
    <Fade in={true} style={{ transitionDelay: `${props.index * 100}ms`}}>
      <Card className="cards" id={isExpired ? "disable-card" : "enable-card"} >
        <CardContent>
          <Typography className="card-info" id="card-writer">
            <strong>{card.createdUser?.nickname}</strong> 님의 모임
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
          <Tooltip title="모임 정보 더 보기">
            <Button variant="contained" className="card-btn" onClick={handleClick}>
              ➜
            </Button>
          </Tooltip>
        </CardActions>
      </Card>
    </Fade>
  );
};

export default Cards;
