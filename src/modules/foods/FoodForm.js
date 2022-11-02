/** @format */

import Swal from "sweetalert2";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MutilInputForm from "./MutilInputForm";
import MutilFileUpload from "./MutilFileUpload";
import FormGroup from "components/common/FormGroup";
import DropdownTypes from "modules/typesfood/DropdownTypes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import { addFoods } from "store/foods/slice";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const FoodForm = ({ children }) => {
  const [priceRation, setPriceRation] = useState([]);
  const [images, setImages] = useState([]);
  const [types, setTypes] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.foods);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    setValue("foodpriceration", priceRation);
    setValue("foodtype", types);
    setValue("foodimage", images);
  }, [images, priceRation, types, setValue]);

  const handleAddFoodForm = async (values) => {
    if (!isValid) return;
    let formData = new FormData();
    formData.append("foodname", values.foodname);
    formData.append("fooddescription", values.fooddescription);
    formData.append("foodtype", types);
    for (let i = 0; i < priceRation.length; i++) {
      formData.append(
        "foodpriceration",
        JSON.stringify({
          price: Number(priceRation[i].FoodPrice),
          ration: Number(priceRation[i].FoodRation),
        })
      );
    }
    for (let j = 0; j < images.length; j++) {
      formData.append("foodimage", images[j]);
    }
    try {
      Swal.fire({
        title: "Chờ trong giây lát!",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      }).then((result) => {
        dispatch(addFoods(formData));
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/product");
    }
  }, [success, navigate]);

  return (
    <>
      <form className="w-[900px]" onSubmit={handleSubmit(handleAddFoodForm)}>
        <div className="grid grid-cols-2 gap-5 pr-[104px]">
          <FormGroup>
            <Label htmlFor="foodname">Tên món ăn</Label>
            <Input
              control={control}
              name="foodname"
              placeholder="Nhập tên món ăn"
            ></Input>
            <span className="text-error">{errors.foodname?.message}</span>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="foodtype">Loại món ăn</Label>
            <DropdownTypes setTypes={setTypes}></DropdownTypes>
            <span className="text-error">{errors.foodtype?.message}</span>
          </FormGroup>
        </div>

        <MutilInputForm
          setPriceRation={setPriceRation}
          name="foodpriceration"
        ></MutilInputForm>

        <div className="grid grid-cols-1 pr-[104px]">
          <FormGroup>
            <Label htmlFor="fooddescription">Mô tả món ăn</Label>
            <Textarea
              control={control}
              name="fooddescription"
              placeholder="Nhập tên mô tả món ăn"
            ></Textarea>
            <span className="text-error">
              {errors.fooddescription?.message}
            </span>
          </FormGroup>
        </div>
        <div className="flex h-auto items-start justify-start gap-5 pr-[104px] ">
          <MutilFileUpload
            name="foodimage"
            setImages={setImages}
          ></MutilFileUpload>
        </div>
        {children}
      </form>
    </>
  );
};

FoodForm.propTypes = {
  children: PropTypes.any,
};

export default withErrorBoundary(FoodForm, {
  FallbackComponent: ErrorComponent,
});
