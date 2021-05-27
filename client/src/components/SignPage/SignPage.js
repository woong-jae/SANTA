import React, { useState, useEffect } from "react";
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
import { isEmail, isPassword } from "../common/check";
import "./Sections/SignPage.scss";
import { AiFillAlipaySquare } from "react-icons/ai";

export default function SigninDialog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isSignin, setIsSignIn] = useState(true);
  const validator = {
    isValidEmail: false,
    isValidPasswd: false,
    isConfirm: false,
  };
  const init = {
    email: "",
    passwd: "",
    passwdConfirm: "",
    birth: new Date(),
    sex: "male",
    nickname: "",
  };

  const [valid, setValid] = useState(validator);
  const [inputs, setInputs] = useState(init);
  const [birthState, setBirthState] = useState(new Date());

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const dateChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBirthState(value);
    setInputs({
      ...inputs,
      [name]: new Date(
        value.substr(0, 4),
        value.substr(5, 2) - 1,
        value.substr(8, 2)
      ),
    });
  };

  useEffect(() => {
    if (isEmail(inputs.email)) {
      setValid({ ...valid, isValidEmail: true });
      if (isPassword(inputs.passwd)) {
        setValid({ ...valid, isValidPasswd: true });
        if (inputs.passwd === inputs.passwdConfirm) {
          setValid({ ...valid, isConfirm: true });
        }
      }
    } else {
      setValid({
        ...valid,
        isValidEmail: false,
        isValidPasswd: false,
        isConfirm: false,
      });
    }
  }, [inputs]);

  const handleOpen = () => {
    setOpen(true);
    setIsSignIn(true);
  };
  const handleClose = () => {
    setInputs(init);
    setValid(validator);
    setOpen(false);
  };
  const hasEmailError = (emailEnter) => (isEmail(inputs.email) ? false : true);
  const hasPwdError = (passwordEnter) =>
    isPassword(inputs.passwd) ? false : true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignin) {
      await dispatch(signin({ email: inputs.email, passwd: inputs.passwd }));
      const user = JSON.parse(localStorage.getItem("profile"));
      if (user) {
        handleClose();
        history.push("/list");
      } else {
        setInputs({ ...init, email: "Invalid user" });
      }
    } else {
      if (valid.isValidEmail && valid.isValidPasswd && valid.isConfirm) {
        // 이메일과 비밀번호 형식에 맞고, 비밀번호 확인과 일치하는 경우 -> signup 진행
        console.log(inputs);
        handleClose();
      } else {
        setIsSignIn(false);
      }
      setInputs(init);
    }
    setValid(validator);
  };

  const toggle = () => {
    setInputs(init);
    setValid(validator);
    setIsSignIn((prev) => !prev);
  };

  return (
    <div>
      <Button
        variant="contained"
        className="header-btn"
        id="signIn-btn"
        onClick={handleOpen}
      >
        sign in/up
      </Button>
      <Dialog open={open} onClose={handleClose} className="signDialog">
        <DialogTitle>
          <LockIcon />
          <Typography variant="h3" gutterBottom>
            {isSignin ? "Sign In" : "Sign Up"}
          </Typography>
        </DialogTitle>
        <form onSubmit={handleSubmit} className="signform">
          <DialogContent>
            <TextField
              required
              name="email"
              label="이메일"
              type="id"
              value={inputs.email}
              helperText={!isSignin && "e.g. name@email.com"}
              error={
                !isSignin && inputs.email !== ""
                  ? hasEmailError("email")
                  : false
              }
              onChange={onChange}
              autoFocus
              fullWidth
              margin="normal"
            ></TextField>
            <TextField
              required
              name="passwd"
              label="비밀번호"
              type="password"
              value={inputs.passwd}
              helperText={!isSignin && "영문 숫자 조합 8자 이상 입력해주세요"}
              error={
                !isSignin && inputs.passwd !== ""
                  ? hasPwdError("password")
                  : false
              }
              onChange={onChange}
              fullWidth
            ></TextField>
            {!isSignin && (
              <>
                <TextField
                  required
                  name="passwdConfirm"
                  label="비밀번호 확인"
                  type="password"
                  value={inputs.passwdConfirm}
                  onChange={onChange}
                  error={inputs.passwd !== inputs.passwdConfirm ? true : false}
                  fullWidth
                  margin="normal"
                ></TextField>
                <TextField
                  required
                  name="birth"
                  label="생년월일"
                  type="date"
                  value={birthState}
                  onChange={dateChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  margin="normal"
                  valueAsDate
                ></TextField>
                <RadioGroup
                  required
                  aria-label="sex"
                  id="update-sex"
                  name="sex"
                  value={inputs.sex}
                  onChange={onChange}
                  row
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="남성"
                    labelPlacement="start"
                  ></FormControlLabel>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="여성"
                    labelPlacement="start"
                  ></FormControlLabel>
                </RadioGroup>
                <TextField
                  required
                  name="nickname"
                  label="닉네임"
                  value={inputs.nickname}
                  onChange={onChange}
                  fullWidth
                ></TextField>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              variant="contained"
              className="sign-btn"
              fullWidth
              disabled={
                isSignin
                  ? false
                  : valid.isValidEmail && valid.isValidPasswd && valid.isConfirm
                  ? false
                  : true
              }
            >
              {isSignin ? "Sign In" : "Sign Up"}
            </Button>
            <Button type="button" className="switch-text" onClick={toggle}>
              <strong>
                {isSignin ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}
              </strong>
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
