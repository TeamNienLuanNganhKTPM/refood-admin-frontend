/** @format */

import { Button } from "components/button";
import Price from "components/common/Price";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cancelParty, getPartyDetail, updateParty } from "store/party/slice";
import Swal from "sweetalert2";
import formatToDate from "utils/formatDate";
import formatHourDate from "utils/formatHourDate";
import formatPrice from "utils/formatPrice";
import nextState from "utils/nextState";
import selectState from "utils/selectState";
import PartyDetailItem from "./PartyDetailItem";

const PartyDetail = () => {
  const [nextParty, setNextParty] = useState("");
  const param = useParams();
  const id = param.slug;

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    function fetchPartyDetail() {
      dispatch(getPartyDetail(id));
    }
    fetchPartyDetail();
  }, [dispatch, id]);

  const { partyDetail } = useSelector((state) => state.parties);

  useEffect(() => {
    if (partyDetail) {
      setNextParty(nextState(partyDetail?.PartyState));
    }
  }, [partyDetail]);

  const dateParty = new Date(partyDetail?.PartyTimeStart);
  const hourDate = formatHourDate(dateParty);

  const handleConfirmParty = () => {
    try {
      Swal.fire({
        title: "Chờ trong giây lát!",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      }).then((result) => {
        dispatch(updateParty({ partyid: id }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePartyDetail = () => {
    try {
      Swal.fire({
        title: "Chờ trong giây lát!",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      }).then((result) => {
        dispatch(cancelParty({ partyid: id }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const data = partyDetail?.PartyDetails ? partyDetail?.PartyDetails : [];

  return (
    <>
      <div
        className="flex items-center justify-between py-2 mb-4 border-b lg:mb-10 md:mb-10 border-b-line"
        onClick={() => {
          navigate("/party/");
        }}
      >
        <div className="flex cursor-pointer text-text1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-medium text-center uppercase text-text1">
            Trở lại
          </span>
        </div>
        <div className="items-center justify-end hidden gap-3 text-base font-normal uppercase lg:flex md:flex">
          <span className="text-text1">
            Ngày đặt: {formatToDate(partyDetail?.PartyDate)}
          </span>
          <span>|</span>
          <span className="text-text1">
            ID Đơn hàng: {partyDetail?.PartyID}
          </span>
          <span>|</span>
          <span className="text-redPrimary">
            {selectState(partyDetail?.PartyState)}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-start gap-1 text-xs font-normal uppercase lg:hidden md:hidden">
        <span className="text-text">
          Ngày đặt: {formatToDate(partyDetail?.PartyDate)}
        </span>
        <span>|</span>
        <span className="text-text">ID Đơn hàng: {partyDetail?.PartyID}</span>
        <span>|</span>
        <span className="text-redPrimary">
          {selectState(partyDetail?.PartyState)}
        </span>
      </div>
      <div className="mt-5 border-b lg:mt-10 md:mt-10 border-b-line">
        <h3 className="mb-2 text-lg font-medium b-4 text-text1">
          Thông tin khách hàng
        </h3>
        <div className="flex flex-col gap-1 p-2 text-sm text-text1 bg-primary bg-opacity-10">
          <span>{partyDetail?.PartyCustomer}</span>
          <span>Địa điểm: {partyDetail?.PartyPlace}</span>
          <span>Loại tiệc: {partyDetail?.PartyType}</span>
          <span>Thời gian đãi tiệc: {`${hourDate}`}</span>
        </div>
      </div>
      <div className="mt-5 border-b lg:mt-5 md:mt-5 border-b-line">
        <h3 className="mb-2 text-lg font-medium b-4 text-text1">Ghi chú</h3>
        <div className="flex flex-col gap-1 text-sm ">
          <span className="p-2 text-text1 bg-primary bg-opacity-10">
            {partyDetail?.PartyNote
              ? partyDetail?.PartyNote
              : "Không có ghi chú"}
          </span>
        </div>
      </div>
      <h3 className="mt-4 mb-4 text-lg font-medium text-text">
        Danh sách món ăn
      </h3>
      <div className="flex flex-col gap-4">
        <PartyDetailItem
          data={data}
          partyNumOfTable={partyDetail?.PartyNumOfTable}
        ></PartyDetailItem>
      </div>

      <div className="flex items-center justify-end gap-3 mt-5">
        <span className="text-lg font-medium text-text">Tổng tiền:</span>
        <Price sizeText="20px">{formatPrice(partyDetail?.PartySubTotal)}</Price>
      </div>

      {partyDetail?.PartyState < 2 && (
        <div className="flex justify-end gap-3 mt-8">
          <Button
            className="w-[140px] rounded"
            height="44px"
            kind="secondary"
            onClick={handleDeletePartyDetail}
          >
            Hủy đơn
          </Button>
          <Button
            kind="primary"
            className="rounded"
            onClick={handleConfirmParty}
          >
            {nextParty}
          </Button>
        </div>
      )}
    </>
  );
};

export default PartyDetail;
