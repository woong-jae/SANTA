import React from "react";
import "./Sections/CreateCard.scss";
import SelectDate from "../../common/SelectDate";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function valuetext(value) {
  return `${value}°C`;
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
          <div style={{ width: "900px" }}>
            <form className="input-form">
              <TextField
                id="input-title"
                style={{ margin: 8 }}
                placeholder="title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <br />
              <header>
                <TextField
                  label="산/지역명"
                  id="input-mountain"
                  className="input-header"
                ></TextField>
                <TextField
                  id="input-peopleNum"
                  className="input-header"
                  label="제한 인원"
                  type="number"
                  defaultValue="0"
                  inputProps={{ min: 0 }}
                  InputLabelProps={{ shrink: true }}
                ></TextField>
                <Slider
                  id="input-age"
                  className="input-header"
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  getAriaValueText={valuetext}
                />
                <SelectDate
                  id="input-date"
                  className="input-header"
                ></SelectDate>
              </header>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
