import React from "react";
import "./Sections/ShowCard.scss";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function ShowCard() {
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
          <div style={{ width: "900px" }}>
            <Typography variant="h6" id="modal-title">
              팔공산 함께 등반하실 분 구해요! 저녁도 같이 먹어요^^
            </Typography>
            <br />
            <header className="modal-header">
              <Typography>
                <strong>팔공산엄홍길</strong> 님의 모임
              </Typography>
              <Typography>
                <strong>산</strong> : 팔공산
              </Typography>
              <Typography>
                <strong>현재 인원</strong> : 2 / 4
              </Typography>
              <Typography>
                <strong>제한 연령</strong> : 20 ~ 27
              </Typography>
              <Typography>
                <strong>등반 날짜</strong> : 2021/05/15
              </Typography>
            </header>
            <br />
            <section className="modal-body">
              <div className="details-item" id="description">
                <Typography className="details-info">
                  <strong>
                    5월 15일 9시경에 팔공산 입구에서 만나서 등반할 예정이에요!
                    각자 도시락 꼭 챙겨오셔야 합니다!! 천천히 오를 예정이니 걱정
                    안하셔도 됩니다^^
                  </strong>
                </Typography>
              </div>
              <div className="details-item">
                <Typography>
                  <strong>현재 인원:</strong> 2 / 4
                </Typography>
                <div className="details-info">
                  <Typography>
                    <span>★</span>팔공산엄홍길
                  </Typography>
                  <Typography>히말라야다람쥐</Typography>
                </div>
              </div>
              <div className="details-item">
                <Typography>
                  <strong>문의</strong>
                </Typography>
                <div className="details-info">
                  <Typography>
                    카카오톡 오픈채팅: http://abcd123/efghi/
                  </Typography>
                </div>
              </div>
            </section>
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
