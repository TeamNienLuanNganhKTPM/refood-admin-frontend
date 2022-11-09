/** @format */

import { foodsPage } from "constants/constants";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoodsNew } from "store/foods/slice";
import DashboardFoodItem from "./DashboardFoodItem";

const ListFoodNew = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const { foodsNew, pageNumberNew } = useSelector((state) => state.foods);
  useEffect(() => {
    function fetchAllFood() {
      try {
        dispatch(
          getAllFoodsNew({
            pageCur: foodsPage.pageCurDefault,
            numOnPage: foodsPage.pageOnNum,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllFood();
  }, [dispatch]);

  useEffect(() => {
    if (!foodsNew || !foodsNew?.length) return;
    setPageCount(pageNumberNew);
  }, [foodsNew, nextPage, pageNumberNew]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);

    dispatch(
      getAllFoodsNew({
        pageCur: event.selected + 1,
        numOnPage: foodsPage.pageOnNum,
      })
    );
  };

  return (
    <>
      <div className="w-full overflow-x-auto border cursor-default scroll pur-scroll border-line">
        <table className="lg:w-full">
          <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên món ăn</th>
              <th>Loại món ăn</th>
              <th>Đánh giá</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {foodsNew?.length > 0 &&
              foodsNew.map((item) => (
                <DashboardFoodItem
                  key={item.FoodId}
                  item={item}
                ></DashboardFoodItem>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-2 bg-white rounded">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </>
  );
};

export default ListFoodNew;
