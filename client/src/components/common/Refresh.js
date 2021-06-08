import React from "react";
import { Tooltip, Fab, Zoom } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

export default function Refresh() {
  const refresh = () => {
    window.location.reload(false);
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
