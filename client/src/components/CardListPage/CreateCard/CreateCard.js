import React, { useState } from "react";
import "./Sections/CreateCard.scss";
import SelectDate from "../../common/SelectDate";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function valuetext(value) {
  return `${value}`;
}

export default function CreateCard(props) {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState([0, 100]);

  const [cardState, setCardState] = useState({
    title: "",
    moutain: "",
    peopleNum: "",
    age: "",
    date: "",
    description: "",
    contact: "",
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    /*
    alert(
      cardState.title +
        " " +
        cardState.mountain +
        " " +
        cardState.peopleNum +
        " " +
        cardState.age +
        " " +
        cardState.date +
        " " +
        cardState.description +
        " " +
        cardState.contact
    );
    */
    event.preventDefault();
    props.getCardState(cardState);
  };
  const getDateValue = (value) => {
    setCardState({
      ...cardState,
      date:
        value.getFullYear() +
        "/" +
        Number(value.getMonth() + 1) +
        "/" +
        value.getDate(),
    });
  };
  const handleAgeChange = (event, newAge) => {
    setAge(newAge);
    setCardState({
      ...cardState,
      age: newAge[0] + " ~ " + newAge[1],
    });
  };
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setCardState({
      ...cardState,
      [name]: value,
    });
  };

  return (
    <div>
      <Button variant="contained" className="footer-btn" onClick={handleOpen}>
        모임 만들기
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
                name="title"
                id="input-title"
                label="제목"
                value={cardState.title}
                onChange={handleChange}
              />
              <header>
                <TextField
                  name="mountain"
                  label="산/지역명"
                  id="input-mountain"
                  className="input-header"
                  onChange={handleChange}
                />
                <TextField
                  name="peopleNum"
                  id="input-peopleNum"
                  className="input-header"
                  label="제한 인원"
                  type="number"
                  defaultValue="0"
                  inputProps={{ min: 0 }}
                  InputLabelProps={{ shrink: true }}
                  value={cardState.personNum}
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
              <section>
                <textarea
                  name="description"
                  placeholder="내용을 입력하세요."
                  className="input-detail"
                  id="input-description"
                  value={cardState.description}
                  onChange={handleChange}
                />
                <textarea
                  name="contact"
                  placeholder="연락망을 입력하세요.
                   (ex. 연락처, 카카오톡 오픈채팅 등)"
                  className="input-detail"
                  id="input-contact"
                  value={cardState.contact}
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
