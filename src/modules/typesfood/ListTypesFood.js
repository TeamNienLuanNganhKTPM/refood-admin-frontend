/** @format */

import React from "react";
import ItemTypesFood from "./ItemTypesFood";

const ListTypesFood = ({ data }) => {
  return (
    <>
      {data?.length > 0 &&
        data.map((types) => (
          <ItemTypesFood key={types.FoodTypeId} types={types}></ItemTypesFood>
        ))}
    </>
  );
};

export default ListTypesFood;
