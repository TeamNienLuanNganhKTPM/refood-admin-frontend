/** @format */

import useModal from "hooks/useModal";
import UpdateTypesFood from "./UpdateTypesFood";
import Swal from "sweetalert2";
import React from "react";
import PropTypes from "prop-types";
import ModalForm from "components/modal/ModalForm";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import { deleteFoodType } from "store/foodtypes/slice";

const ItemTypesFood = ({ types }) => {
  const { modalIsOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();
  const handleDeleteFoodType = (id) => {
    try {
      Swal.fire({
        title: "Bạn muốn xóa loại món ăn?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Xóa",
        confirmButtonColor: "#1DC071",
        cancelButtonText: "Hủy",
        cancelButtonColor: "#EB5757",
      }).then(async (result) => {
        if (result.isConfirmed) {
          dispatch(deleteFoodType({ foodtypeid: id }));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <tr>
        <td>{types.FoodTypeId}</td>
        <td>{types.FoodTypeName}</td>
        <td>{types.FoodTypeDescription.slice(0, 40) + "..."}</td>
        <td className="flex items-center justify-start gap-x-4">
          <span onClick={openModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#6F49FD"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </span>
          <ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal}>
            <UpdateTypesFood
              closeModal={closeModal}
              types={types}
            ></UpdateTypesFood>
          </ModalForm>
          <span onClick={() => handleDeleteFoodType(types.FoodTypeId)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#EB5757"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </span>
        </td>
      </tr>
    </>
  );
};

ItemTypesFood.propTypes = {
  types: PropTypes.object,
};

export default withErrorBoundary(ItemTypesFood, {
  FallbackComponent: ErrorComponent,
});
