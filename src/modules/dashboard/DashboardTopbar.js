/** @format */

import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between pb-8 border-b border-b-line">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/" className="inline-block">
          <img
            src="/refood-logo.png"
            alt="refood-admin"
            className="max-w-auto h-[52px]"
          />
        </Link>
        {/* <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div> */}
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <span className="w-[52px] h-[52px] bg-red-200 text-error flex items-center justify-center rounded-full relative cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
            <path
              fillRule="evenodd"
              d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="absolute top-0 right-0 w-[20px] h-[20px] bg-error text-white flex items-center justify-center rounded-full text-xs">
            0
          </span>
        </span>
        <img
          src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="admin-avatar"
          className="object-cover rounded-full w-[52px] h-[52px]"
        />
      </div>
    </div>
  );
};

export default withErrorBoundary(DashboardTopbar, {
  FallbackComponent: ErrorComponent,
});
