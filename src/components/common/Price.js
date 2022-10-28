/** @format */

import React from "react";
import PropTypes from "prop-types";

const Price = ({ children, className = "", ...props }) => {
  return <div className="text-lg font-bold text-red-500">{children}</div>;
};

Price.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  sizeText: PropTypes.string,
};

export default Price;
