import React from "react";
import ShowCard from "../ShowCard/ShowCard";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Cards = (props) => {
  const { card } = props;

  return (
    <Card className="cards">
      <CardContent>
        <Typography className="card-info" id="card-writer">
          <strong>팔공산엄홍길</strong> 님의 게시물
        </Typography>
        <hr />
        <Typography className="card-info" id="card-title">
          <strong>{card.title}</strong>
        </Typography>
        <Typography className="card-info">
          <strong>산</strong> : {card.mountain}
        </Typography>
        <Typography className="card-info">
          <strong>현재 인원</strong> : 2 / {card.peopleNum}
        </Typography>
        <Typography className="card-info">
          <strong>제한 연령</strong> : {card.age}
        </Typography>
        <Typography className="card-info">
          <strong>날짜</strong> : {card.date}
        </Typography>
      </CardContent>
      <CardActions className="card-action">
        <ShowCard card={card} />
      </CardActions>
    </Card>
  );
};

export default Cards;
