/** @format */

import Swal from "sweetalert2";
import React, { useEffect } from "react";
import Price from "components/common/Price";
import orderState from "utils/orderState";
import OrderDetailItem from "./OrderDetailItem";
import nextState from "utils/nextState";
import formatToDate from "utils/formatDate";
import formatPrice from "utils/formatPrice";
import { useState } from "react";
import ErrorComponent from "components/common/ErrorComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder, getOrderDetail, updateOrder } from "store/order/slice";
import { Button } from "components/button";
import { withErrorBoundary } from "react-error-boundary";

const OrderDetail = () => {
  const param = useParams();
  const id = param.slug;
  const navigate = useNavigate();
  const [nextOrder, setNextOrder] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    function fetchOrderDetail() {
      dispatch(getOrderDetail(id));
    }
    fetchOrderDetail();
  }, [dispatch, id]);

  const { orderDetail } = useSelector((state) => state.orders);

  useEffect(() => {
    if (orderDetail) {
      setNextOrder(nextState(orderDetail?.OrderState));
    }
  }, [orderDetail]);

  const data = orderDetail?.OrderDetails ? orderDetail?.OrderDetails : [];

  const handleConfirmOrder = () => {
    try {
      Swal.fire({
        title: "Chờ trong giây lát!",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      }).then((result) => {
        dispatch(updateOrder({ orderid: id }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelOrder = () => {
    try {
      Swal.fire({
        title: "Chờ trong giây lát!",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      }).then((result) => {
        dispatch(cancelOrder({ orderid: id }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between py-2 border-b border-b-line">
        <div className="flex cursor-pointer text-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
          <span
            className="text-base font-medium text-center uppercase text-text"
            onClick={() => {
              navigate("/order");
            }}
          >
            Trở lại
          </span>
        </div>
        <div className="flex items-center justify-end gap-3 text-base font-normal uppercase">
          <span className="text-text1">
            Ngày đặt: {formatToDate(orderDetail?.OrderDate)}
          </span>
          <span>|</span>
          <span className="text-text1">
            ID Đơn hàng: {orderDetail?.OrderID}
          </span>
          <span>|</span>
          <span className="text-error">
            {orderState(orderDetail?.OrderState)}
          </span>
        </div>
      </div>
      <div className="py-3 border-b border-b-line">
        <h3 className="text-lg font-medium b-4 text-text">Địa chỉ</h3>
        <div className="flex flex-col gap-1 text-sm ">
          <span className="p-2 text-text bg-primary bg-opacity-10">
            {orderDetail?.OrderAdress}
          </span>
        </div>
      </div>
      <div>
        <h3 className="mt-4 mb-4 text-lg font-medium text-text">
          Danh sách món ăn
        </h3>
        <div className="px-2 py-2 italic text-text2 bg-primary bg-opacity-10">
          <span>
            {orderDetail?.OrderNote
              ? orderDetail?.OrderNote
              : "Không có ghi chú"}
          </span>
        </div>
      </div>
      <h3 className="mt-4 mb-4 text-lg font-medium text-text">
        Danh sách món ăn
      </h3>
      <div className="flex flex-col gap-4">
        <OrderDetailItem data={data}></OrderDetailItem>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-end gap-3">
          <span className="text-lg font-medium text-text">
            Phương thức thanh toán:
          </span>
          <span className="text-base text-text1">
            {orderDetail?.OrderPaymentMethod}
          </span>
        </div>
        <div className="flex items-center justify-end gap-3">
          <span className="text-lg font-medium text-text">Tổng tiền:</span>
          <Price sizeText="20px">
            {formatPrice(orderDetail?.OrderSubTotal)}
          </Price>
        </div>
      </div>
      {orderDetail?.OrderState < 2 && (
        <div className="flex justify-end gap-3 mt-8">
          {orderDetail?.OrderState === 0 && (
            <Button
              kind="secondary"
              className="rounded w-[120px]"
              onClick={handleCancelOrder}
            >
              Hủy
            </Button>
          )}
          <Button
            kind="primary"
            className="rounded"
            onClick={handleConfirmOrder}
          >
            {nextOrder}
          </Button>
        </div>
      )}
    </>
  );
};

export default withErrorBoundary(OrderDetail, {
  FallbackComponent: ErrorComponent,
});
