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
        <Typography className="card-info" id="card-writer">
          <strong>팔공산엄홍길</strong> 님의 게시물
        </Typography>
        <hr />
        <Typography className="card-info" id="card-title">
          <strong>팔공산 함께 등반하실 분 구해요! 저녁도 같이 먹어요^^</strong>
        </Typography>
        <Typography className="card-info">
          <strong>산</strong> : 팔공산
        </Typography>
        <Typography className="card-info">
          <strong>현재 인원</strong> : 2 / 4
        </Typography>
        <Typography className="card-info">
          <strong>제한 연령</strong> : 20 ~ 27
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
