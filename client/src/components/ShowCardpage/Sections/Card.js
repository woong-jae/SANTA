import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deletePost } from "../../../actions/post";
import { updatePost, applyPost, setShowCard } from "../../../actions/show";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CreateIcon from "@material-ui/icons/Create";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import UpdateCard from "./UpdateCard";
import "./ShowCardPage.scss";

export default function ShowCard({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isUpdate, setIsUpdate] = useState(false);
  const [apply, setApply] = useState(false);
  const [card, setCard] = useState(JSON.parse(localStorage.getItem("card")));

  useEffect(() => {
    dispatch(setShowCard(card._id));
    setCard(JSON.parse(localStorage.getItem("card")));
    for (let index = 0; index < card?.currentMember?.length; index++) {
      if (card?.currentMember[index]._id === user?.result?._id) setApply(true);
    }
  }, [isUpdate, apply]);

  const handleApply = async () => {
    const updatedMember = card.currentMember.map((user) => user._id);

    updatedMember.push(user?.result?._id);

    await dispatch(applyPost(card._id, { currentMember: updatedMember }));
    setApply(true);
  };

  const isUpdateCard = () => {
    setIsUpdate(true);
  };

  const updateCard = async (updateState) => {
    const updates = {
      title: updateState.title,
      description: updateState.description,
      mountain: updateState.mountain,
      contact: updateState.contact,
      maxMember: updateState.maxMember,
      ageLimit: updateState.ageLimit,
      date: updateState.date,
    };
    await dispatch(updatePost(card._id, updates));
    setIsUpdate(false);
  };

  const deleteCard = async () => {
    if (
      window.confirm(
        "해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다."
      )
    ) {
      await dispatch(deletePost(card._id));
      localStorage.removeItem('card');
      history.goBack();
    }
  };

  if (!isUpdate) {
    return (
      <div>
        <div className="show">
          <Paper className="show-paper" elevation={10}>
            <Button
              variant="contained"
              className="back-btn"
              onClick={() => {
                history.goBack();
                localStorage.removeItem('card');}}
            >
              <ArrowBackIcon />
            </Button>
            <Typography variant="h6" id="show-title">
              <strong>{card.title}</strong>
            </Typography>
            <Typography id="show-name">
              <strong>{card.createdUser?.nickname}</strong> 님의 모임
            </Typography>
            <div className="show-flex">
              <div style={{ width: "65%" }}>
                <header className="show-header">
                  <div className="header-detail">
                    <Typography className="header-info">
                      <strong>산</strong> : {card.mountain}
                    </Typography>
                    <Typography className="header-info">
                      <strong>현재 인원</strong> :{" "}
                      {card.currentMember.length + 1} / {card.maxMember}
                    </Typography>
                    <Typography className="header-info">
                      <strong>제한 연령</strong> :{" "}
                      {card.ageLimit[0] + "~" + card.ageLimit[1]}
                    </Typography>
                    <Typography className="header-info">
                      <strong>등반 날짜</strong> :{" "}
                      {card.date.substring(0, 4) +
                        "/" +
                        card.date.substring(5, 7) +
                        "/" +
                        card.date.substring(8, 10)}
                    </Typography>
                  </div>
                </header>
                <br />
                <section className="show-body">
                  <Typography id="show-description">
                    {card.description.split("\n").map((line) => {
                      return (
                        <strong>
                          {line}
                          <br />
                        </strong>
                      );
                    })}
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
                    <span id="contact-contents">
                      {card.contact.split("\n").map((line) => {
                        return (
                          <span>
                            {line}
                            <br />
                          </span>
                        );
                      })}
                    </span>
                  </Typography>
                </div>
                <div id="Member-paper" className="side-paper">
                  <Typography>
                    <strong>현재 인원:</strong> {card.currentMember.length + 1}{" "}
                    / {card.maxMember}
                  </Typography>
                  <div className="Member-info">
                    <Typography>
                      <span>★</span>
                      {card.createdUser?.nickname}
                    </Typography>
                    {card.currentMember?.map((member) => {
                      return <Typography>{member?.nickname}</Typography>;
                    })}
                  </div>
                </div>
                <div id="btn-paper" className="side-paper">
                  {user?.result?._id !== card.createdUser?._id ? (
                    !apply &&
                    user &&
                    card.currentMember.length + 1 < card.maxMember && (
                      <Button
                        variant="contained"
                        className="apply-btn"
                        onClick={handleApply}
                      >
                        참가 신청
                      </Button>
                    )
                  ) : (
                    <Button
                      variant="contained"
                      id="update-btn"
                      onClick={isUpdateCard}
                    >
                      <CreateIcon />
                    </Button>
                  )}
                </div>
              </Paper>
            </div>
            <footer>
              {user?.result?._id === card.createdUser?._id && (
                <div className="footer-btn">
                  <Button
                    variant="contained"
                    id="delete-btn"
                    onClick={deleteCard}
                  >
                    <HighlightOffIcon />
                  </Button>
                </div>
              )}
            </footer>
          </Paper>
        </div>
      </div>
    );
  }
  return (
    <UpdateCard card={card} updateCard={updateCard} deleteCard={deleteCard} />
  );
}
