import React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./Sections/ShowCard.scss";

export default function ShowCard(props) {
  const { card, date, ageLimit } = props;

  return (
    <div>
      <div className="show">
        <Paper className="show-paper" elevation={10}>
          <Button
            variant="contained"
            className="back-btn"
            onClick={() => props.handleShow(false)}
          >
            <ArrowBackIcon />
          </Button>
          <Typography variant="h5" id="show-title">
            <strong>{card.title}</strong>
          </Typography>
          <Typography id="show-name">
            <strong>Created User</strong> 님의 모임
          </Typography>
          <div className="show-flex">
            <div style={{ width: "65%" }}>
              <header className="show-header">
                <div className="header-detail">
                  <Typography className="header-info">
                    <strong>산</strong> : {card.mountain}
                  </Typography>
                  <Typography className="header-info">
                    <strong>현재 인원</strong> : 2 / {card.maxMember}
                  </Typography>
                  <Typography className="header-info">
                    <strong>제한 연령</strong> : {ageLimit}
                  </Typography>
                  <Typography className="header-info">
                    <strong>등반 날짜</strong> : {date}
                  </Typography>
                </div>
              </header>
              <br />
              <section className="show-body">
                <Typography id="show-description">
                  <strong>{card.description}</strong>
                </Typography>
              </section>
            </div>
            <Paper className="side" elevation={5}>
              <div id="contact-paper" className="side-paper">
                <Typography>
                  <span>
                    <ContactPhoneIcon id="contact-icon" />
                    <strong> 연락망</strong>
                  </span>
                  <span id="contact-contents">{card.contact}</span>
                </Typography>
              </div>
              <div id="Member-paper" className="side-paper">
                <Typography>
                  <strong>현재 인원:</strong> 2 / {card.maxMember}
                </Typography>
                <div className="Member-info">
                  <Typography>
                    <span>★</span>팔공산엄홍길
                  </Typography>
                  <Typography>히말라야다람쥐</Typography>
                </div>
              </div>
              <div id="btn-paper" className="side-paper">
                <Button variant="contained" className="apply-btn">
                  참가 신청
                </Button>
              </div>
            </Paper>
          </div>
        </Paper>
      </div>
      <footer style={{ height: "1vh" }}></footer>
    </div>
  );
}
