import React from "react";
import {
  Dialog,
  Button,
  TextField,
  FormControlLabel,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Checkbox,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import "./Sections/SigninPage.scss";

export default function SigninDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
          <Typography component="h1" variant="h3" gutterBottom>
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
            fullWidth
          ></TextField>
          <TextField
            required
            id="userPwd"
            label="비밀번호"
            margin="normal"
            type="password"
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
