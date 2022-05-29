import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);

import "react-datepicker/dist/react-datepicker.css";
import addZeroBeforeDateNumber from "../../utils/functions";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ExamplePicker = ({ selDate, changeDate }) => {
  const [startDate, setStartDate] = useState(selDate);

  function handleOnChange(e) {
    // console.log("date:", e);
    const y = new Date(e).getFullYear();
    const m = new Date(e).getMonth() + 1;
    const d = new Date(e).getDate();

    const newDate = new Date(y, m - 1, d);
    const newUrl =
      y.toString() + addZeroBeforeDateNumber(m) + addZeroBeforeDateNumber(d);

    // console.log("changement:", y, m, d);
    setStartDate(newDate);

    changeDate(newUrl);

    // setSearchDate(e.target.value);
    // setStartDate(date);
  }
  // console.log("startDatePicker: ", startDate);

  return (
    <DatePicker selected={startDate} onChange={handleOnChange} locale="fr" />
  );
};

export default ExamplePicker;
