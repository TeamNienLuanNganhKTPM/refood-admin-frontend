/** @format */

import Price from "components/common/Price";
import React from "react";
import formatPrice from "utils/formatPrice";

const DashboardFoodItem = ({ item }) => {
  return (
    <tr>
      <td>
        <div className="w-[54px] h-[54px]">
          <img
            src={item.FoodThumb}
            alt=""
            className="object-cover w-full h-full rounded"
          />
        </div>
      </td>
      <td>
        <h3 className="text-text1">{item.FoodName.slice(0, 30) + "..."}</h3>
      </td>
      <td>
        <div className="w-full px-2 py-1 font-medium text-center rounded bg-primary bg-opacity-10 text-primary">
          <span>{item.FoodTypeName}</span>
        </div>
      </td>
      <td>
        <div className="flex items-center text-yellow-400">
          <span>{item.FoodReviewAvg}</span>
          {item.FoodReviewAvg ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <span>Chưa đánh giá</span>
          )}
        </div>
      </td>
      <td>
        <Price>
          {formatPrice(item.FoodPrices[0].FoodPrice) +
            `${
              item.FoodPrices.length > 1
                ? "~" +
                  formatPrice(
                    item.FoodPrices[item.FoodPrices.length - 1].FoodPrice
                  )
                : ""
            }`}
        </Price>
      </td>
    </tr>
  );
};

export default DashboardFoodItem;
