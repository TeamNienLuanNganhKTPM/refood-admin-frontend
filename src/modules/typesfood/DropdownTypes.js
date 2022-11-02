/** @format */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoodTypes } from "store/foodtypes/slice";
import { Dropdown } from "components/dropdown";

const DropdownTypes = ({ setTypes, types }) => {
  const [selectTypes, setSelectTypes] = useState("");
  const [selectTypesId, setSelectTypesId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    function fetchAllFoodTypes() {
      try {
        dispatch(
          getAllFoodTypes({
            pageCur: 1,
            numOnPage: 100,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllFoodTypes();
  }, [dispatch]);
  const { foodtypes } = useSelector((state) => state.foodTypes);

  useEffect(() => {
    if (types && foodtypes) {
      const values = [...foodtypes];
      for (let i = 0; i < values.length; i++) {
        if (values[i].FoodTypeId === types) {
          setSelectTypes(values[i].FoodTypeName);
          break;
        }
      }
    }
  }, [foodtypes, types]);

  useEffect(() => {
    setTypes(selectTypesId);
  }, [selectTypesId, setTypes]);
  return (
    <>
      <Dropdown>
        <Dropdown.Select
          placeholder={selectTypes || "Chọn loại món ăn"}
          className="w-full h-[54px] bg-grayf3 text-text1"
        ></Dropdown.Select>
        <Dropdown.List className="overflow-y-scroll h-[150px] scroll border border-line">
          {foodtypes?.length > 0 &&
            foodtypes?.map((item, index) => {
              return (
                <Dropdown.Option
                  key={item.FoodTypeId}
                  onClick={() => {
                    setSelectTypes(item.FoodTypeName);
                    setSelectTypesId(item.FoodTypeId);
                  }}
                >
                  {item.FoodTypeName}
                </Dropdown.Option>
              );
            })}
        </Dropdown.List>
      </Dropdown>
    </>
  );
};

DropdownTypes.propTypes = {
  types: PropTypes.string,
  setTypes: PropTypes.func,
};

export default withErrorBoundary(DropdownTypes, {
  FallbackComponent: ErrorComponent,
});
