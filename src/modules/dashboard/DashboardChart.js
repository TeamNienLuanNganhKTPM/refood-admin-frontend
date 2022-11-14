/** @format */

import LineChart from "components/chart/LineChart";
import useRevenue from "hooks/useRevenue";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataChartMonthYear } from "store/auth/slice";

const DashboardChart = () => {
  const [selectMonthYear, setSelectMonthYear] = useState("");
  const { setData, day, value, max } = useRevenue();
  const dispatch = useDispatch();
  const { revenue } = useSelector((state) => state.auth);

  useEffect(() => {
    if (revenue) {
      setData(revenue);
    }
  }, [revenue, setData]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const together = [currentYear, currentMonth].join("-");
    setSelectMonthYear(together);
  }, []);

  useEffect(() => {
    if (selectMonthYear) {
      const year = Number(selectMonthYear.slice(0, 4));
      const month = Number(selectMonthYear.slice(5, 7));
      dispatch(getDataChartMonthYear(`${month}/${year}`));
    }
  }, [dispatch, selectMonthYear]);
  return (
    <>
      <LineChart labels={day} revenue={value} max={max}></LineChart>
    </>
  );
};

export default DashboardChart;
