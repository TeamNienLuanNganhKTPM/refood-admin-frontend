/** @format */

import { userPage } from "constants/constants";
import LayoutDashboardTable from "layout/LayoutDashboardTable";
import ListComment from "modules/user/ListComment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComment } from "store/foods/slice";

const RelyPage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    function fetchAllComments() {
      try {
        dispatch(
          getAllComment({
            pageCur: userPage.pageCurDefault,
            numOnPage: userPage.pageOnNum,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllComments();
  }, [dispatch]);
  const { comments, pageNumberComment } = useSelector((state) => state.foods);

  return (
    <LayoutDashboardTable title="Danh sách bình luận">
      {comments?.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Khách hàng</th>
              <th>Món ăn</th>
              <th>Nội dung</th>
              <th>Ngày bình luận</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((rely) => (
              <ListComment rely={rely} key={rely.CommentId}></ListComment>
            ))}
          </tbody>
        </table>
      ) : (
        <span>Chưa có bình luận mới!</span>
      )}
    </LayoutDashboardTable>
  );
};

export default RelyPage;
