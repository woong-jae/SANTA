import React from "react";
import CardListHeader from "../CardListPage/Sections/CardListHeader";
import "./Sections/MyPage.scss";

const MyPage = () => {
  return (
    <div className="mypage">
      <CardListHeader />
      <section className="mypage-body">
        <article></article>
      </section>
      <footer></footer>
    </div>
  );
};

export default MyPage;
