import React, { useState } from "react";
import {
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@material-ui/core";
import { isEmail } from "validator";

// const inital = { email, passwd, passwdConfirm, birth, sex, nickname };

export default function SignupForm() {
  const [isSignin, setIsSignIn] = useState(false);
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
  const handleClick = () => {
    console.log(inputs);
    //   try {
    //     const user = {
    //       email: userEMAIL,
    //       passwd: userPWD,
    //       checkpwd: userCPWD,
    //       age: userAGE,
    //       sex: userSEX,
    //       nicknm: userNICK,
    //     };
    //     if (isEmail(user.email) === false) {
    //       setMSG("잘못된 이메일 형식입니다.");
    //     } else if (user.passwd !== user.checkpwd) {
    //       setMSG("비밀번호가 일치하지 않습니다.");
    //     }
    //     console.log(user);
    //   } catch (e) {
    //     setEMAIL("");
    //     setPWD("");
    //     setCPWD("");
    //     setAGE("");
    //     setSEX("");
    //     setNICK("");
    //     setMSG("");
    //   }
  };
  return (
    <section className="Signup-body">
      <Typography component="h1" variant="h3">
        {isSignin && "Sign in"}
      </Typography>
      <TextField
        required
        name="email"
        label="이메일"
        type="email"
        value={inputs.email}
        onChange={onChange}
      ></TextField>
      <TextField
        required
        name="passwd"
        label="비밀번호"
        type="password"
        value={inputs.passwd}
        onChange={onChange}
      ></TextField>
      <TextField
        required
        name="passwdConfirm"
        label="비밀번호 확인"
        type="password"
        value={inputs.passwdConfirm}
        onChange={onChange}
      ></TextField>
      <TextField
        required
        name="birth"
        label="연령"
        type="number"
        inputProps={{ min: 0 }}
        value={inputs.birth}
        onChange={onChange}
      ></TextField>
      <RadioGroup
        aria-label="sex"
        name="sex"
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
        value={inputs.nickname}
        onChange={onChange}
      ></TextField>
      {/* <Typography className="err_msg" variant="body2">
        {pwd_msg}
      </Typography> */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="reg-btn"
        onClick={handleClick}
      >
        REGISTER
      </Button>
    </section>
  );
}
