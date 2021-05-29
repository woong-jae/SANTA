import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";

function TabPanel(props) {
  const { value, index } = props;

  return <Typography component="div" hidden={value !== index}></Typography>;
}

TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `verical-tabpanel-${index}`,
  };
}

export default function MypageTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        orientation="horizontal"
        value={value}
        onChange={handleChange}
        aria-label="horizon-tabs"
      >
        <Tab label="내 정보" {...a11yProps(0)} />
        <Tab label="내 정보 변경" {...a11yProps(1)} />
        <Tab label="내 모임 정보" {...a11yProps(2)} />
        <Tab label="비밀번호 변경" {...a11yProps(3)} />
        <Tab label="회원 탈퇴" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        내 정보
      </TabPanel>
      <TabPanel value={value} index={1}>
        내 정보 변경
      </TabPanel>
      <TabPanel value={value} index={2}>
        내 모임 정보
      </TabPanel>
      <TabPanel value={value} index={3}>
        비밀번호 변경
      </TabPanel>
      <TabPanel value={value} index={4}>
        회원 탈퇴
      </TabPanel>
    </div>
  );
}
