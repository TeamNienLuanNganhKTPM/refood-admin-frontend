/** @format */

import React from "react";
import PropTypes from "prop-types";
import Price from "components/common/Price";
import orderState from "utils/orderState";
import formatToDate from "utils/formatDate";
import formatPrice from "utils/formatPrice";
import ErrorComponent from "components/common/ErrorComponent";
import { useNavigate } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";

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
        <span className=" text-secondary">{item.OrderPaymentMethod}</span>
      </td>
      <td>
        <div className="px-2 py-1 font-medium text-center rounded text-primary bg-primary bg-opacity-10">
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

ItemOrder.propTypes = {
  item: PropTypes.object,
};

export default withErrorBoundary(ItemOrder, {
  FallbackComponent: ErrorComponent,
});
