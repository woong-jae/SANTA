import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import LockIcon from "@material-ui/icons/Lock";

import { signin } from "../../actions/auth";
import "./Sections/SigninPage.scss";

export default function SigninDialog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [isSignin, setIsSignIn] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [userEMAIL, setEMAIL] = useState("");
  const [userPWD, setPWD] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    passwd: "",
    passwdConfirm: "",
    birth: "",
    sex: "",
    nickname: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const signinClick = () => {
    // 로그인을 원하는 사용자가 로그인 버튼 누를 경우와 아닌 경우
    setIsSignIn(true);
    // dispatch(signin({email: userID, passwd: userPWD}, history));
  };
  const signupClick = () => {
    setIsSignIn(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        className="header-btn"
        id="signIn-btn"
        onClick={handleOpen}
      >
        sign in
      </Button>
      <Dialog open={open} onClose={handleClose} className="signDialog">
        <DialogTitle className="dialogTitle">
          <LockIcon />
          <Typography variant="h3" gutterBottom>
            {isSignin ? "Sign In" : "Sign Up"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            id="userEmail"
            label="이메일"
            margin="normal"
            type="email"
            value={userEMAIL}
            onChange={({ target: { value } }) => setEMAIL(value)}
            fullWidth
          ></TextField>
          <TextField
            required
            id="userPwd"
            label="비밀번호"
            margin="normal"
            type="password"
            value={userPWD}
            onChange={({ target: { value } }) => setPWD(value)}
            fullWidth
          ></TextField>
          {!isSignin && (
            <>
              <TextField
                required
                name="passwdConfirm"
                label="비밀번호 확인"
                margin="normal"
                type="password"
                fullWidth
                value={inputs.passwdConfirm}
                onChange={onChange}
              ></TextField>
              <TextField
                name="birth"
                label="생년월일"
                margin="normal"
                type="date"
                value={inputs.birth}
                defaultValue="1998-12-12"
                onChange={onChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              ></TextField>
              <RadioGroup
                aria-label="sex"
                name="sex"
                margin="normal"
                value={inputs.sex}
                onChange={onChange}
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
              <TextField
                required
                name="nickname"
                label="닉네임"
                fullWidth
                value={inputs.nickname}
                onChange={onChange}
              ></TextField>
            </>
          )}
          <Typography className="err" variant="body2">
            {"error"}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            className="signbtn"
            onClick={signinClick}
            fullWidth
          >
            Sign In
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="signbtn"
            onClick={signupClick}
            fullWidth
          >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
