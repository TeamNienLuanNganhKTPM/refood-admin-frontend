/** @format */

import React from "react";
import PropTypes from "prop-types";
import { useDropdown } from "./dropdown-context";

const List = ({ children, className = "", open, props }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div
          className={`absolute z-50 left-0 w-full bg-white shadow-sm top-full ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

List.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  display: PropTypes.bool,
  show: PropTypes.bool,
  setShow: PropTypes.bool,
  open: PropTypes.bool,
};

export default List;
