import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
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
import { isEmail } from "validator";

import { signin } from "../../actions/auth";
import {isPassword} from "../common/check";
import "./Sections/SignPage.scss";

export default function SigninDialog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isSignin, setIsSignIn] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setInputs(init);
    setIsSignIn(true);
    setOpen(false);
  };
  const init = {
    email: "",
    passwd: "",
    passwdConfirm: "",
    birth: new Date(),
    sex: "",
    nickname: "",
    error: false,
  };
  const [inputs, setInputs] = useState(init);

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignin) {
      await dispatch(signin({email: inputs.email, passwd: inputs.passwd}));
      const user = JSON.parse(localStorage.getItem('profile'));
      if (user) {
        handleClose();
        history.push('/list');
      } else {
        setInputs({...init, email: "Invalid user"});
      }
    } else {
      // 1.이메일 중복 여부 2. 비밀번호 형식 여부
      // 3. 비밀번호 일치여부 4. 모든 항목 입력 여부

      if (!isPassword(inputs.passwd)) {
        setInputs({[inputs.error]: true})
      }
      if (inputs.passwd !== inputs.passwdConfirm) {

      }
      
      setIsSignIn(false);
      setInputs(init);
    }
  };

  const toggle = () => {
    setInputs(init);
    setIsSignIn(prev => !prev);
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
              type="email"
              value={inputs.email}
              helperText="e.g. name@email.com"
              onChange={onChange}
              autoFocus
              fullWidth
            ></TextField>
            <TextField
              required
              name="passwd"
              label="비밀번호"
              type="password"
              value={inputs.passwd}
              helperText="최소 8자 이상 입력해주세요"
              onChange={onChange}
              fullWidth
              error={inputs.error}
            ></TextField>
            {!isSignin && (
              <>
                <TextField
                  required
                  name="passwdConfirm"
                  label="비밀번호 확인"
                  type="password"
                  fullWidth
                  value={inputs.passwdConfirm}
                  helperText={inputs.error}
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
          </DialogContent>
          <DialogActions>
            <Button
                  type="submit"
                  variant="contained"
                  className="sign-btn"
                  fullWidth
                >
                  {isSignin ? "Sign In" : "Sign Up"}
                </Button>
                <Button
                  type="button"
                  className="switch-text"
                  onClick={toggle}
                >
                  <strong>{isSignin? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}</strong>
              </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
