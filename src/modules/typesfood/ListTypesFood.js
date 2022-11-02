/** @format */

import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ItemTypesFood from "./ItemTypesFood";
import PropTypes from "prop-types";

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

ListTypesFood.propTypes = {
  data: PropTypes.array,
};

export default withErrorBoundary(ListTypesFood, {
  FallbackComponent: ErrorComponent,
});
