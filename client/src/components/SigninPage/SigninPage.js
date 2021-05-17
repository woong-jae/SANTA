import React, { useState } from "react";
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import "./Sections/SigninPage.scss";
import * as userAPI from "../../api/user";

export default function SigninDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [userID, setID] = useState("");
  const [userPWD, setPWD] = useState("");

  const handleClick = async () => {
    try {
      const user = {
        userid: userID,
        passwd: userPWD,
      };
      const { data } = await userAPI.loginUser(user);
      console.log(data);
    } catch (e) {
      console.log(e);
      setID("");
      setPWD("");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        className="header-btn"
        id="signIn-btn"
        onClick={handleOpen}
      >
        sign in
      </Button>
      <Dialog open={open} onClose={handleClose} className="signinDialog">
        <DialogTitle className="dialogTitle">
          <LockIcon />
          <Typography variant="h3" gutterBottom>
            Sign In
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            id="userId"
            label="아이디"
            margin="normal"
            type="id"
            value={userID}
            onChange={({ target: { value } }) => setID(value)}
            fullWidth
          ></TextField>
          <TextField
            required
            id="userPwd"
            label="비밀번호"
            margin="normal"
            type="password"
            value={userPWD}
            onChange={({ target: { value } }) => setPWD(value)}
            fullWidth
          ></TextField>
          {/* <FormControlLabel
            control={<Checkbox value="remember" className="remember-check" />}
            label="Remember me"
          /> */}
          <br></br>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="signin-btn"
            onClick={handleClick}
          >
            Sign In
          </Button>
        </DialogActions>
        <Link to="/signup" variant="body2">
          Sign Up
        </Link>
      </Dialog>
    </div>
  );
}
