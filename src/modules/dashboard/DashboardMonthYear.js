/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DashboardMonthYear = ({ setSelectMonthYear }) => {
  const [values, setValues] = useState("");
  const handleOnChange = (e) => {
    setValues(e.target.value);
  };

  useEffect(() => {
    if (values) {
      setSelectMonthYear(values);
    }
  }, [values, setSelectMonthYear]);
  return (
    <>
      <input
        type="text"
        name="monthyear"
        onFocus={(e) => (e.target.type = "month")}
        onChange={(e) => handleOnChange(e)}
        placeholder="Lọc theo tháng"
        className="w-[220px] px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-grayf3 focus:border-primary"
      />
    </>
  );
};

export default DashboardMonthYear;
<input type="text" />;
