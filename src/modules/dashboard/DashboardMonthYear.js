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
      <div className="px-4 py-3 mb-5 border rounded border-line">
        <input
          type="month"
          name="name"
          onChange={(e) => handleOnChange(e)}
          value={values}
          placeholder="Chọn tháng năm"
        />
      </div>
    </>
  );
};

export default DashboardMonthYear;
<input type="text" />;
