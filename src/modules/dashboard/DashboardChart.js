/** @format */

import LineChart from "components/chart/LineChart";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataChartMonthYear, getDataChartYear } from "store/auth/slice";
import DashboardMonth from "./DashboardMonth";
import DashboardYear from "./DashboardYear";

const DashboardChart = () => {
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [titleX, setTitleX] = useState("Ngày");
  const dispatch = useDispatch();
  const { revenue } = useSelector((state) => state.auth);

  useEffect(() => {
    if (month) {
      setYear(null);
      const y = month.getFullYear();
      const m = month.getMonth() + 1;
      setTitleX("Ngày");
      dispatch(getDataChartMonthYear(`${m}/${y}`));
    }
  }, [dispatch, month]);

  useEffect(() => {
    if (year) {
      setMonth(null);
      const y = year.getFullYear();
      setTitleX("Tháng");
      dispatch(getDataChartYear(y));
    }
  }, [year, dispatch]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    dispatch(getDataChartMonthYear(`${currentMonth}/${currentYear}`));
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-between py-2">
        <h3 className="text-xl font-semibold uppercase text-text1">
          Biểu đồ thống kê doanh thu
        </h3>
        <div className="flex gap-4">
          <DashboardMonth month={month} setMonth={setMonth}></DashboardMonth>
          <DashboardYear year={year} setYear={setYear}></DashboardYear>
        </div>
      </div>
      <LineChart
        labels={revenue}
        max={revenue?.length}
        titleX={titleX}
      ></LineChart>
    </>
  );
};

export default DashboardChart;
