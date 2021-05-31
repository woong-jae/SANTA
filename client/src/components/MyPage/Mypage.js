import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Paper, Typography, Tooltip, Button, Fab } from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import CreateIcon from "@material-ui/icons/Create";
import GroupIcon from "@material-ui/icons/Group";
import decode from "jwt-decode";

import { deleteUser, updateUser } from "../../actions/auth";
import CardListHeader from "../CardListPage/Sections/CardListHeader";
import UpdateUser from "./Sections/UpdateUser";
import Cards from "../CardListPage/Sections/Cards";
import "./Sections/Mypage.scss";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isUpdate, setIsUpdate] = useState(false);
  const posts = useSelector((state) => state.post);
  console.log(posts); // f5하면 empty ...
  const birth =
    user?.result?.birth.substring(0, 4) +
    "/" +
    user?.result?.birth.substring(5, 7) +
    "/" +
    user?.result?.birth.substring(8, 10);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    document.location.replace("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [dispatch, location]);

  const isUpdateUser = () => {
    console.log(posts);
    setIsUpdate(true);
  };

  const notUpdateUser = () => {
    console.log(posts);
    setIsUpdate(false);
  };

  const handleUpdateUser = async (updateState) => {
    console.log({ ...user?.result, ...updateState });
    setIsUpdate(false);
    await dispatch(updateUser(user?.result?._id, { ...user?.result, ...updateState }));
    document.location.reload("/myPage");
  };

  const handleDeleteUser = async () => {
    if (window.confirm("회원을 탈퇴하시겠습니까?\n삭제된 계정은 복구할 수 없습니다.")) {
      await dispatch(deleteUser(user?.result?._id));
      logout();
    }
  };

  return (
    <div className="mypage">
      <CardListHeader user={user} />
      {!isUpdate ? (
        <div className="mypage-main">
          <Paper className="mypage-paper" elevation={10}>
            <section className="mypage-body">
              <header>
                <Typography
                  className="title"
                  variant="h4"
                  style={{ textAlign: "center" }}
                >
                  <strong>My Page</strong>
                </Typography>
                <Tooltip title="내 모임 정보">
                  <Fab href="#partyinfo" className="toggle-fab">
                    <GroupIcon />
                  </Fab>
                </Tooltip>
              </header>
              <article>
                <Typography>
                  <div>
                    <strong>이메일</strong>
                  </div>
                  <div id="email">{user?.result?.email}</div>
                </Typography>
                <hr />
                <Typography>
                  <div>
                    <strong>닉네임</strong>
                  </div>
                  <div id="nickname">{user?.result?.nickname}</div>
                </Typography>
                <hr />
                <Typography>
                  <div>
                    <strong>성별</strong>
                  </div>
                  <div id="sex">
                    {user?.result?.sex === "male" ? "남성" : "여성"}
                  </div>
                </Typography>
                <hr />
                <Typography>
                  <div>
                    <strong>생년월일</strong>
                  </div>
                  <div id="birth">{birth}</div>
                </Typography>
                <hr />
              </article>
            </section>
            <footer>
              <Tooltip title="정보 변경">
                <Button
                  variant="contained"
                  id="update-btn"
                  onClick={isUpdateUser}
                >
                  <CreateIcon />
                </Button>
              </Tooltip>
              <Button
                variant="contained"
                id="delete-btn"
                onClick={handleDeleteUser}
              >
                회원 탈퇴
              </Button>
            </footer>
          </Paper>
        </div>
      ) : isUpdate ? (
        <UpdateUser
          user={user}
          updateUser={handleUpdateUser}
          update={notUpdateUser}
        />
      ) : (
        ""
      )}
      <div className="mypage-main">
        <Paper className="mypage-paper" elevation={10}>
          <section id="partyinfo" className="mypage-body">
            <header>
              <Typography
                className="title"
                variant="h4"
                style={{ textAlign: "center" }}
              >
                <strong>{"내 모임 정보"}</strong>
              </Typography>
              <Tooltip title="내 정보">
                <Fab href="#" className="toggle-fab">
                  <PersonRoundedIcon />
                </Fab>
              </Tooltip>
            </header>
            <article>
              <section>
                <div className="cardList-body">
                  {posts.map((post) =>
                    post.createdUser.email === user?.result?.email ? (
                      <Cards key={post._id} card={post} user={props.user} />
                    ) : (
                      post.currentMember.map((mem) =>
                        mem.email === user?.result?.email ? (
                          <Cards key={post._id} card={post} user={props.user} />
                        ) : (
                          ""
                        )
                      )
                    )
                  )}
                </div>
              </section>
            </article>
          </section>
        </Paper>
      </div>
    </div>
  );
};

export default MyPage;
