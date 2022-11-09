/** @format */

import { foodsPage } from "constants/constants";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoodsNew } from "store/foods/slice";
import { getAllOrders } from "store/order/slice";
import DashboardFoodItem from "../foods/DashboardFoodItem";
import ListOrders from "./ListOrders";

const ListOrderDashboard = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const { orders, pageNumber } = useSelector((state) => state.orders);
  useEffect(() => {
    function fetchAllFood() {
      try {
        dispatch(
          getAllOrders({
            pageCur: foodsPage.pageCurDefault,
            numOnPage: foodsPage.pageOnNum,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllFood();
  }, [dispatch]);

  useEffect(() => {
    if (!orders || !orders?.length) return;
    setPageCount(pageNumber);
  }, [orders, nextPage, pageNumber]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);

    dispatch(
      getAllOrders({
        pageCur: event.selected + 1,
        numOnPage: foodsPage.pageOnNum,
      })
    );
  };

  return (
    <>
      <div className="w-full overflow-x-auto border cursor-default scroll pur-scroll border-line">
        <table className="lg:w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ngày đặt</th>
              <th>Phương thức thanh toán</th>
              <th>Trạng thái</th>
              <th>Tổng tiền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <ListOrders data={orders}></ListOrders>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-2 bg-white rounded">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </>
  );
};

export default ListOrderDashboard;
