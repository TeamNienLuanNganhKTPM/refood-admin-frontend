/** @format */

import React from "react";
import ItemOrder from "./ItemOrder";

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

export default ListOrders;
