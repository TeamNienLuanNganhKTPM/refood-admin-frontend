/** @format */
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import ListOrders from "modules/order/ListOrders";
import LayoutDashboardTable from "layout/LayoutDashboardTable";
import { useDispatch, useSelector } from "react-redux";
import { ordersPage } from "constants/constants";
import { getAllOrders, searchOrder } from "store/order/slice";
import OrderSearch from "modules/order/OrderSearch";
import OrderRangeDate from "modules/order/OrderRangeDate";
const queryString = require("query-string");

const OrderPage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchAllOrder() {
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
    fetchAllOrder();
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
    if (
      search?.orderid ||
      search?.customerphone ||
      search?.datestart ||
      search?.dateend
    ) {
      const param = queryString.stringify(search);
      dispatch(searchOrder(`${event.selected + 1}/10?${param}`));
    } else {
      dispatch(
        getAllOrders({
          pageCur: event.selected + 1,
          numOnPage: ordersPage.pageOnNum,
        })
      );
    }
  };

  return (
    <LayoutDashboardTable title="Danh sách đơn hàng">
      <OrderSearch setSearch={setSearch}></OrderSearch>
      <table>
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
