import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import { Typography, Tooltip } from "@material-ui/core";
import { Button, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./Mypage.scss";
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
    <div className="mypage-main">
      <Paper className="mypage-paper" elevation={10}>
        <section className="mypage-body">
          <header>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              <strong>My Page</strong>
            </Typography>
          </header>
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
                  updateState.nickname.length < 4 ||
                  updateState.nickname.length > 7
                    ? true
                    : false
                }
                helperText={
                  updateState.nickname.length < 4 ||
                  updateState.nickname.length > 7
                    ? "4 ~ 7자여야 합니다"
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
          <Tooltip title="수정 완료">
            <Button
              variant="contained"
              id="update-btn"
              onClick={() => props.updateUser(updateState)}
              disabled={
                updateState.nickname.length >= 4 &&
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
      </Paper>
    </div>
  );
};

export default UpdateUser;
