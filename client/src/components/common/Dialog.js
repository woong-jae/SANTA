import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "./Sections/Dialog.scss";

export default function AlertDialog(props) {
  const { classes, btnName, title, description, action } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (isCancel) => {
    setOpen(false);

    if (!isCancel)
      if (classes === "expel-btn") action(true, props.memberID);
      else action(true);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      {classes === "expel-btn" ? (
        <IconButton
          aria-label="모임에서 제외"
          className={classes}
          size="small"
          onClick={handleClickOpen}
        >
          {btnName}
        </IconButton>
      ) : (
        <Button
          id="dialog-btn"
          className={classes}
          variant="outlined"
          onClick={handleClickOpen}
        >
          {btnName}
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)}>취소</Button>
          <Button
            onClick={() => handleClose(false)}
            color="secondary"
            autoFocus
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
