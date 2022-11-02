/** @format */

import React from "react";
import ItemFoods from "./ItemFoods";
import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";

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

ListFoods.propTypes = {
  data: PropTypes.array.isRequired,
};

export default withErrorBoundary(ListFoods, {
  FallbackComponent: ErrorComponent,
});
