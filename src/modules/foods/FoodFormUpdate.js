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
import { updateFood } from "store/foods/slice";

const FoodFormUpdate = ({ children, data }) => {
  const [priceRation, setPriceRation] = useState([]);
  const [images, setImages] = useState([]);
  const [types, setTypes] = useState("");
  const [img, setImg] = useState([]);
  const [selectDeleteImg, setSelectDeleteImg] = useState([]);
  const [selectDeleteRation, setSelectDeleteRation] = useState([]);
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
    if (data) {
      setTypes(data?.FoodTypeID);
      setValue("foodname", data?.FoodName);
      setValue("fooddescription", data?.FoodDescription);
      setPriceRation(data?.FoodPrices);
      setImg(data?.FoodImages);
    }
  }, [data, setValue]);

  const handleUpdateFoodForm = async (values) => {
    if (!isValid) return;
    let formData = new FormData();
    formData.append("foodid", data?.FoodId);
    formData.append("foodname", values.foodname);
    formData.append("fooddescription", values.fooddescription);
    formData.append("foodtype", types);
    for (let i = 0; i < priceRation.length; i++) {
      formData.append(
        "foodpriceration",
        JSON.stringify({
          price: priceRation[i].FoodPrice,
          ration: priceRation[i].FoodRation,
        })
      );
    }
    for (let j = 0; j < images.length; j++) {
      formData.append("foodimage", images[j]);
    }
    for (let n = 0; n < selectDeleteImg.length; n++) {
      formData.append("foodimagedeleted", JSON.stringify(selectDeleteImg[n]));
    }
    for (let m = 0; m < selectDeleteRation.length; m++) {
      formData.append(
        "foodpricerationdeleted",
        JSON.stringify(selectDeleteRation[m])
      );
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
        dispatch(updateFood(formData));
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
      <form className="w-[900px]" onSubmit={handleSubmit(handleUpdateFoodForm)}>
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
            <DropdownTypes setTypes={setTypes} types={types}></DropdownTypes>
            <span className="text-error">{errors.foodtype?.message}</span>
          </FormGroup>
        </div>

        <MutilInputForm
          setPriceRation={setPriceRation}
          priceration={priceRation}
          setSelectDeleteRation={setSelectDeleteRation}
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
            img={img}
            setSelectDeleteImg={setSelectDeleteImg}
          ></MutilFileUpload>
        </div>
        {children}
      </form>
    </>
  );
};

FoodFormUpdate.propTypes = {
  children: PropTypes.any,
};

export default FoodFormUpdate;
