/** @format */

import { Button } from "components/button";
import ModalForm from "components/modal/ModalForm";
import { typesFood } from "constants/constants";
import useModal from "hooks/useModal";
import LayoutDashboardTable from "layout/LayoutDashboardTable";
import AddTypesFood from "modules/typesfood/AddTypesFood";
import ListTypesFood from "modules/typesfood/ListTypesFood";
import React, { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoodTypes } from "store/foodtypes/slice";
import Swal from "sweetalert2";

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
    Swal.fire({
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => {
      dispatch(
        getAllFoodTypes({
          pageCur: event.selected + 1,
          numOnPage: typesFood.pageOnNum,
        })
      );
    });
  };

  const handleOpenAdd = () => {
    openModal();
  };

  return (
    <LayoutDashboardTable title="Danh sách loại món ăn">
      <div className="flex justify-end mb-8">
        <Button kind="primary" className="w-[200px]" onClick={handleOpenAdd}>
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
