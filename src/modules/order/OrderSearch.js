/** @format */

import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchOrder } from "store/order/slice";
import Swal from "sweetalert2";
const queryString = require("query-string");

const OrderSearch = ({ setSearch }) => {
  const { control, handleSubmit, register } = useForm({
    mode: "onChange",
  });
  const dispatch = useDispatch();

  const handleSubmitSearchOrder = (values) => {
    const param = queryString.stringify(values);
    setSearch(values);
    Swal.fire({
      title: "Chờ trong giây lát!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => {
      dispatch(searchOrder(`1/10?${param}`));
    });
  };
  return (
    <form
      className="mb-10"
      onSubmit={handleSubmit(handleSubmitSearchOrder)}
      autoComplete="off"
    >
      <div className="flex justify-end gap-4">
        <Input
          name="orderid"
          type="text"
          control={control}
          placeholder="Tìm theo mã đơn hàng"
        ></Input>
        <Input
          name="customerphone"
          type="text"
          control={control}
          placeholder="Tìm theo số điện thoại"
        ></Input>
        <div className="flex items-end gap-2">
          <input
            type="text"
            name="datestart"
            {...register("datestart")}
            onFocus={(e) => (e.target.type = "date")}
            placeholder="Ngày bắt đầu"
            className="w-[220px] px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-grayf3 focus:border-primary"
          />
          <span className="text-lg text-text1">đến</span>
          <input
            type="text"
            name="dateend"
            {...register("dateend")}
            onFocus={(e) => (e.target.type = "date")}
            placeholder="Ngày kết thúc"
            className="w-[220px] px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-grayf3 focus:border-primary"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Button
          kind="primary"
          className="py-0 min-h-[44px] rounded"
          type="submit"
        >
          Tìm kiếm
        </Button>
      </div>
    </form>
  );
};

export default OrderSearch;
