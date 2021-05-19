import React from "react";
import "./Sections/ShowCard.scss";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

export default function ShowCard(props) {
  const { card } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <div className="modal-paper">
          <div className="modal-screen">
            <Typography variant="h6" id="modal-title">
              {card.title}
            </Typography>
            <br />
            <header className="modal-header">
              <Typography>
                <strong>팔공산엄홍길</strong> 님의 모임
              </Typography>
              <Typography>
                <strong>산</strong> : {card.mountain}
              </Typography>
              <Typography>
                <strong>현재 인원</strong> : 2 / {card.peopleNum}
              </Typography>
              <Typography>
                <strong>제한 연령</strong> : {card.age}
              </Typography>
              <Typography>
                <strong>등반 날짜</strong> : {card.date}
              </Typography>
            </header>
            <section className="modal-body">
              <div className="details-item" id="modal-description">
                <Typography className="details-info">
                  <strong>{card.description}</strong>
                </Typography>
              </div>
              <div className="details-item">
                <div className="details-info" id="modal-contact">
                  <Typography>
                    <span>
                      <ContactPhoneIcon id="contact-icon" />
                      <strong> 연락망</strong>
                    </span>
                    <div>{card.contact}</div>
                  </Typography>
                </div>
              </div>
            </section>
            <aside>
              <div className="modal-people">
                <Typography>
                  <strong>현재 인원:</strong> 2 / {card.peopleNum}
                </Typography>
                <div className="people-info">
                  <Typography>
                    <span>★</span>팔공산엄홍길
                  </Typography>
                  <Typography>히말라야다람쥐</Typography>
                </div>
              </div>
            </aside>
            <footer className="modal-footer">
              <Button variant="contained" className="apply-btn">
                참가 신청
              </Button>
            </footer>
          </div>
        </div>
      </Modal>
    </div>
  );
}
