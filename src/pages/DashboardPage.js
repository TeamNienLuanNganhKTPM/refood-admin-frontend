/** @format */

import LayoutDashboardTable from "layout/LayoutDashboardTable";
import DashboardMonthYear from "modules/dashboard/DashboardMonthYear";
import ListFoodNew from "modules/foods/ListFoodNew";
import ListFoodPopular from "modules/foods/ListFoodPopular";
import ListOrderDashboard from "modules/order/ListOrderDashboard";
import ListPartyDashboard from "modules/party/ListPartyDashboard";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAnalysicAllTime,
  getAnalysicTimeWithMonthYear,
} from "store/auth/slice";
import kFormat from "utils/kFormat";

const DashboardPage = () => {
  const [selectMonthYear, setSelectMonthYear] = useState("");

  const dispatch = useDispatch();
  const { analysis } = useSelector((state) => state.auth);

  useEffect(() => {
    if (selectMonthYear) {
      const year = Number(selectMonthYear.slice(0, 4));
      const month = Number(selectMonthYear.slice(5, 7));
      if (month && year) {
        dispatch(getAnalysicTimeWithMonthYear({ month: month, year: year }));
      }
    }
  }, [dispatch, selectMonthYear]);

  useEffect(() => {
    function fetchAnalysicAllTime() {
      dispatch(getAnalysicAllTime());
    }
    fetchAnalysicAllTime();
  }, [dispatch]);

  return (
    <div>
      <LayoutDashboardTable title="Trang chủ">
        <div className="flex items-end justify-end gap-4">
          <span className="mb-5 font-medium text-text1">
            Lọc theo tháng năm:
          </span>
          <DashboardMonthYear
            setSelectMonthYear={setSelectMonthYear}
          ></DashboardMonthYear>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="flex flex-col gap-2 p-5 rounded shadow-lg shadow-primary-500/50 bg-primary bg-opacity-20">
            <span className="text-2xl font-semibold uppercase cursor-default text-primary">
              Món ăn
            </span>
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-3">
                <span className="text-2xl font-semibold text-primary text-opacity-70">
                  {kFormat(analysis?.num_of_foods)}
                </span>
                <Link to="/product" className="text-primary">
                  Xem tất cả
                </Link>
              </div>
              <div className="p-3 text-white rounded-lg bg-primary">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-5 rounded shadow-lg shadow-secondary-500/50 bg-secondary bg-opacity-20">
            <span className="text-2xl font-semibold uppercase cursor-default text-secondary">
              Đơn hàng
            </span>
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-3">
                <span className="text-2xl font-semibold text-secondary text-opacity-70">
                  {kFormat(analysis?.num_of_order)}
                </span>
                <Link to="/order" className="text-secondary">
                  Xem tất cả
                </Link>
              </div>
              <div className="p-3 text-white rounded-lg bg-secondary">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-5 rounded shadow-lg shadow-third-500/50 bg-third bg-opacity-20">
            <span className="text-2xl font-semibold uppercase cursor-default text-third">
              Khách hàng
            </span>
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-3">
                <span className="text-2xl font-semibold text-third text-opacity-70">
                  {kFormat(analysis?.num_of_customers)}
                </span>
                <Link to="/" className="text-third">
                  Xem chi tiết
                </Link>
              </div>
              <div className="p-3 text-white rounded-lg bg-third">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-5 rounded shadow-lg shadow-four-500/50 bg-four bg-opacity-20">
            <span className="text-2xl font-semibold uppercase cursor-default text-four">
              Doanh thu
            </span>
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-3">
                <span className="text-2xl font-semibold text-four text-opacity-70">
                  {kFormat(analysis?.total_revenue) || 0 + "K"}
                </span>
                <Link to="/" className="text-four">
                  Xem tất cả
                </Link>
              </div>
              <div className="p-3 text-white rounded-lg bg-four">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="mt-5">
            <div className="py-4 mb-4 border-b border-b-line">
              <h3 className="text-xl font-semibold text-text1">
                Món ăn phổ biến nhất
              </h3>
            </div>
            <ListFoodPopular></ListFoodPopular>
          </div>
          <div className="mt-5">
            <div className="py-4 mb-4 border-b border-b-line">
              <h3 className="text-xl font-semibold text-text1">
                Món ăn mới nhất
              </h3>
            </div>
            <ListFoodNew></ListFoodNew>
          </div>
          <div className="mt-5">
            <div className="py-4 mb-4 border-b border-b-line">
              <h3 className="text-xl font-semibold text-text1">Đơn hàng</h3>
            </div>
            <ListOrderDashboard></ListOrderDashboard>
          </div>
          <div className="mt-5">
            <div className="py-4 mb-4 border-b border-b-line">
              <h3 className="text-xl font-semibold text-text1">Đơn đặt tiệc</h3>
            </div>
            <ListPartyDashboard></ListPartyDashboard>
          </div>
        </div>
      </LayoutDashboardTable>
    </div>
  );
};

export default DashboardPage;
