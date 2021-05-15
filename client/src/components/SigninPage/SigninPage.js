import React from "react";
import {
  Dialog,
  Button,
  TextField,
  FormControlLabel,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  Checkbox,
} from "@material-ui/core";
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
          <Typography component="h1" variant="h5">
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
            type="passward"
            fullWidth
          ></TextField>
          <FormControlLabel
            control={<Checkbox value="remember" className="remember-check" />}
            label="Remember me"
          />
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
        <Grid container>
          <Grid item xs>
            <Link to="/" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid>
            <Link to="/Signup" variant="body2">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
