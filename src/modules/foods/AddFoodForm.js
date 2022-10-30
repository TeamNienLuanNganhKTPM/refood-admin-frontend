/** @format */

import FormGroup from "components/common/FormGroup";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import DropdownTypes from "modules/typesfood/DropdownTypes";
import MutilInputForm from "./MutilInputForm";
import { useState } from "react";
import { Button } from "components/button";
import MutilFileUpload from "./MutilFileUpload";
import { useDispatch } from "react-redux";
import { addFood } from "store/foods/slice";
import instance from "api";
import axios from "axios";
import { addFoodAdminApi } from "api/foods";

const AddFoodForm = () => {
  const [priceRation, setPriceRation] = useState([]);
  console.log("AddFoodForm ~ priceRation", priceRation);
  const [images, setImages] = useState([]);
  const [types, setTypes] = useState({});
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleItemImage = (index) => {
    const values = [...images];
    values.splice(index, 1);
    setImages({ foodimage: values });
  };

  useEffect(() => {
    setValue("foodpriceration", priceRation);
    setValue("foodtype", types);

    setValue("foodimage", images);
  }, [images, priceRation, types, setValue]);

  const handleAddFoodForm = async (values) => {
    console.log("handleAddFoodForm ~ values", values);

    // dispatch(addFood(values));
    let formData = new FormData();
    formData.append("foodname", values.foodname);
    formData.append("fooddescription", values.fooddescription);
    formData.append("foodtype", types);
    for (let i = 0; i < priceRation.length; i++) {
      formData.append("foodpriceration", priceRation[i]);
    }
    for (let j = 0; j < images.length; j++) {
      formData.append("foodimage", images[j]);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + " - " + pair[1]);
    }

    try {
      const response = await addFoodAdminApi(formData);
      if (response.status === 200) {
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              // error={errors.phonenumber?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="foodtype">Loại món ăn</Label>
            <DropdownTypes setTypes={setTypes}></DropdownTypes>
          </FormGroup>
        </div>
        <MutilInputForm setPriceRation={setPriceRation}></MutilInputForm>
        <div className="grid grid-cols-1 pr-[104px]">
          <FormGroup>
            <Label htmlFor="fooddescription">Mô tả món ăn</Label>
            <Textarea
              control={control}
              name="fooddescription"
              placeholder="Nhập tên mô tả món ăn"
            ></Textarea>
          </FormGroup>
        </div>
        <div className="flex h-auto items-start justify-start gap-5 pr-[104px] ">
          <MutilFileUpload
            name="foodimage"
            setImages={setImages}
          ></MutilFileUpload>

          <div className="grid w-full grid-cols-2 gap-2">
            {images?.length > 0 &&
              images.map((item, index) => (
                <div
                  className=" p-3 h-[54px] flex justify-between rounded-sm bg-primary bg-opacity-10 text-primary"
                  key={index}
                >
                  <span>{item.name}</span>
                  <span
                    className="transition-all cursor-pointer hover:text-error"
                    onClick={() => handleItemImage(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-end pb-4 mt-10 border-b border-b-line">
          <Button
            type="submit"
            kind="primary"
            className="rounded hover:opacity-90"
          >
            Thêm món ăn
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddFoodForm;
