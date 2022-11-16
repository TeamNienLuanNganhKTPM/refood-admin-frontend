/** @format */

import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchOrder } from "store/order/slice";
import Swal from "sweetalert2";
import OrderRangeDate from "./OrderRangeDate";
const queryString = require("query-string");

const OrderSearch = ({ setSearch }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { control, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (startDate) {
      const y = startDate.getFullYear();
      const m = startDate.getMonth() + 1;
      const d = startDate.getDate();
      setValue("datestart", `${y}-${m}-${d}`);
    }
  }, [startDate, setValue]);

  useEffect(() => {
    if (endDate) {
      const y = endDate.getFullYear();
      const m = endDate.getMonth() + 1;
      const d = endDate.getDate();
      setValue("dateend", `${y}-${m}-${d}`);
    }
  }, [endDate, setValue]);

  const handleSubmitSearchOrder = (values) => {
    console.log("handleSubmitSearchOrder ~ values", values);
    const param = queryString.stringify(values);
    console.log("handleSubmitSearchOrder ~ param", param);
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
          {/* <input
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
          /> */}
          <OrderRangeDate
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          ></OrderRangeDate>
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
