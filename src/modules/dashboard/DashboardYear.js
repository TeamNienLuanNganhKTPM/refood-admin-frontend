/** @format */

import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import "react-datepicker/dist/react-datepicker.css";

const DashboardYear = ({ year, setYear }) => {
  registerLocale("vi", vi);
  return (
    <div>
      <DatePicker
        selected={year}
        onChange={(date) => setYear(date)}
        locale="vi"
        dateFormat="yyyy"
        showYearPicker
        yearItemNumber={9}
        placeholderText="Lọc theo năm"
        className="p-2 border rounded cursor-pointer bg-grayf3 text-text2 border-line"
      />
    </div>
  );
};

export default DashboardYear;
