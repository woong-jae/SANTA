import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Tooltip, Fab, Zoom } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import { getUserAcceptedPosts, getUserAppliedPosts, getUserPosts } from "../../actions/mypage";
import { getPostByMt, getPosts } from "../../actions/post";

export default function Refresh(props) {
  const location = useLocation();
  const dispatch = useDispatch();

  const refresh = () => {
    if (location.pathname === "/mypage") {
      dispatch(getUserPosts(props.user?.result?._id));
      dispatch(getUserAppliedPosts(props.user?.result?._id));
      dispatch(getUserAcceptedPosts(props.user?.result?._id));
    }
    if (location.pathname === "/list") {
      if (location.search === "") dispatch(getPosts());
      else if (location.state.mountain === "") dispatch(getPosts());
      else dispatch(getPostByMt(location.state.mountain, location.state.date, location.state.peopleNum));
    }
  };

  return (
    <div>
      <Tooltip title={"새로 고침"} placement="left" TransitionComponent={Zoom}>
        <Fab aria-label="refresh" className="refresh-btn" onClick={refresh}>
          <RefreshIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
