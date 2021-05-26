import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";

import SelectDate from "../../../common/SelectDate";
import "./ShowCard.scss";
import "./UpdateCard.scss"

function valuetext(value) {
  return `${value}`;
}

export default function ShowCard(props) {
  const { card, deleteCard, isUpdateCard } = props;
  const [updateState, setUpdateState] = useState(card);
  const [age, setAge] = useState([
    updateState.ageLimit[0],
    updateState.ageLimit[1],
  ]);

  const handleChange = (event) => {
    setUpdateState({
      ...updateState,
      [event.target.name]: event.target.value,
    });
  };

  const handleAgeChange = (event, newAge) => {
    setAge(newAge);

    setUpdateState({
      ...updateState,
      ageLimit: newAge,
    });
  };

  const getDateValue = (value) => {
    setUpdateState({
      ...updateState,
      date: value,
    });
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
      <div className="show">
        <Paper className="show-paper" elevation={10}>
          <Button
            variant="contained"
            className="back-btn"
            onClick={() => props.handleShow(false)}
          >
            <ArrowBackIcon />
          </Button>
          <div id="show-title">
            <TextField
              name="title"
              id="update-title"
              value={updateState.title}
              label="제목"
              inputProps={{ maxLength: 44 }}
              onChange={handleChange}
            />
          </div>
          <Typography id="show-name">
            <strong>{card.createdUser}</strong> 님의 모임
          </Typography>
          <div className="show-flex">
            <div style={{ width: "65%" }}>
              <header className="show-header">
                <div className="header-detail">
                  <div className="header-info-update">
                    <TextField
                      name="mountain"
                      label="산/지역명"
                      value={updateState.mountain}
                      id="update-mountain"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="header-info-update">
                    <TextField
                      name="maxMember"
                      id="input-maxMember"
                      label="제한 인원"
                      type="number"
                      defaultValue={updateState.maxMember}
                      inputProps={{ min: 1 }}
                      InputLabelProps={{ shrink: true }}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="header-info-update">
                    <Typography id="slider-label" gutterBottom>
                      제한 연령
                    </Typography>
                    <Slider
                      name="ageLimit"
                      id="update-age"
                      max={70}
                      min={19}
                      marks={marks}
                      value={age}
                      onChange={handleAgeChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      getAriaValueText={valuetext}
                    />
                  </div>
                  <div className="header-info-update" id="update-date">
                    <SelectDate name="date" getDateValue={getDateValue} />
                  </div>
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
                  <strong>현재 인원:</strong> {card.currentMember.length} /{" "}
                  {card.maxMember}
                </Typography>
                <div className="Member-info">
                  <Typography>
                    <span>★</span>
                    {card.createdUser}
                  </Typography>
                </div>
              </div>
              <div id="btn-paper" className="side-paper">
                <Button
                  variant="contained"
                  id="update-btn"
                  onClick={() => isUpdateCard(false)}
                >
                  <CheckCircleIcon />
                </Button>
              </div>
            </Paper>
          </div>
          <footer>
            <div className="footer-btn">
              <Button variant="contained" id="delete-btn" onClick={deleteCard}>
                <HighlightOffIcon />
              </Button>
            </div>
          </footer>
        </Paper>
      </div>
      <footer style={{ height: "1vh" }}></footer>
    </div>
  );
}
