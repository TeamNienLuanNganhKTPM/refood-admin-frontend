/** @format */

import React from "react";
import FoodForm from "./FoodForm";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { Button } from "components/button";

const AddFood = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between py-2 border-b border-b-line">
        <div className="flex cursor-pointer text-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
          <span
            className="text-base font-medium text-center uppercase text-text"
            onClick={() => {
              navigate("/product");
            }}
          >
            Trở lại
          </span>
        </div>
        <h3 className="text-xl font-semibold uppercase text-primary">
          Thêm món ăn
        </h3>
      </div>
      <div className="flex justify-center pt-8">
        <FoodForm>
          <div className="flex justify-end pb-4 mt-10 border-b border-b-line">
            <Button
              type="submit"
              kind="primary"
              className="rounded hover:opacity-90"
            >
              Thêm món ăn
            </Button>
          </div>
        </FoodForm>
      </div>
    </>
  );
};

export default withErrorBoundary(AddFood, {
  FallbackComponent: ErrorComponent,
});
