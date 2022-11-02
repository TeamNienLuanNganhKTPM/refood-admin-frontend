/** @format */

import React from "react";
import PropTypes from "prop-types";
import FormGroup from "components/common/FormGroup";
import ErrorComponent from "components/common/ErrorComponent";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { withErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTypeFood } from "store/foodtypes/slice";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import { Button } from "components/button";

const schema = yup.object({
  foodtypename: yup.string().required("Vui lòng nhập tên loại món ăn"),
  foodtypedescription: yup.string().required("Vui lòng nhập mô tả"),
});

const UpdateTypesFood = ({ closeModal, types }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (types) {
      reset({
        foodtypename: types.FoodTypeName,
        foodtypedescription: types.FoodTypeDescription,
      });
    }
  }, [reset, types]);

  const handleUpdateTypesFood = (values) => {
    try {
      const result = Object.assign(values, { foodtypeid: types.FoodTypeId });
      dispatch(updateTypeFood(result));
      reset({});
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[500px] flex flex-col gap-3">
      <div className="flex items-center justify-between py-3 mb-5 border-b border-b-text4">
        <h3 className="text-xl font-semibold text-text2">
          Cập nhật loại món ăn
        </h3>
        <div className="cursor-pointer text-primary" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleUpdateTypesFood)}>
        <FormGroup>
          <Label htmlFor="foodtypename">Tên loại món ăn</Label>
          <Input
            control={control}
            name="foodtypename"
            placeholder="Nhập tên loại món ăn"
            error={errors.foodtypename?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="foodtypedescription">Mô tả</Label>
          <Textarea
            control={control}
            name="foodtypedescription"
            placeholder="Nhập mô tả loại món ăn"
            error={errors.foodtypedescription?.message}
          ></Textarea>
        </FormGroup>
        <div className="flex justify-end gap-x-3">
          <Button
            kind="ghost"
            className="px-8"
            onClick={() => {
              reset({});
              closeModal();
            }}
          >
            Hủy
          </Button>
          <Button kind="primary" className="px-8" type="submit">
            Cập nhật
          </Button>
        </div>
      </form>
    </div>
  );
};
UpdateTypesFood.propTypes = {
  closeModal: PropTypes.func,
  types: PropTypes.object,
};

export default withErrorBoundary(UpdateTypesFood, {
  FallbackComponent: ErrorComponent,
});
