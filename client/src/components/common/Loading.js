import React, { useState } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

const Loading = () => {
  const [backOpen, setbackOpen] = useState(true);
  const backdropClose = () => {
    setbackOpen(false);
  };

  return (
    <Backdrop
      open={backOpen}
      onClick={backdropClose}
      className="backdrop"
      transitionDuration="1000"
    >
      <CircularProgress color="inherit"></CircularProgress>
    </Backdrop>
  );
};

export default Loading;