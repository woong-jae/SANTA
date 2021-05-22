import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useDispatch, userSelector } from "react-redux";
import { createPost } from "../../../actions/post";

import "./Sections/CreateCard.scss";
import SelectDate from "../../common/SelectDate";

function valuetext(value) {
  return `${value}`;
}

export default function CreateCard(props) {
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    mountain: "",
    peopleNum: 1,
    age: [1, 100],
    date: new Date(),
    description: "",
    contact: "",
  };

  const [cardState, setCardState] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState([0, 100]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost({ ...cardState })); // 새로운 post 생성 요청

    // props.getCardState(cardState);
    setCardState(initialState);
    setAge([0, 100]);
    handleClose();
  };

  const getDateValue = (value) => {
    setCardState({
      ...cardState,
      date: value,
    });
  };
  const handleAgeChange = (event, newAge) => {
    setAge(newAge);
    /*
    if (newAge[0] === 0 && newAge[1] === 100)
      setCardState({
        ...cardState,
        age: "제한 없음",
      });
    else
    */
    setCardState({
      ...cardState,
      age: newAge,
    });
  };
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    setCardState({
      ...cardState,
      [name]: value,
    });
  };

  return (
    <div>
      <Button variant="contained" className="footer-btn" onClick={handleOpen}>
        <strong>모임 만들기</strong>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="input-paper">
          <div style={{ width: "970px" }}>
            <form onSubmit={handleSubmit} className="input-form">
              <br />
              <TextField
                required
                name="title"
                id="input-title"
                label="제목"
                inputProps={{ maxLength: 44 }}
                onChange={handleChange}
              />
              <header>
                <TextField
                  required
                  name="mountain"
                  label="산/지역명"
                  id="input-mountain"
                  className="input-header"
                  onChange={handleChange}
                />
                <TextField
                  required
                  name="peopleNum"
                  id="input-peopleNum"
                  className="input-header"
                  label="제한 인원"
                  type="number"
                  defaultValue="1"
                  inputProps={{ min: 1 }}
                  InputLabelProps={{ shrink: true }}
                  onChange={handleChange}
                />
                <div className="input-header" id="age-info">
                  <Typography id="slider-label" gutterBottom>
                    제한 연령
                  </Typography>
                  <Slider
                    name="age"
                    id="input-age"
                    value={age}
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
                <Button
                  variant="contained"
                  className="form-btn"
                  type="submit"
                  onClick={handleSubmit}
                >
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
