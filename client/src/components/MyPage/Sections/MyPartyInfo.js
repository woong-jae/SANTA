import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.white,
    fontSize: 15,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const MyPartyInfo = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const userCreatedPosts = useSelector((state) => state.mypage.created);
  const userAppliedPosts = useSelector((state) => state.mypage.applied);
  const userAcceptedPosts = useSelector((state) => state.mypage.accepted);

  const handleClick = (e, _id) => {
    history.push("/post/" + _id);
  };
  
  return (
    <TableContainer component={Paper}>
      <Table
        stickyHeader
        className={classes.table}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>모임 제목</StyledTableCell>
            <StyledTableCell align="right">산 이름</StyledTableCell>
            <StyledTableCell align="right">현재 인원</StyledTableCell>
            <StyledTableCell align="right">등산 날짜</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.type === "create" ? userCreatedPosts : (props.type === "apply" ? userAppliedPosts : userAcceptedPosts)).map(
            (post) => (
              <TableRow key={post.title}>
                <StyledTableCell component="th" scope="row">
                  <Button variant="outlined" onClick={(e) => {handleClick(e, post._id)}}>
                    {post.title}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">{post.mountain}</StyledTableCell>
                <StyledTableCell align="right">
                  {post.currentMember.length + 1 + "/" + post.maxMember}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {post.date.substring(0, 4) +
                    "/" +
                    post.date.substring(5, 7) +
                    "/" +
                    post.date.substring(8, 10)}
                </StyledTableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyPartyInfo;
