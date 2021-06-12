import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Tooltip, Fab, Zoom } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import { getUserAppliedPosts, getUserPosts } from "../../actions/mypage";

export default function Refresh(props) {
  const location = useLocation();
  const dispatch = useDispatch();

  const refresh = () => {
    if (location.pathname === "/mypage") {
      dispatch(getUserPosts(props.user?.result?._id));
      dispatch(getUserAppliedPosts(props.user?.result?._id));
    }
    if (location.pathname === "/list") {
      console.log("파라미터 넘겨서 dispatch 호출해야 함"); // 나중에 구현
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
