import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Paper,
  Typography,
  Tooltip,
  Button,
  Fab,
  Divider,
  Grid,
  Container,
} from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import CreateIcon from "@material-ui/icons/Create";
import GroupIcon from "@material-ui/icons/Group";
import decode from "jwt-decode";

import { deleteUser, updateUser } from "../../actions/auth";
import { getUserPosts, getUserAppliedPosts } from "../../actions/mypage";
import CardListHeader from "../CardListPage/Sections/CardListHeader";
import UpdateUser from "./Sections/UpdateUser";
import Cards from "../CardListPage/Sections/Cards";
import Dialog from "../common/Dialog";
import "./Sections/MyPage.scss";

const MyPage = (props) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isUpdate, setIsUpdate] = useState(false);
  const userUpdated = useSelector((state) => state.auth.authData);
  const userCreatedPosts = useSelector((state) => state.mypage.created);
  const userAppliedPosts = useSelector((state) => state.mypage.applied);

  useEffect(() => {
    if (user) {
      dispatch(getUserPosts(user?.result?._id));
      dispatch(getUserAppliedPosts(user?.result?._id));
    }
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [userUpdated]);
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

  const isUpdateUser = () => {
    setIsUpdate(true);
  };

  const notUpdateUser = () => {
    setIsUpdate(false);
  };

  const handleUpdateUser = async (updateState) => {
    setIsUpdate(false);
    await dispatch(
      updateUser(user?.result?._id, { ...user?.result, ...updateState })
    );
  };

  const handleDeleteUser = async (isDelete) => {
    if (isDelete) {
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
                  variant="h3"
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
              <Dialog
                btnName="회원 탈퇴"
                title="회원을 탈퇴하시겠습니까?"
                description="삭제된 계정은 복구할 수 없습니다."
                action={handleDeleteUser}
              />
              {/* <Button
                variant="contained"
                id="delete-btn"
                onClick={handleDeleteUser}
              >
                회원 탈퇴
              </Button> */}
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
              <Typography className="title" variant="h3" align="center">
                <strong>{"내 모임 정보"}</strong>
              </Typography>
              <Tooltip title="내 정보">
                <Fab href="#" className="toggle-fab">
                  <PersonRoundedIcon />
                </Fab>
              </Tooltip>
            </header>
            <Typography
              variant="h6"
              align="center"
              style={{ fontWeight: "800" }}
              paragraph
            >
              {"생성한 모임"}
            </Typography>
            <Divider />
            <article>
              <section>
                <div className="cardList-body">
                  {userCreatedPosts.map((post) => (
                    <Cards key={post._id} card={post} user={props.user} />
                  ))}
                </div>
              </section>
            </article>
            <Typography
              variant="h6"
              align="center"
              style={{ fontWeight: "800" }}
              paragraph
            >
              {"참가 신청한 모임"}
            </Typography>
            <Divider />
            <article>
              <section>
                <div className="cardList-body">
                  {userAppliedPosts.map((post) => (
                    <Cards key={post._id} card={post} user={props.user} />
                  ))}
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
