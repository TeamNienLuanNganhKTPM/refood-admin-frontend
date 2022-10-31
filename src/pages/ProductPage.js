/** @format */

import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import ListFoods from "modules/foods/ListFoods";
import LayoutDashboardTable from "layout/LayoutDashboardTable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoods } from "store/foods/slice";
import { foodsPage } from "constants/constants";
import { Button } from "components/button";

const ProductPage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { foods, pageNumber } = useSelector((state) => state.foods);
  useEffect(() => {
    function fetchAllFood() {
      try {
        dispatch(
          getAllFoods({
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

  // Paginate Page
  useEffect(() => {
    if (!foods || !foods?.length) return;
    setPageCount(pageNumber);
  }, [foods, nextPage, pageNumber]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
    Swal.fire({
      title: "Chờ trong giây lát!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => {
      dispatch(
        getAllFoods({
          pageCur: event.selected + 1,
          numOnPage: foodsPage.pageOnNum,
        })
      );
    });
  };

  const handleClickAddFood = () => {
    navigate("/product/add");
  };

  return (
    <LayoutDashboardTable title="Danh sách sản phẩm">
      <div className="flex justify-end mb-8">
        <Button
          kind="primary"
          className="w-[200px] rounded"
          onClick={handleClickAddFood}
        >
          Thêm món ăn
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên món ăn</th>
            <th>Loại món ăn</th>
            <th>Đánh giá</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <ListFoods data={foods}></ListFoods>
        </tbody>
      </table>
      <div className="flex justify-end mt-8 bg-white rounded">
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
    </LayoutDashboardTable>
  );
};

export default ProductPage;
