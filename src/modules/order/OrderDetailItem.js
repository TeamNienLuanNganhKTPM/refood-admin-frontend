/** @format */

import Price from "components/common/Price";
import React from "react";
import formatPrice from "utils/formatPrice";
import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";

const OrderDetailItem = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        data.map((item) => (
          <div
            className="flex items-start justify-center gap-8 pb-2 border-b border-b-line"
            key={item.FoodId}
          >
            <img
              src={item.FoodThumb}
              alt=""
              className="object-cover w-[60px] h-[60px] rounded"
            />
            <div className="flex justify-between w-full">
              <div className="flex flex-col w-full gap-3">
                <h3>{item.FoodName}</h3>
                <div className="flex items-end gap-2">
                  <div className="text-xs font-medium text-center border rounded-sm lg:py-1 lg:px-2 lg:text-sm text-primary bg-bgPrimary border-primary">
                    {item.FoodRation} người
                  </div>
                  <span className="text-base font-light text-text1">
                    x{item.FoodQuantity}
                  </span>
                </div>
              </div>
              <div>
                <Price sizeText="18px">{formatPrice(item.Total)}</Price>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

OrderDetailItem.propTypes = {
  data: PropTypes.array,
};

export default withErrorBoundary(OrderDetailItem, {
  FallbackComponent: ErrorComponent,
});
