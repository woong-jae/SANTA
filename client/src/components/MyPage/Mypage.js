import React from "react";
import { Typography } from "@material-ui/core";

import CardListHeader from "../CardListPage/Sections/CardListHeader";
import "./Sections/Mypage.scss";

const MyPage = () => {
  return (
    <div className="mypage">
      <CardListHeader />
      <div className="mypage-main">
        <section className="mypage-body">
          <header>
            <Typography variant="h4">
              <strong>My Page</strong>
            </Typography>
          </header>
          <article>
            <Typography>
              <div>
                <strong>닉네임</strong>
              </div>
              <div id="nickname">팔공산엄홍길</div>
            </Typography>
            <hr />
            <Typography>
              <div>
                <strong>성별</strong>
              </div>
              <div id="sex">남성</div>
            </Typography>
            <hr />
            <Typography>
              <div>
                <strong>생년월일</strong>
              </div>
              <div id="birth">1998년 12월 25일</div>
            </Typography>
            <hr />
            <Typography>
              <div>
                <strong>이메일 주소</strong>
              </div>
              <div id="email">tack123@knu.ac.kr</div>
            </Typography>
            <hr />
            <Typography>
              <div>
                <strong>아이디</strong>
              </div>
              <div id="id">tack123</div>
            </Typography>
            <hr />
            <Typography>
              <div>
                <strong>비밀번호</strong>
              </div>
              <div id="password">**********</div>
            </Typography>
            <hr />
          </article>
        </section>
        <footer></footer>
      </div>
    </div>
  );
};

export default MyPage;
