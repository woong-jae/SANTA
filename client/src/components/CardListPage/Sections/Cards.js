import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Cards = (props) => {
  const { card } = props;
  const date =
    card.date.substring(0, 4) +
    "/" +
    card.date.substring(5, 7) +
    "/" +
    card.date.substring(8, 10);
  const ageLimit = card.ageLimit[0] + "~" + card.ageLimit[1];
 
  return (
    <Card className="cards">
      <CardContent>
        <Typography className="card-info" id="card-writer">
          <strong>{card.createdUser}</strong> 님의 게시물
        </Typography>
        <hr />
        <Typography className="card-info" id="card-title">
          <strong>{card.title}</strong>
        </Typography>
        <Typography className="card-info">
          <strong>산</strong> : {card.mountain}
        </Typography>
        <Typography className="card-info">
          <strong>현재 인원</strong> : 2 / {card.maxMember}
        </Typography>
        <Typography className="card-info">
          <strong>제한 연령</strong> : {ageLimit}
        </Typography>
        <Typography className="card-info">
          <strong>날짜</strong> : {date}
        </Typography>
      </CardContent>
      <CardActions className="card-action">
        <Button
          variant="contained"
          className="card-btn"
          onClick={() => props.handleShow(true, card, date, ageLimit)}
        >
          ➜
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
