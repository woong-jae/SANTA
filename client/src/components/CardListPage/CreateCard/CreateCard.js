import React, { useState } from "react";
import {
  Modal,
  Tooltip,
  Button,
  TextField,
  Slider,
  Typography,
  Fab,
  Zoom,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { createPost } from "../../../actions/post";

import "./Sections/CreateCard.scss";
import SignPage from "../../SignPage/SignPage";
import Snackbar from "../../common/Snackbar";
import SelectDate from "../../common/SelectDate";
import InputMountain from "../../common/InputMountain";
import Refresh from "../../common/Refresh";
import CreatePost from "../../common/CreatePost";

function valuetext(value) {
  return `${value}`;
}

export default function CreateCard(props) {
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    mountain: "",
    maxMember: "",
    ageLimit: [19, 70],
    date: new Date(),
    description: "",
    contact: "",
  };

  const [cardState, setCardState] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [ageLimit, setAgeLimit] = useState([19, 70]);
  const [isCorrectKeyword, setIsCorrectKeyword] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCardState(initialState);
    setAgeLimit([19, 70]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isCorrectKeyword) {
      setIsError(true);
    }
    if (isCorrectKeyword) {
      dispatch(
        createPost(
          { ...cardState, createdUser: props.user?.result?._id },
          props.user?.result
        )
      ); // 새로운 post 생성 요청
      setCardState(initialState);
      setAgeLimit([19, 70]);
      handleClose();
    }
  };

  const getDateValue = (value) => {
    setCardState({
      ...cardState,
      date: value,
    });
  };
  const handleAgeChange = (event, newAge) => {
    setAgeLimit(newAge);

    setCardState({
      ...cardState,
      ageLimit: newAge,
    });
  };
  const handleChange = (event) => {
    setCardState({
      ...cardState,
      [event.target.name]: event.target.value,
    });
  };
  const getMountainValue = (value) => {
    setCardState({
      ...cardState,
      mountain: value,
    });
  };

  const getKeyword = (value) => {
    setIsCorrectKeyword(value);
  };

  const marks = [
    { value: 19 },
    { value: 29 },
    { value: 39 },
    { value: 49 },
    { value: 70 },
  ];

  return (
    <div>
      <div className="footer-btn" style={{ display: "grid" }}>
        <Refresh />
        {props.user ? (
          <CreatePost user={props.user}/>
        ) : (
          <SignPage
            btn={
              <Fab color="primary" aria-label="add" className="add-btn">
                <AddIcon />
              </Fab>
            }
            isGoback={false}
          />
        )}
      </div>
    </div>
  );
}
