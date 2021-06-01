import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Paper,
  Typography,
  Tooltip,
  Button,
  Tab,
  Tabs,
  Box,
  AppBar,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import PropTypes from "prop-types";
import CreateIcon from "@material-ui/icons/Create";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import decode from "jwt-decode";

import { deleteUser, updateUser } from "../../actions/auth";
import { getUserPosts, getUserAppliedPosts } from "../../actions/mypage";
import Dialog from "../common/Dialog";
import CardListHeader from "../CardListPage/Sections/CardListHeader";
import UpdateUser from "./Sections/UpdateUser";
import Cards from "../CardListPage/Sections/Cards";
import "./Sections/MyPage.scss";
import { useStaticState } from "@material-ui/pickers";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const MyPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isUpdate, setIsUpdate] = useState(false);
  const [menu, setMenu] = useState(null);
  const open = Boolean(menu);
  const [value, setValue] = useState("one");
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const menuOpen = (event) => {
    setMenu(event.currentTarget);
  };

  const menuClose = (event) => {
    setMenu(null);
  };

  return (
    <div className="mypage">
      <CardListHeader user={user} />
      <div className="mypage-main">
        <Paper className="mypage-paper" elevation={10}>
          <div id="back-btn" style={{display: "flex", padding: "20px"}}>
            <Button
              variant="contained"
              className="back-btn"
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowBackIcon />
            </Button>
          </div>
          <section className="mypage-body">
            <header>
              <Typography className="title" variant="h3" align="center">
                <strong>{"MY PAGE"}</strong>
              </Typography>
            </header>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                centered
              >
                <Tab value="one" label="내 정보" {...a11yProps("one")}></Tab>
                <Tab value="two" label="생성한 모임" {...a11yProps("two")} />
                <Tab
                  value="three"
                  label="참가 신청한 모임"
                  {...a11yProps("three")}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index="one">
              {!isUpdate ? (
                <section className="mypage-body">
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
                  </footer>
                </section>
              ) : isUpdate ? (
                <UpdateUser
                  user={user}
                  updateUser={handleUpdateUser}
                  update={notUpdateUser}
                />
              ) : (
                ""
              )}
            </TabPanel>
            <TabPanel value={value} index="two">
              <section>
                <div className="cardList-body">
                  {userCreatedPosts.map((post) => (
                    <Cards key={post._id} card={post} user={props.user} />
                  ))}
                </div>
              </section>
            </TabPanel>
            <TabPanel value={value} index="three">
              <section>
                <div className="cardList-body">
                  {userAppliedPosts.map((post) => (
                    <Cards key={post._id} card={post} user={props.user} />
                  ))}
                </div>
              </section>
            </TabPanel>
          </section>
        </Paper>
      </div>
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={menuOpen}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          menu={menu}
          keepMounted
          open={open}
          onClose={menuClose}
          PaperProps={{
            style: { maxHeight: 40 * 4.5, width: "20ch" },
          }}
        >
          <MenuItem onClick={menuClose}>
            <Button variant="contained" className="refresh-btn">
              <RefreshIcon />
            </Button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default MyPage;
