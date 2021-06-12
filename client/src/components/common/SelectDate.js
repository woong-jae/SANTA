import "date-fns";
import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "./Sections/SelectDate.scss"

export default function MaterialUIPickers(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.getDateValue(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="yyyy-MM-dd"
        margin="normal"
        minDate={new Date()}
        id="input-date"
        className="header-input"
        label="가고 싶은 날짜"
        value={props.value ? props.value : selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        autoOk={true}
      />
    </MuiPickersUtilsProvider>
  );
}
