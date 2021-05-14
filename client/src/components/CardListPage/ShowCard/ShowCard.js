import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "3.5%",
    left: "16%",
    height: "94%",
    width: "70%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ShowCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <Typography
        variant="h6"
        id="modal-title"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        팔공산 함께 등반하실 분 구해요! 저녁도 같이 먹어요^^ (20대만)
      </Typography>
      <br />
      <header className="modal-header">
        <Typography>
          <strong>산</strong> : 팔공산
        </Typography>
        <Typography>
          <strong>현재 인원</strong> : 2
        </Typography>
        <Typography>
          <strong>제한 인원</strong> : 4
        </Typography>
        <Typography>
          <strong>날짜</strong> : 2021/05/15
        </Typography>
      </header>
      <br />
      <section>
        <div>
          <Typography>
            가나다라마바사아자차카타파하. 가나다라마바사아자차카타파하.
            가나다라마바사아자차카타파하!! 감사합니다~
          </Typography>
        </div>
        <div></div>
      </section>
    </div>
  );

  return (
    <div>
      <Button variant="contained" className="card-btn" onClick={handleOpen}>
        ➜
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
