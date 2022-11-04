/** @format */

import useModal from "hooks/useModal";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import ModalForm from "components/modal/ModalForm";
import ListTypesFood from "modules/typesfood/ListTypesFood";
import LayoutDashboardTable from "layout/LayoutDashboardTable";
import AddTypesFood from "modules/typesfood/AddTypesFood";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { typesFood } from "constants/constants";
import { getAllFoodTypes } from "store/foodtypes/slice";
import { Button } from "components/button";

const CategoryPage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const { modalIsOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchAllFoodTypes() {
      try {
        dispatch(
          getAllFoodTypes({
            pageCur: typesFood.pageCurDefault,
            numOnPage: typesFood.pageOnNum,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllFoodTypes();
  }, [dispatch]);

  const { foodtypes, pageNumber } = useSelector((state) => state.foodTypes);

  // Paginate Page
  useEffect(() => {
    if (!foodtypes || !foodtypes?.length) return;
    setPageCount(pageNumber);
  }, [foodtypes, nextPage, pageNumber]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(
      getAllFoodTypes({
        pageCur: event.selected + 1,
        numOnPage: typesFood.pageOnNum,
      })
    );
  };

  const handleOpenAdd = () => {
    openModal();
  };

  return (
    <LayoutDashboardTable title="Danh sách loại món ăn">
      <div className="flex justify-end mb-8">
        <Button
          kind="primary"
          className="w-[200px] rounded"
          onClick={handleOpenAdd}
        >
          Thêm loại món ăn
        </Button>
        <ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <AddTypesFood closeModal={closeModal}></AddTypesFood>
        </ModalForm>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên loại món ăn</th>
            <th>Mô tả</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <ListTypesFood data={foodtypes}></ListTypesFood>
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

export default CategoryPage;
