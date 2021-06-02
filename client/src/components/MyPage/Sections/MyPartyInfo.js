import React, { useState } from "react";
import { useSelector } from "react-redux";
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

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const MyPartyInfo = (props) => {
  const classes = useStyles();
  const userCreatedPosts = useSelector((state) => state.mypage.created);
  const userAppliedPosts = useSelector((state) => state.mypage.applied);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>모임 제목</StyledTableCell>
            <StyledTableCell align="right">산 이름</StyledTableCell>
            <StyledTableCell align="right">현재 인원</StyledTableCell>
            <StyledTableCell align="right">등산 날짜</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.type === "create" ? userCreatedPosts : userAppliedPosts).map(
            (post) => (
              <StyledTableRow key={post.title}>
                <StyledTableCell component="th" scope="row">
                  <Button variant="outlined">
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
              </StyledTableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyPartyInfo;
