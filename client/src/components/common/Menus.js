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
import RefreshIcon from "@material-ui/icons/Refresh";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/post";

import "../CardListPage/CardMenu/Sections/CardMenu.scss";
import SelectDate from "./SelectDate";
import InputMountain from "../common/InputMountain";

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createPost(
        { ...cardState, createdUser: props.user?.result?._id },
        props.user?.result
      )
    ); // 새로운 post 생성 요청
    setCardState(initialState);
    setAgeLimit([19, 70]);
    handleClose();
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

  const refresh = () => {
    window.location.reload(false);
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
        <Tooltip
          title={"새로 고침"}
          placement="left"
          TransitionComponent={Zoom}
        >
          <Fab
            color="primary"
            aria-label="refresh"
            className="refresh-btn"
            onClick={refresh}
          >
            <RefreshIcon />
          </Fab>
        </Tooltip>
        <Tooltip
          title={"모임 생성"}
          placement="left"
          TransitionComponent={Zoom}
        >
          <Fab
            color="primary"
            aria-label="add"
            className="add-btn"
            onClick={handleOpen}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
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
                    id="search-mountain"
                    getMountainValue={getMountainValue}
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
                  inputProps={{ min: 1 }}
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
          </div>
        </div>
      </Modal>
    </div>
  );
}
