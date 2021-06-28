import React, { useState } from "react";
import { useHistory } from "react-router";
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
import { createPost } from "../../actions/post";
import { getUserPosts } from "../../actions/mypage";

import "./Sections/CreatePost.scss";
import Snackbar from "./Snackbar";
import SelectDate from "./SelectDate";
import InputMountain from "./InputMountain";

function valuetext(value) {
  return `${value}`;
}

export default function CreatePost(props) {
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
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isCorrectKeyword) {
      setIsError(true);
    }
    if (isCorrectKeyword) {
      await dispatch(
        createPost(
          { ...cardState, createdUser: props.user?.result?._id },
          props.user?.result
        )
      ); // 새로운 post 생성 요청
      dispatch(getUserPosts(props.user?.result?._id));
      setCardState(initialState);
      setAgeLimit([19, 70]);
      handleClose();
      window.location.replace("/list/" + cardState.mountain + "/" + dateToString() + "/1");
    }
  };

  const dateToString = () => {
    return (
      cardState.date.getFullYear() +
      "-" +
      ("00" + (cardState.date.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + cardState.date.getDate()).slice(-2)
    );
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
      <Tooltip title={"모임 생성"} placement="left" TransitionComponent={Zoom}>
        <Fab aria-label="add" className="add-btn" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal-main"
      >
        <div className="input-paper">
          <div style={{ width: "100%" }}>
            <form onSubmit={handleSubmit} className="input-form">
              <br />
              <div className="title-box">
                <TextField
                  required
                  name="title"
                  id="input-title"
                  label="제목"
                  inputProps={{ maxLength: 20 }}
                  onChange={handleChange}
                />
              </div>
              <header className="create-header">
                <div id="input-mountain" className="input-header">
                  <InputMountain
                    name="mountain"
                    label="산/지역명"
                    getMountainValue={getMountainValue}
                    getKeyword={getKeyword}
                  />
                </div>
                <TextField
                  required
                  name="maxMember"
                  id="input-maxMember"
                  className="input-header"
                  label="제한 인원"
                  type="number"
                  defaultValue=""
                  inputProps={{ min: 1, max: 4 }}
                  InputLabelProps={{ shrink: true }}
                  onChange={handleChange}
                />
                <div className="input-header" id="age-info">
                  <Typography id="slider-label" gutterBottom>
                    제한 연령
                  </Typography>
                  <Typography id="show-age">
                    {ageLimit[0] + "~" + ageLimit[1]}
                  </Typography>
                  <Slider
                    name="ageLimit"
                    id="input-age"
                    max={70}
                    min={19}
                    marks={marks}
                    value={ageLimit}
                    onChange={handleAgeChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                </div>
                <SelectDate
                  name="date"
                  id="input-date"
                  className="input-header"
                  getDateValue={getDateValue}
                />
              </header>
              <br />
              <section className="input-body">
                <textarea
                  required
                  name="description"
                  placeholder="내용을 입력하세요. *"
                  className="input-detail"
                  id="input-description"
                  onChange={handleChange}
                />
                <textarea
                  required
                  name="contact"
                  placeholder="연락망을 입력하세요. *
                   (ex. 연락처, 카카오톡 오픈채팅 등)"
                  className="input-detail"
                  id="input-contact"
                  onChange={handleChange}
                />
              </section>
              <footer>
                <Button variant="contained" className="form-btn" type="submit">
                  모임 생성
                </Button>
              </footer>
            </form>
            {isError && (
              <Snackbar
                setState={setIsError}
                type="error"
                description="가고 싶은 산을 선택해주세요!"
              />
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
