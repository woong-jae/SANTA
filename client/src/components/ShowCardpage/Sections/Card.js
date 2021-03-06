import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deletePost } from "../../../actions/post";
import {
  updatePost,
  applyPost,
  unApplyPost,
  leavePost,
} from "../../../actions/show";
import { Paper, Button, Typography, Tooltip } from "@material-ui/core";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CreateIcon from "@material-ui/icons/Create";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import StarIcon from "@material-ui/icons/Star";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

import UpdateCard from "./UpdateCard";
import Dialog from "../../common/Dialog";
import Snackbar from "../../common/Snackbar";
import "./ShowCardPage.scss";
import SignPage from "../../SignPage/SignPage";
import MountainDetail from "../Sections/MountainDetail";
import ApplyList from "../Sections/ApplyList";

export default function ShowCard({ user, card }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isUpdate, setIsUpdate] = useState(false);
  const [apply, setApply] = useState(
    card?.currentMember.some((member) => member?._id === user?.result?._id)
  );
  const [isAgeOver, setIsAgeOver] = useState(false);

  useEffect(() => {
    setApply(
      card?.currentMember.some((member) => member?._id === user?.result?._id)
    );
  }, [card?.currentMember, user?.result?._id]);

  const handleLeave = (isLeave) => {
    if (isLeave) {
      dispatch(leavePost(card._id, { userID: user?.result?._id }));
    }
  };

  const handleExpel = (isExpel, targetID) => {
    if (isExpel) {
      dispatch(leavePost(card._id, { userID: targetID }));
    }
  };

  const handleApplyCancel = (isApplyCancel) => {
    if (isApplyCancel) {
      dispatch(unApplyPost(card._id, { userID: user?.result?._id }));
    }
  };

  const handleApply = (isApply) => {
    const userBirth = new Date(user?.result?.birth);
    const age = new Date().getFullYear() - userBirth.getFullYear() + 1;
    if (card?.ageLimit[0] <= age && age <= card?.ageLimit[1]) {
      if (isApply) dispatch(applyPost(card._id, { userID: user?.result?._id }));
    } else setIsAgeOver(true);
  };

  const isUpdateCard = () => {
    setIsUpdate(true);
  };

  const updateCard = (updateState) => {
    const updates = {
      title: updateState.title,
      description: updateState.description,
      mountain: updateState.mountain,
      contact: updateState.contact,
      maxMember: updateState.maxMember,
      ageLimit: updateState.ageLimit,
      date: updateState.date,
    };
    dispatch(updatePost(card._id, updates));
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
    return age;
  };

  if (!isUpdate) {
    return (
      <div>
        <div className="show">
          <Paper className="show-paper" elevation={10} component="div">
            <Tooltip title="?????? ??????">
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
              <strong>{card.createdUser?.nickname}</strong> ?????? ??????
            </Typography>
            <div className="show-flex">
              <div className="show-box" style={{ width: "65%" }}>
                <header className="show-header">
                  <div className="header-detail">
                    <Typography
                      className="header-info"
                      id="mountain-info"
                      component="div"
                    >
                      <strong>???</strong> : {card.mountain}
                      <MountainDetail mountain={card.mountain} />
                    </Typography>
                    <Typography className="header-info">
                      <strong>?????? ??????</strong> :{" "}
                      {card.currentMember.length + 1} / {card.maxMember}
                    </Typography>
                    <Typography className="header-info">
                      <strong>?????? ??????</strong> :{" "}
                      {card.ageLimit[0] + "~" + card.ageLimit[1]}
                    </Typography>
                    <Typography className="header-info">
                      <strong>?????? ??????</strong> :{" "}
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
                  <Typography id="show-description" component="div">
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
              <Paper className="side" elevation={5} component="div">
                <div id="contact-paper" className="side-paper">
                  <Typography component="div">
                    <span>
                      <ContactPhoneIcon id="contact-icon" />
                      <strong> ?????????</strong>
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
                  <Typography component="div">
                    <strong>?????? ??????:</strong> {card.currentMember.length + 1}{" "}
                    / {card.maxMember}
                  </Typography>
                  <div className="Member-info">
                    <Typography className="member" component="div">
                      {card.createdUser?.sex === "male" ? (
                        <StarIcon style={{ color: "#0d6efd" }} />
                      ) : (
                        <StarIcon style={{ color: "hotpink" }} />
                      )}
                      {card.createdUser?.nickname +
                        ` (${birthToAge(card.createdUser?.birth)})`}
                    </Typography>
                    {card.currentMember?.map((member) => {
                      return (
                        <Typography
                          key={member?._id}
                          className="member"
                          component="div"
                        >
                          {member?.sex === "male" ? (
                            <AccountCircleIcon style={{ color: "#0d6efd" }} />
                          ) : (
                            <AccountCircleIcon style={{ color: "hotpink" }} />
                          )}
                          {member?.nickname + ` (${birthToAge(member?.birth)})`}
                          {user?.result?._id === card.createdUser?._id && (
                            <Dialog
                              classes="expel-btn"
                              btnName={<RemoveCircleOutlineIcon />}
                              title="???????????? ?????????????????????????"
                              description="????????? ????????? ???????????? ???????????????."
                              action={handleExpel}
                              memberID={member?._id}
                            />
                          )}
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
                        card.appliedMember.some(member => member?._id === user?.result?._id) ? (
                          <Dialog
                            classes="apply-cancel-btn"
                            btnName="?????? ??????"
                            title="?????? ????????? ?????????????????????????"
                            description="?????? ?????? ?????? ?????? ????????????. ????????? ????????? ?????????????????????????"
                            action={handleApplyCancel}
                          />
                        ) : (
                          <Dialog
                            classes="apply-btn"
                            btnName="?????? ??????"
                            title={`[${card.createdUser?.nickname}] ?????? ????????? ?????????????????????????`}
                            description="????????? ????????? ????????? ???????????????."
                            action={handleApply}
                          />
                        )
                      ) : (
                        <SignPage
                          btn={
                            <Button variant="contained" className="apply-btn">
                              ?????? ??????
                            </Button>
                          }
                        />
                      ))
                    ) : (
                      <Dialog
                        classes="leave-btn"
                        btnName="?????? ??????"
                        title="???????????? ?????????????????????????"
                        description="?????? ????????? ????????? ?????? ?????????????????? ?????? ??? ??? ????????????."
                        action={handleLeave}
                      />
                    )
                  ) : (
                    <div className="leader-btn">
                      <Button
                        variant="contained"
                        id="update-btn"
                        onClick={isUpdateCard}
                      >
                        <CreateIcon />
                      </Button>
                      <ApplyList card={card} birthToAge={birthToAge} />
                    </div>
                  )}
                </div>
              </Paper>
            </div>
            <footer>
              {user?.result?._id === card.createdUser?._id && (
                <div className="footer-btn">
                  <Dialog
                    classes="delete-btn"
                    btnName={<HighlightOffIcon />}
                    title="?????? ???????????? ?????????????????????????"
                    description="????????? ???????????? ????????? ??? ????????????."
                    action={deleteCard}
                  />
                </div>
              )}
            </footer>
          </Paper>
        </div>
        {isAgeOver && (
          <Snackbar
            setState={setIsAgeOver}
            type="info"
            description="?????? ????????? ??????????????????!"
          />
        )}
      </div>
    );
  }
  return (
    <UpdateCard card={card} updateCard={updateCard} deleteCard={deleteCard} />
  );
}
