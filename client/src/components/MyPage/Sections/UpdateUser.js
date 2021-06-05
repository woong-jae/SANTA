import React, { useState } from "react";

import {
  Typography,
  Tooltip,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Zoom,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./MyPage.scss";
import "./UpdateUser.scss";

const UpdateUser = (props) => {
  const { user } = props;
  const [updateState, setUpdateState] = useState(user?.result);
  const [birthState, setBirthState] = useState(
    user?.result?.birth.substring(0, 4) +
      "-" +
      user?.result?.birth.substring(5, 7) +
      "-" +
      user?.result?.birth.substring(8, 10)
  );

  const handleChange = (event) => {
    setUpdateState({
      ...updateState,
      [event.target.name]: event.target.value,
    });
  };
  console.log();
  const dateChange = (event) => {
    const { name, value } = event.target;
    setBirthState(value);
    setUpdateState({
      ...updateState,
      [name]: new Date(
        value.substr(0, 4),
        value.substr(5, 2) - 1,
        value.substr(8, 2),
        17,
        10,
        10
      ),
    });
  };

  return (
    <>
      <section className="mypage-body">
        <article>
          <Typography>
            <div>
              <strong>이메일</strong>
            </div>
            <TextField
              id="update-email"
              className="update-userInfo"
              name="email"
              type="id"
              value={updateState.email}
              onChange={handleChange}
              autoFocus
              fullWidth
              disabled
            ></TextField>
          </Typography>
          <Typography>
            <div>
              <strong>닉네임</strong>
            </div>
            <TextField
              required
              id="update-nickname"
              className="update-userInfo"
              name="nickname"
              value={updateState.nickname}
              onChange={handleChange}
              fullWidth
              error={
                updateState.nickname.length < 3 ||
                updateState.nickname.length > 7
                  ? true
                  : false
              }
              helperText={
                updateState.nickname.length < 3 ||
                updateState.nickname.length > 7
                  ? "3 ~ 7자여야 합니다"
                  : ""
              }
            />
          </Typography>
          <Typography>
            <div>
              <strong>성별</strong>
            </div>
            <RadioGroup
              id="update-sex"
              className="update-userInfo"
              aria-label="sex"
              name="sex"
              value={updateState.sex}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="male"
                control={<Radio color="default" />}
                label="남성"
                labelPlacement="start"
              ></FormControlLabel>
              <FormControlLabel
                value="female"
                control={<Radio color="default" />}
                label="여성"
                labelPlacement="start"
              ></FormControlLabel>
            </RadioGroup>
          </Typography>
          <Typography>
            <div>
              <strong>생년월일</strong>
            </div>
            <TextField
              required
              id="update-birth"
              className="update-userInfo"
              name="birth"
              type="date"
              value={birthState}
              onChange={dateChange}
              InputLabelProps={{
                shrink: true,
                required: true,
              }}
              fullWidth
            ></TextField>
          </Typography>
        </article>
      </section>
      <footer style={{ display: "block", textAlign: "center" }}>
        <Tooltip title="수정 완료" TransitionComponent={Zoom}>
          <Button
            variant="contained"
            id="update-btn"
            onClick={() => props.updateUser(updateState)}
            disabled={
              updateState.nickname.length >= 3 &&
              updateState.nickname.length <= 7
                ? false
                : true
            }
          >
            <CheckCircleIcon />
          </Button>
        </Tooltip>

        <Button
          variant="contained"
          id="back-btn"
          onClick={() => props.update()}
        >
          돌아가기
        </Button>
      </footer>
    </>
  );
};

export default UpdateUser;
