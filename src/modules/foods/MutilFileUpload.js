/** @format */

import React, { useEffect, useState } from "react";

const MutilFileUpload = ({ name = "", setImages }) => {
  const [inputFile, setInputFile] = useState([]);
  const handleChangeFile = (e) => {
    const values = e.target.files;
    for (let i = 0; i < values.length; i++) {
      const newImage = values[i];
      setInputFile((prevState) => [...prevState, newImage]);
    }
  };

  useEffect(() => {
    setImages(inputFile);
  }, [inputFile, setImages]);
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
    </>
  );
};

export default MutilFileUpload;
