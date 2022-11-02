/** @format */

import React from "react";
import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";

const LayoutDashboardTable = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="py-5 text-2xl font-bold uppercase border-b text-text1 border-text4">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
};

LayoutDashboardTable.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default withErrorBoundary(LayoutDashboardTable, {
  FallbackComponent: ErrorComponent,
});
