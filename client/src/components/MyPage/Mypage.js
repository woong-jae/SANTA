import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import { Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import decode from "jwt-decode";

import { deleteUser, updateUser } from "../../actions/auth";
import CardListHeader from "../CardListPage/Sections/CardListHeader";
import UpdateUser from "./Sections/UpdateUser";
import CardListBody from "../CardListPage/Sections/CardListBody";
import "./Sections/Mypage.scss";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isUpdate, setIsUpdate] = useState(false);
  const [isParty, setIsParty] = useState(false);
  const { card, handleShow, handleUpdate } = props;

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
    setIsUpdate(true);
  };

  const handleUpdateUser = async (updateState) => {
    console.log({ ...user?.result, ...updateState });
    await dispatch(
      updateUser(user?.result?._id, { ...user?.result, ...updateState })
    );
    document.location.reload("/myPage");
    setIsUpdate(false);
  };

  const handleDeleteUser = () => {
    if (
      window.confirm(
        "회원을 탈퇴하시겠습니까?\n삭제된 계정은 복구할 수 없습니다."
      )
    ) {
      dispatch(deleteUser(user?.result?._id));
      logout();
    }
  };

  const toggle = () => {
    setIsParty((prev) => !prev);
  };

  return (
    <div className="mypage">
      <CardListHeader user={user} />
      {!isUpdate && !isParty ? (
        <>
          <div className="mypage-main">
            <Paper className="mypage-paper" elevation={10}>
              <section className="mypage-body">
                <header>
                  <Typography variant="h4" style={{ textAlign: "center" }}>
                    <strong>My Page</strong>
                  </Typography>
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
                <div>
                  <Button
                    variant="contained"
                    id="update-btn"
                    onClick={isUpdateUser}
                  >
                    <CreateIcon />
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    id="delete-btn"
                    onClick={handleDeleteUser}
                  >
                    회원 탈퇴
                  </Button>
                </div>
              </footer>
            </Paper>
          </div>
        </>
      ) : isUpdate ? (
        <UpdateUser user={user} updateUser={handleUpdateUser} />
      ) : (
        <div className="mypage-main">
          <Paper className="mypage-paper" elevation={10}>
            <section className="mypage-body">
              <header>
                <Typography variant="h4" style={{ textAlign: "center" }}>
                  <strong>내 모임 정보</strong>
                </Typography>
              </header>
              <article>
                <CardListBody user={props.user} />
              </article>
            </section>
          </Paper>
        </div>
      )}
      <div>
        <Button variant="contained" id="nextpage" onClick={toggle}>
          {!isParty ? "내 모임 정보 보기" : "내 정보 보기"}
        </Button>
      </div>
    </div>
  );
};

export default MyPage;
