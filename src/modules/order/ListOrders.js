/** @format */

import React from "react";
import ItemOrder from "./ItemOrder";
import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";

const ListOrders = ({ data }) => {
  return (
    <>
      {data?.length > 0 &&
        data.map((item) => (
          <ItemOrder key={item.OrderID} item={item}></ItemOrder>
        ))}
    </>
  );
};

ListOrders.propTypes = {
  data: PropTypes.array,
};

export default withErrorBoundary(ListOrders, {
  FallbackComponent: ErrorComponent,
});
