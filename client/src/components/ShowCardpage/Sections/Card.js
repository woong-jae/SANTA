import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deletePost } from "../../../actions/post";
import { updatePost, applyPost } from "../../../actions/show";
import { Paper, Button, Typography, Tooltip } from "@material-ui/core";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CreateIcon from "@material-ui/icons/Create";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import StarIcon from "@material-ui/icons/Star";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import UpdateCard from "./UpdateCard";
import Dialog from "../../common/Dialog";
import "./ShowCardPage.scss";
import SignPage from "../../SignPage/SignPage";

export default function ShowCard({ user, card }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isUpdate, setIsUpdate] = useState(false);

  const [apply, setApply] = useState(
    card?.currentMember.some((member) => member?._id === user?.result?._id)
  );
  useEffect(() => {
    setApply(
      card?.currentMember.some((member) => member?._id === user?.result?._id)
    );
  });

  const handleApply = async () => {
    const userBirth = new Date(user?.result?.birth);
    const age = new Date().getFullYear() - userBirth.getFullYear() + 1;
    if (card?.ageLimit[0] <= age && age <= card?.ageLimit[1]) {
      await dispatch(applyPost(card._id, { userID: user?.result?._id }));
    } else {
      window.alert("나이 제한을 확인해주세요!");
    }
  };

  const handleLeave = async (isLeave) => {
    if (isLeave) {
      await dispatch(applyPost(card._id, { userID: user?.result?._id }));
    }
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

  const deleteCard = async (isDelete) => {
    if (isDelete) {
      await dispatch(deletePost(card._id));
      localStorage.removeItem("card");
      history.goBack();
    }
  };

  const birthToAge = (birth) => {
    const birthYear = birth.substring(0, 4);
    const age = new Date().getFullYear() - Number(birthYear) + 1;
    return age + "세";
  };

  const sexInKorean = (sex) => {
    if (sex === "male") return "남성";
    else return "여성";
  };

  if (!isUpdate) {
    return (
      <div>
        <div className="show">
          <Paper className="show-paper" elevation={10}>
            <Tooltip title="뒤로 가기">
              <Button
                variant="contained"
                className="back-btn"
                onClick={() => {
                  history.goBack();
                  localStorage.removeItem("card");
                }}
              >
                <ArrowBackIcon />
              </Button>
            </Tooltip>
            <Typography variant="h6" id="show-title">
              <strong>{card.title}</strong>
            </Typography>
            <Typography id="show-name">
              <strong>{card.createdUser?.nickname}</strong> 님의 모임
            </Typography>
            <div className="show-flex">
              <div className="show-box" style={{ width: "65%" }}>
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
                    <Typography className="member">
                      <StarIcon />
                      {card.createdUser?.nickname +
                        ` (${birthToAge(
                          card.createdUser?.birth
                        )}, ${sexInKorean(card.createdUser?.sex)})`}
                    </Typography>
                    {card.currentMember?.map((member) => {
                      return (
                        <Typography key={member?._id} className="member">
                          <AccountCircleIcon />
                          {member?.nickname +
                            ` (${birthToAge(member?.birth)}, ${sexInKorean(
                              member?.sex
                            )})`}
                        </Typography>
                      );
                    })}
                  </div>
                </div>
                <div id="btn-paper" className="side-paper">
                  {user?.result?._id !== card.createdUser?._id ? (
                    !apply ? (
                      card.currentMember.length + 1 < card.maxMember &&
                      (user ? (
                        <Button
                          variant="contained"
                          className="apply-btn"
                          onClick={handleApply}
                        >
                          참가 신청
                        </Button>
                      ) : (
                        <SignPage type={2} />
                      ))
                    ) : (
                      <Dialog
                        btnName="모임 탈퇴"
                        title="모임에서 탈퇴하시겠습니까?"
                        description="등반 날짜가 임박한 경우 모임원들에게 해가 될 수 있습니다."
                        action={handleLeave}
                      />
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
                  <Dialog
                    btnName={<HighlightOffIcon />}
                    title="해당 게시물을 삭제하시겠습니까?"
                    description="삭제된 데이터는 복구할 수 없습니다."
                    action={deleteCard}
                  />
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
