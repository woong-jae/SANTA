import React from "react";
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

export default function CreateCard() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([0, 100]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <form className="input-form">
              <br />
              <TextField id="input-title" label="제목" />
              <header>
                <TextField
                  label="산/지역명"
                  id="input-mountain"
                  className="input-header"
                />
                <TextField
                  id="input-peopleNum"
                  className="input-header"
                  label="제한 인원"
                  type="number"
                  defaultValue="0"
                  inputProps={{ min: 0 }}
                  InputLabelProps={{ shrink: true }}
                ></TextField>
                <div className="input-header" id="age-info">
                  <Typography id="slider-label" gutterBottom>
                    제한 연령
                  </Typography>
                  <Slider
                    id="input-age"
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                </div>
                <SelectDate
                  id="input-date"
                  className="input-header"
                ></SelectDate>
              </header>
              <br />
              <section>
                <textarea
                  placeholder="내용을 입력하세요."
                  className="input-detail"
                  id="input-description"
                ></textarea>
                <textarea
                  placeholder="연락망을 입력하세요.
                   (ex. 연락처, 카카오톡 오픈채팅 등)"
                  className="input-detail"
                  id="input-contact"
                ></textarea>
              </section>
              <footer>
                <Button variant="contained" className="form-btn">
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
