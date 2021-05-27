import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { deletePost, updatePost } from "../../../actions/post";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CreateIcon from "@material-ui/icons/Create";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import UpdateCard from "./Sections/UpdateCard";
import "./Sections/ShowCard.scss";

export default function ShowCard(props) {
  const { card, date, ageLimit, user, handleShow, handleUpdate } = props;
  const [isUpdate, setIsUpdate] = useState(false);
  const [apply, setApply] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let index = 0; index < card?.currentMember?.length; index++) {
      if (card?.currentMember[index]._id === user?.result?._id) setApply(true);
    }
  }, [apply]);

  const handleApply = () => {
    const updatedMember = card.currentMember.map((user) => user._id);
    const updateCardMember = card.currentMember;

    updatedMember.push(user?.result?._id);
    updateCardMember.push(user?.result);
  
    dispatch(updatePost(card._id, { ...card, currentMember: updatedMember }));
    handleUpdate({...card, currentMember: updateCardMember});
    setApply(true);
  }

  const isUpdateCard = () => {
    setIsUpdate(true);
  };

  const updateCard = async (updateState) => {
    dispatch(updatePost(card._id, updateState));
    handleUpdate(updateState);
    setIsUpdate(false);
  };

  const deleteCard = () => {
    if (
      window.confirm(
        "해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다."
      )
    ) {
      dispatch(deletePost(card._id));
      handleShow(false);
      document.location.reload(true);
      handleShow(false);
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
              onClick={() => handleShow(false)}
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
                  {}
                  {user?.result?._id !== card.createdUser?._id ? (
                    !apply &&
                    user && (
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
        <footer style={{ height: "1vh" }}></footer>
      </div>
    );
  }
  return (
    <UpdateCard
      card={card}
      updateCard={updateCard}
      deleteCard={deleteCard}
      handleShow={handleShow}
    />
  );
}
