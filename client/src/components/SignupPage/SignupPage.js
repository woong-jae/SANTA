import React from "react";
import CardListHeader from "../CardListPage/Sections/CardListHeader";
import SignupForm from "./Sections/SignupForm";
import "../CardListPage/Sections/CardListPage.scss";
import "./Sections/SignupPage.scss";

export default function Signup() {
  return (
    <div className="signupform">
      <CardListHeader></CardListHeader>
      <SignupForm></SignupForm>
    </div>
  );
}
