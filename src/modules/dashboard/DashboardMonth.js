/** @format */

import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import "react-datepicker/dist/react-datepicker.css";

const DashboardMonth = ({ month, setMonth }) => {
  registerLocale("vi", vi);
  return (
    <div>
      <DatePicker
        selected={month}
        onChange={(date) => setMonth(date)}
        locale="vi"
        dateFormat="MM-yyyy"
        showMonthYearPicker
        placeholderText="Lọc theo tháng"
        className="p-2 border rounded cursor-pointer bg-grayf3 text-text2 border-line"
      />
    </div>
  );
};

export default DashboardMonth;
