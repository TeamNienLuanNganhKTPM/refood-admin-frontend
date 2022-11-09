/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { updateStateUser } from "store/users/slice";
import formatPhone from "utils/formatPhone";
import formatStateUser from "utils/formatStateUser";

const ListUser = ({ user }) => {
  const dispatch = useDispatch();
  const handleUpdateState = () => {
    if (user?.CustomerState === 1) {
      dispatch(
        updateStateUser({
          userphonenumber: user?.CustomerPhone,
          active_state: false,
        })
      );
    } else {
      dispatch(
        updateStateUser({
          userphonenumber: user?.CustomerPhone,
          active_state: true,
        })
      );
    }
  };
  return (
    <tr>
      <td>{user?.CustomerId}</td>
      <td>{user?.CustomerName}</td>
      <td>{formatPhone(user?.CustomerPhone)}</td>
      <td>{user?.CustomerEmail || "Chưa có email"}</td>
      <td>
        {user?.CustomerState === 1 ? (
          <span className="block w-full px-2 py-1 font-medium text-center rounded bg-primary bg-opacity-10 text-primary">
            {formatStateUser(user?.CustomerState)}
          </span>
        ) : (
          <span className="block w-full px-2 py-1 font-medium text-center rounded bg-error bg-opacity-10 text-error">
            {formatStateUser(user?.CustomerState)}
          </span>
        )}
      </td>
      <td>
        {user?.CustomerState === 1 ? (
          <span
            className="block w-full px-2 py-1 font-medium text-center rounded cursor-pointer bg-error bg-opacity-10 text-error"
            onClick={handleUpdateState}
          >
            Khóa
          </span>
        ) : (
          <span
            className="block w-full px-2 py-1 font-medium text-center rounded cursor-pointer bg-secondary bg-opacity-10 text-secondary"
            onClick={handleUpdateState}
          >
            Duyệt
          </span>
        )}
      </td>
    </tr>
  );
};

export default ListUser;
