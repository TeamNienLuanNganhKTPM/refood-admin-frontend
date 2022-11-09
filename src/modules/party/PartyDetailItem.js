/** @format */

import Price from "components/common/Price";
import React from "react";
import formatPrice from "utils/formatPrice";

const PartyDetailItem = ({ data, partyNumOfTable }) => {
  return (
    <>
      {data?.length > 0 &&
        data.map((item) => (
          <div
            className="flex items-start justify-start gap-4 pb-2 border-b lg:gap-8 md:gap-8 border-b-line"
            key={item.FoodId}
          >
            <div className="lg:max-w-[80px] lg:h-[80px] w-full max-w-[60px] h-[60px] rounded-md">
              <img src={item.FoodThumb} alt="" />
            </div>
            <div className="flex flex-col w-full gap-3">
              <h3 className="text-base text-text lg:text-lg">
                {item.FoodName}
              </h3>
              <div className="flex items-center gap-2">
                <div className="hidden lg:block md:block">
                  <Price sizeText="18px">{formatPrice(item.FoodPrice)}</Price>
                </div>
                <div className="block lg:hidden md:hidđen">
                  <Price sizeText="16px">{formatPrice(item.FoodPrice)}</Price>
                </div>
                <span className="text-xs font-light lg:text-base md:text-base text-text1">
                  x {partyNumOfTable} bàn
                </span>
              </div>
              <div>
                <div className="inline px-2 py-1 text-xs font-medium text-center border rounded-sm lg:text-sm text-primary bg-bgPrimary border-primary">
                  {item.FoodType}
                </div>
              </div>
            </div>
            <div>
              <Price sizeText="18px">{formatPrice(item.Total)}</Price>
            </div>
          </div>
        ))}
    </>
  );
};

export default PartyDetailItem;
