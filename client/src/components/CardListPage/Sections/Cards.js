import React from "react";
import ShowCard from "../ShowCard/ShowCard";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Cards = () => {
  return (
    <Card className="cards">
      <CardContent>
        <Typography className="card-info" id="card-title">
          <strong>가나다라마바사아자차카타파하가나다라</strong>
        </Typography>
        <Typography className="card-info">
          <strong>산</strong> : ...
        </Typography>
        <Typography className="card-info">
          <strong>현재 인원</strong> : 2
        </Typography>
        <Typography className="card-info">
          <strong>제한 인원</strong> : 4
        </Typography>
        <Typography className="card-info">
          <strong>날짜</strong> : 2021/05/15
        </Typography>
      </CardContent>
      <CardActions className="card-action">
        <ShowCard />
      </CardActions>
    </Card>
  );
};

export default Cards;
