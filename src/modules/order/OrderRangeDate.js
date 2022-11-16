/** @format */

import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import "react-datepicker/dist/react-datepicker.css";

const OrderRangeDate = ({ startDate, setStartDate, endDate, setEndDate }) => {
  registerLocale("vi", vi);
  return (
    <>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        locale="vi"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Ngày bắt đầu"
        className="px-6 py-4 text-sm font-medium border cursor-pointer rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-grayf3 focus:border-primary"
      />
      <span>đến</span>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        locale="vi"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="Ngày kết thúc"
        className="px-6 py-4 text-sm font-medium border cursor-pointer rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-grayf3 focus:border-primary"
      />
    </>
  );
};

export default OrderRangeDate;
