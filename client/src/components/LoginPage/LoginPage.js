import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./Sections/LoginPage.scss";
import { DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import "./Sections/LoginPage.scss";

export default function LoginDialog() {
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
