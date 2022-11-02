/** @format */

import React from "react";
import PropTypes from "prop-types";
import FormGroup from "components/common/FormGroup";
import ErrorComponent from "components/common/ErrorComponent";
import { useState } from "react";
import { useEffect } from "react";
import { Label } from "components/label";
import { withErrorBoundary } from "react-error-boundary";

const MutilInputForm = ({
  setPriceRation,
  priceration,
  setSelectDeleteRation,
}) => {
  const [inputField, setInputField] = useState([
    { FoodPrice: "", FoodRation: "" },
  ]);

  const handleChangeInput = (e, index) => {
    const values = [...inputField];
    const valueObj = { ...values[index] };
    values.splice(index, 1);
    valueObj[e.target.name] = e.target.value;
    values.splice(index, 0, valueObj);
    setInputField(values);
  };

  const handleAddFields = () => {
    setInputField([...inputField, { FoodPrice: "", FoodRation: "" }]);
  };

  const handleDeleteFields = (index, item) => {
    const values = [...inputField];
    values.splice(index, 1);
    setInputField(values);
    setSelectDeleteRation((prevState) => [...prevState, item?.FoodDetailID]);
  };

  useEffect(() => {
    if (priceration?.length > 0) {
      setInputField(priceration);
    }
  }, [priceration, priceration?.length]);

  useEffect(() => {
    setPriceRation(inputField);
  }, [inputField, setPriceRation]);

  return (
    <>
      <div id="fpr-list">
        {inputField.map((item, index) => (
          <div
            className="flex items-center justify-between fpr-item"
            key={index}
          >
            <div className="grid grid-cols-2 gap-5 w-[796px]">
              <FormGroup>
                <Label htmlFor="price">Mức giá</Label>
                <input
                  name="FoodPrice"
                  placeholder="Nhập tên món ăn"
                  type="text"
                  className="w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-grayf3 focus:border-primary"
                  onChange={(e) => handleChangeInput(e, index)}
                  value={item?.FoodPrice}
                ></input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="ration">Khẩu phần</Label>
                <input
                  name="FoodRation"
                  type="text"
                  placeholder="Nhập khẩu phần"
                  className="w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-grayf3 focus:border-primary"
                  onChange={(e) => handleChangeInput(e, index)}
                  value={item?.FoodRation}
                ></input>
              </FormGroup>
            </div>

            <div className="flex justify-start gap-2 px-2 w-[104px]">
              {index > 0 && (
                <div
                  className="px-2 py-2 text-white rounded cursor-pointer bg-error"
                  onClick={() => handleDeleteFields(index, item)}
                >
                  <span>
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
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                </div>
              )}
              <div
                className="px-2 py-2 text-white rounded cursor-pointer bg-primary"
                onClick={handleAddFields}
              >
                <span>
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
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

MutilInputForm.propTypes = {
  priceration: PropTypes.array,
  setPriceRation: PropTypes.func,
  setSelectDeleteRation: PropTypes.func,
};

export default withErrorBoundary(React.memo(MutilInputForm), {
  FallbackComponent: ErrorComponent,
});
