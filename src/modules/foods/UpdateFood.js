/** @format */

import { Button } from "components/button";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFoodDetail } from "store/foods/slice";
import FoodFormUpdate from "./FoodFormUpdate";

const UpdateFood = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();

  const { foodDetail } = useSelector((state) => state.foods);

  useEffect(() => {
    function fetchFoodDetail() {
      dispatch(getFoodDetail(slug));
    }
    fetchFoodDetail();
  }, [dispatch, slug]);

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
          Cập nhật món ăn
        </h3>
      </div>
      <div className="flex justify-center pt-8">
        <FoodFormUpdate data={foodDetail}>
          <div className="flex justify-end pb-4 mt-10 border-b border-b-line">
            <Button
              type="submit"
              kind="primary"
              className="rounded hover:opacity-90"
            >
              Cập nhật món ăn
            </Button>
          </div>
        </FoodFormUpdate>
      </div>
    </>
  );
};

export default UpdateFood;
