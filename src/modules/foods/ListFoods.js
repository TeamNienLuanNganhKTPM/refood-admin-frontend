/** @format */

import React from "react";
import ItemFoods from "./ItemFoods";

const ListFoods = ({ data }) => {
  return (
    <>
      {data?.length > 0 &&
        data.map((item) => (
          <ItemFoods key={item.FoodId} item={item}></ItemFoods>
        ))}
    </>
  );
};

export default ListFoods;
