import React from "react";
import "./Sections/CreateCard.scss";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function CreateCard() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" className="footer-btn" onClick={handleOpen}>
        모임 만들기
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal-paper">
          <div style={{ width: "900px" }}></div>
        </div>
      </Modal>
    </div>
  );
}
