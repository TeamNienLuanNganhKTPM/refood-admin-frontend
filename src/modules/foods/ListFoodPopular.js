/** @format */

import { foodsPage } from "constants/constants";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoodsPopular } from "store/foods/slice";
import DashboardFoodItem from "./DashboardFoodItem";

const ListFoodPopular = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const { foodsPopular, pageNumberPopular } = useSelector(
    (state) => state.foods
  );
  useEffect(() => {
    function fetchAllFood() {
      try {
        dispatch(
          getAllFoodsPopular({
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
    if (!foodsPopular || !foodsPopular?.length) return;
    setPageCount(pageNumberPopular);
  }, [foodsPopular, nextPage, pageNumberPopular]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);

    dispatch(
      getAllFoodsPopular({
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
            {foodsPopular?.length > 0 &&
              foodsPopular.map((item) => (
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

export default ListFoodPopular;
