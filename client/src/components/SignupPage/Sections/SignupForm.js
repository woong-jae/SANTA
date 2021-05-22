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

export default function SignupForm() {
  const [userPWD, setPWD] = useState("");
  const [userCPWD, setCPWD] = useState("");
  const [userEMAIL, setEMAIL] = useState("");
  const [userAGE, setAGE] = useState("");
  const [userSEX, setSEX] = useState("");
  const [userNICK, setNICK] = useState("");
  const [pwd_msg, setMSG] = useState("");
  const handleClick = async () => {
    try {
      const user = {
        passwd: userPWD,
        checkpwd: userCPWD,
        email: userEMAIL,
        age: userAGE,
        sex: userSEX,
        nicknm: userNICK,
      };
      if (user.passwd !== user.checkpwd) {
        setMSG("비밀번호가 일치하지 않습니다.");
      } else if (isEmail(user.email) === false) {
        setMSG("잘못된 이메일 형식입니다.");
      }
      console.log(user);
    } catch (e) {
      setPWD("");
      setEMAIL("");
      setAGE("");
      setSEX("");
      setNICK("");
      setMSG("");
    }
  };
  return (
    <section className="Signup-body">
      <Typography component="h1" variant="h3">
        Sign up
      </Typography>
      <TextField
        required
        id="useremail"
        label="이메일"
        type="email"
        value={userEMAIL}
        onChange={({ target: { value } }) => setEMAIL(value)}
      ></TextField>
      <TextField
        required
        id="userpwd"
        label="비밀번호"
        type="password"
        value={userPWD}
        onChange={({ target: { value } }) => setPWD(value)}
      ></TextField>
      <TextField
        required
        id="usercpwd"
        label="비밀번호 확인"
        type="password"
        value={userCPWD}
        onChange={({ target: { value } }) => setCPWD(value)}
      ></TextField>
      <TextField
        required
        id="userage"
        label="연령"
        type="number"
        inputProps={{ min: 0 }}
        value={userAGE}
        onChange={({ target: { value } }) => setAGE(value)}
      ></TextField>
      <RadioGroup
        aria-label="sex"
        id="usersex"
        value={userSEX}
        onChange={({ target: { value } }) => setSEX(value)}
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
        id="usernname"
        label="닉네임"
        value={userNICK}
        onChange={({ target: { value } }) => setNICK(value)}
      ></TextField>
      <Typography className="err_msg" variant="body2">
        {pwd_msg}
      </Typography>
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
