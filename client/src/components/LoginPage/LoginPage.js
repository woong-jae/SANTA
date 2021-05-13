import React from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
// import { Form, Button } from "react-bootstrap";
// import Modal from "@material-ui/core/Modal";
import "./Sections/LoginPage.scss";

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        login
      </button>
      <Dialog open={open} onClose={handleClose}>
        <form autoComplete="off">
          <TextField id="outlined-basic" label="산/지역명"></TextField>
          <TextField
            id="outlined-basic"
            label="동행 인원"
            type="number"
            defaultValue="0"
            inputProps={{ min: 0 }}
            InputLabelProps={{ shrink: true }}
          ></TextField>
          <br></br>
        </form>
        {/* <Form>
          <Form.Group controlId="formId">
            <Form.Label>아이디: </Form.Label>
            <Form.Control type="userId" placeholder="Enter your ID" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formPwd">
            <Form.Label>비밀번호: </Form.Label>
            <Form.Control type="userPwd" placeholder="Enter your PWD" />
          </Form.Group>

          <Form.Group controlId="formAge">
            <Form.Label>연령: </Form.Label>
            <Form.Control type="userAge" placeholder="Enter your Age" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="남성" />
            <Form.Check type="checkbox" label="여성" />
          </Form.Group>

          <Form.Group controlId="formNick">
            <Form.Label>닉네임: </Form.Label>
            <Form.Control type="userNick" placeholder="Enter your Nickname" />
          </Form.Group>

          <Button variant="primary" type="submit">
            가입하기
          </Button>
        </Form> */}
      </Dialog>
    </div>
  );
}
