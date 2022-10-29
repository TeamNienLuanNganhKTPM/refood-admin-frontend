/** @format */

import FormGroup from "components/common/FormGroup";
import { Label } from "components/label";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MutilInputForm = ({ setPriceRation }) => {
  const [inputField, setInputField] = useState([{ price: "", ration: "" }]);

  const handleChangeInput = (e, index) => {
    const values = [...inputField];
    values[index][e.target.name] = e.target.value;
    setInputField(values);
  };

  const handleAddFields = () => {
    setInputField([...inputField, { price: "", ration: "" }]);
  };

  const handleDeleteFields = (index) => {
    const values = [...inputField];
    values.splice(index, 1);
    setInputField(values);
  };

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
                  name="price"
                  placeholder="Nhập tên món ăn"
                  className="w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-grayf3 focus:border-primary"
                  onChange={(e) => handleChangeInput(e, index)}
                  value={inputField.price}
                ></input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="ration">Khẩu phần</Label>
                <input
                  name="ration"
                  placeholder="Nhập khẩu phần"
                  className="w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-grayf3 focus:border-primary"
                  onChange={(e) => handleChangeInput(e, index)}
                  value={inputField.ration}
                ></input>
              </FormGroup>
            </div>

            <div className="flex justify-start gap-2 px-2 w-[104px]">
              {index > 0 && (
                <div
                  className="px-2 py-2 text-white rounded cursor-pointer bg-error"
                  onClick={() => handleDeleteFields(index)}
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

export default MutilInputForm;
