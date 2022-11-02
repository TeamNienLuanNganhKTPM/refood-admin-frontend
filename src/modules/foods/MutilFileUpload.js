/** @format */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
const queryString = require("query-string");

const MutilFileUpload = ({ name = "", setImages, img, setSelectDeleteImg }) => {
  const [inputFile, setInputFile] = useState([]);
  const [selectImg, setSelectImg] = useState([]);
  const handleChangeFile = (e) => {
    const values = e.target.files;
    for (let i = 0; i < values.length; i++) {
      const newImage = values[i];
      setInputFile((prevState) => [...prevState, newImage]);
    }
  };

  useEffect(() => {
    if (img?.length > 0) {
      setSelectImg(img);
    }
  }, [img, img?.length]);

  useEffect(() => {
    setImages(inputFile);
  }, [inputFile, setImages]);

  const handleItemImage = (index) => {
    const values = [...inputFile];
    values.splice(index, 1);
    setInputFile(values);
  };

  const handleSelectImage = (item, index) => {
    const foodimagedeleted = queryString.parseUrl(item.FoodImageUrl);
    const values = [...selectImg];
    values.splice(index, 1);
    setSelectImg(values);
    setSelectDeleteImg((prevState) => [
      ...prevState,
      foodimagedeleted.query.id,
    ]);
  };

  return (
    <>
      <input
        type="file"
        id="file"
        multiple
        name={name}
        onChange={(e) => handleChangeFile(e)}
      />
      <label
        htmlFor="file"
        className="text-white h-[54px] w-[200px] justify-center bg-secondary py-3 px-4 rounded-sm flex items-center "
      >
        Chọn hình ảnh
      </label>
      <div className="flex justify-center gap-3">
        {inputFile?.length > 0 &&
          inputFile.map((item, index) => {
            const url = URL.createObjectURL(item);
            return (
              <div
                className="w-[54px] h-[54px] relative hover:opacity-90"
                key={index}
              >
                <img
                  src={url}
                  alt=""
                  className="object-cover w-full h-full rounded-sm"
                />
                <span
                  className="absolute top-0 right-0 text-white cursor-pointer hover:text-error"
                  onClick={() => handleItemImage(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>
            );
          })}
        {selectImg?.length > 0 &&
          selectImg.map((item, index) => {
            return (
              <div
                className="w-[54px] h-[54px] relative hover:opacity-90"
                key={index}
              >
                <img
                  src={item.FoodImageUrl}
                  alt=""
                  className="object-cover w-full h-full rounded-sm"
                />
                <span
                  className="absolute top-0 right-0 text-white cursor-pointer hover:text-error"
                  onClick={() => handleSelectImage(item, index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

MutilFileUpload.propTypes = {
  name: PropTypes.string,
  img: PropTypes.array,
  setImages: PropTypes.func,
  setSelectDeleteImg: PropTypes.func,
};

export default withErrorBoundary(React.memo(MutilFileUpload), {
  FallbackComponent: ErrorComponent,
});
