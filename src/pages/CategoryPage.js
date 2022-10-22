/** @format */

import { Button } from "components/button";
import ModalForm from "components/modal/ModalForm";
import useModal from "hooks/useModal";
import LayoutDashboardTable from "layout/LayoutDashboardTable";
import AddTypesFood from "modules/typesfood/AddTypesFood";
import ListTypesFood from "modules/typesfood/ListTypesFood";
import UpdateTypesFood from "modules/typesfood/UpdateTypesFood";
import React, { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { deleteFoodType, getAllFoodTypes } from "store/foodtypes/slice";

const CategoryPage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { modalIsOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchAllFoodTypes() {
      try {
        dispatch(getAllFoodTypes());
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllFoodTypes();
  }, [dispatch]);

  const { foodtypes } = useSelector((state) => state.foodTypes);
  const data = foodtypes ? foodtypes : [];

  // Paginate Page
  useEffect(() => {
    if (!data || !data?.length) return;
    setPageCount(Math.ceil(data.length / 5));
  }, [foodtypes, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % data.length;
    setItemOffset(newOffset);
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
          <ListTypesFood data={data}></ListTypesFood>
        </tbody>
      </table>
      <div className="flex justify-center mt-8 bg-white rounded">
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
