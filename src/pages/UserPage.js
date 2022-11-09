/** @format */

import { userPage } from "constants/constants";
import LayoutDashboardTable from "layout/LayoutDashboardTable";
import ListUser from "modules/user/ListUser";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "store/users/slice";

const UserPage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchAllUsers() {
      try {
        dispatch(
          getAllUsers({
            pageCur: userPage.pageCurDefault,
            numOnPage: userPage.pageOnNum,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllUsers();
  }, [dispatch]);

  const { users, pageNumberUser } = useSelector((state) => state.users);

  useEffect(() => {
    if (!users || !users?.length) return;
    setPageCount(pageNumberUser);
  }, [users, nextPage, pageNumberUser]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(
      getAllUsers({
        pageCur: event.selected + 1,
        numOnPage: userPage.pageOnNum,
      })
    );
  };
  return (
    <LayoutDashboardTable title="Danh sách khách hàng">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 &&
            users.map((user) => (
              <ListUser user={user} key={user.CustomerId}></ListUser>
            ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-8 bg-white rounded">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </LayoutDashboardTable>
  );
};

export default UserPage;
