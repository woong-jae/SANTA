import React from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  console.log(row);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="right">{row.mountain}</TableCell>
        <TableCell align="right">{row.currentMember.length + 1 + "/" + row.maxMember}</TableCell>
        <TableCell align="right">{row.date.substring(0, 4) +
                    "/" +
                    row.date.substring(5, 7) +
                    "/" +
                    row.date.substring(8, 10)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                모임 정보
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>내용</TableCell>
                    <TableCell>제한 연령</TableCell>
                    <TableCell align="right">연락망</TableCell>
                    <TableCell align="right">현재 모임원</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                    {row.description}
                    </TableCell>
                    <TableCell>
                      {row.ageLimit[0] + "~" + row.ageLimit[1]}</TableCell>
                    <TableCell align="right">{row.contact}</TableCell>
                    <TableCell align="right">
                      {row.currentMember.map((cm) => (
                        cm
                      ))}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const MyPartyInfo = (props) => {
  const userCreatedPosts = useSelector((state) => state.mypage.created);
  const userAppliedPosts = useSelector((state) => state.mypage.applied);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>모임 제목</TableCell>
            <TableCell align="right">산 이름</TableCell>
            <TableCell align="right">현재 인원</TableCell>
            <TableCell align="right">등산 날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.type === "create" ? userCreatedPosts : userAppliedPosts).map(
            (post) => (
              <Row key={post.title} row={post} type={props} />
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyPartyInfo;