/** @format */
import React from "react";
import { useNavigate } from "react-router-dom";
import formatHourDate from "utils/formatHourDate";
import selectState from "utils/selectState";
const ListParty = ({ data }) => {
  const dateParty = new Date(data?.PartyTimeStart);
  const hourDate = formatHourDate(dateParty);
  const navigate = useNavigate();

  if (!data) return null;
  return (
    <tr>
      <td>{data?.PartyID}</td>
      <td>{`${hourDate}`}</td>
      <td>{data?.PartyPlace}</td>
      <td>{data?.PartySubTotal}</td>
      <td>
        <span className="block w-full px-2 py-1 font-medium text-center rounded bg-primary bg-opacity-10 text-primary">
          {selectState(data?.PartyState)}
        </span>
      </td>
      <td>
        <span
          className="transition-all cursor-pointer hover:text-secondary"
          onClick={() => {
            navigate(`/party/${data?.PartyID}`);
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Xem chi tiết
        </span>
      </td>
    </tr>
  );
};

export default ListParty;
