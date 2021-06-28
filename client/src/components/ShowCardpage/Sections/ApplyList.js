import React from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import { blue } from "@material-ui/core/colors";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";

import "./ApplyList.scss";
import { acceptMember, unApplyPost } from "../../../actions/show";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  male: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  female: {
    color: "hotpink",
    backgroundColor: "pink",
  }
}));

function SimpleDialog(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { onClose, open, card, appliedMember } = props;

  const handleClose = () => {
    onClose();
  };

  const handleAdmission = (member) => {
    dispatch(acceptMember(card._id, { userID: member?._id }));
    onClose();
  };

  const handleReject = (member) => {
    dispatch(unApplyPost(card._id, { userID: member?._id }));
    onClose();
  };

  return (
    <Dialog
      className="apply-list-paper"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">참가 대기 목록</DialogTitle>
      <List>
        {appliedMember?.map((member) => (
          <ListItem key={member?._id} className="apply-list-item">
            <ListItemAvatar>
              <Avatar className={member?.sex === "male" ? classes.male : classes.female}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${member?.nickname}`} />
            <div className="apply-list-item-btn">
              <Button
                className="admission-btn"
                onClick={() => handleAdmission(member)}
              >
                승인
              </Button>
              <Button
                className="reject-btn"
                onClick={() => handleReject(member)}
              >
                거절
              </Button>
            </div>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ApplyList(props) {
  const { card } = props;
  const appliedMember = card.appliedMember;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.root}
        id="apply-list-btn"
        onClick={handleClickOpen}
      >
        <Badge badgeContent={appliedMember.length} color="error">
          <MailIcon />
        </Badge>
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        card={card}
        appliedMember={appliedMember}
      />
    </div>
  );
}
