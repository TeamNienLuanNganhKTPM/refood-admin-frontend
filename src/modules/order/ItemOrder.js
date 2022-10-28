/** @format */

import Price from "components/common/Price";
import React from "react";
import { useNavigate } from "react-router-dom";
import formatToDate from "utils/formatDate";
import formatPrice from "utils/formatPrice";
import orderState from "utils/orderState";

const ItemOrder = ({ item }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>
        <span>{item.OrderID}</span>
      </td>
      <td>
        <span>{formatToDate(item.OrderDate)}</span>
      </td>
      <td>
        <span className="text-secondary">{item.OrderPaymentMethod}</span>
      </td>
      <td>
        <span>
          {item.OrderNote ? item.OrderNote.split(0, 5) + "..." : "Không có"}
        </span>
      </td>
      <td>
        <div className="px-2 py-1 rounded-sm text-primary bg-primary bg-opacity-10">
          <span>{orderState(item.OrderState)}</span>
        </div>
      </td>
      <td>
        <Price>{formatPrice(item.OrderSubTotal)}</Price>
      </td>
      <td>
        <span
          className="transition-all cursor-pointer text-text1 hover:text-primary"
          onClick={() => {
            navigate(`/order/${item.OrderID}`);
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Xem chi tiết
        </span>
      </td>
    </tr>
  );
};

export default ItemOrder;
