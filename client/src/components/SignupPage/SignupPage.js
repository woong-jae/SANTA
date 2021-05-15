import React from "react";
import { TextField } from "@material-ui/core";
import CardListHeader from "../CardListPage/Sections/CardListHeader";
import "../CardListPage/Sections/CardListPage.scss";
import "./Sections/SignupPage.scss";

export default function Signup() {
  return (
    <div>
      <CardListHeader></CardListHeader>
      <section className="Signup-body">
        <TextField id="userId" label="아이디" type="id"></TextField>
        <TextField id="userPwd" label="비밀번호" type="password"></TextField>
        <TextField
          id="userPwd_Check"
          label="비밀번호 확인"
          type="password"
        ></TextField>
        <TextField id="userEmail" label="이메일" type="email"></TextField>
        <TextField id="userAge" label="연령" type="number"></TextField>
        <TextField id="userSex" label="성별" type="sex"></TextField>
        <TextField id="userNickname" label="닉네임"></TextField>
      </section>
    </div>
  );
}
