import React, { useState } from "react";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@material-ui/core";
import { isEmail, isLength, isAlphanumeric } from "validator";

export default function SignupForm() {
  const [userID, setID] = useState("");
  const [userPWD, setPWD] = useState("");
  const [userCPWD, setCPWD] = useState("");
  const [userEMAIL, setEMAIL] = useState("");
  const [userAGE, setAGE] = useState("");
  const [userSEX, setSEX] = useState("");
  const [userNICK, setNICK] = useState("");

  const handleClick = async () => {
    try {
      const user = {
        userid: userID,
        passwd: userPWD,
        checkpwd: userCPWD,
        email: userEMAIL,
        age: userAGE,
        sex: userSEX,
        nicknm: userNICK,
      };
      console.log(user);
    } catch (e) {
      setID("");
      setPWD("");
      setEMAIL("");
      setAGE("");
      setSEX("");
      setNICK("");
    }
  };
  return (
    <section className="Signup-body">
      <Typography variant="h2">Sign up</Typography>
      <TextField
        required
        label="아이디"
        type="id"
        value={userID}
        onChange={({ target: { value } }) => setID(value)}
      ></TextField>
      <TextField
        required
        label="비밀번호"
        type="password"
        value={userPWD}
        onChange={({ target: { value } }) => setPWD(value)}
      ></TextField>
      <TextField
        required
        label="비밀번호 확인"
        type="password"
        value={userCPWD}
        onChange={({ target: { value } }) => setCPWD(value)}
      ></TextField>
      <TextField
        required
        label="이메일"
        type="email"
        value={userEMAIL}
        onChange={({ target: { value } }) => setEMAIL(value)}
      ></TextField>
      <TextField
        required
        label="연령"
        type="number"
        inputProps={{ min: 0 }}
        value={userAGE}
        onChange={({ target: { value } }) => setAGE(value)}
      ></TextField>
      <RadioGroup
        aria-label="sex"
        name="sex"
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
        id="userNickname"
        label="닉네임"
        value={userNICK}
        onChange={({ target: { value } }) => setNICK(value)}
      ></TextField>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="signin-btn"
        onClick={handleClick}
      >
        REGISTER
      </Button>
    </section>
  );
}
