/** @format */

import { ordersPage } from "constants/constants";
import LayoutDashboardTable from "layout/LayoutDashboardTable";
import ListOrders from "modules/order/ListOrders";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "store/order/slice";
import Swal from "sweetalert2";

const OrderPage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchAllFood() {
      try {
        dispatch(
          getAllOrders({
            pageCur: ordersPage.pageCurDefault,
            numOnPage: ordersPage.pageOnNum,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllFood();
  }, [dispatch]);

  const { orders, pageNumber } = useSelector((state) => state.orders);

  // Paginate Page
  useEffect(() => {
    if (!orders || !orders?.length) return;
    setPageCount(pageNumber);
  }, [orders, nextPage, pageNumber]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(
      getAllOrders({
        pageCur: event.selected + 1,
        numOnPage: ordersPage.pageOnNum,
      })
    );
  };

  return (
    <LayoutDashboardTable title="Danh sách đơn hàng">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ngày đặt</th>
            <th>Phương thức thanh toán</th>
            <th>Ghi chú</th>
            <th>Trạng thái</th>
            <th>Tổng tiền</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <ListOrders data={orders}></ListOrders>
        </tbody>
      </table>
      <div className="flex justify-end mt-8 bg-white rounded">
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
    </LayoutDashboardTable>
  );
};

export default OrderPage;
