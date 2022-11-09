/** @format */

import { partyPage } from "constants/constants";
import LayoutDashboardTable from "layout/LayoutDashboardTable";
import ListParty from "modules/party/ListParty";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllPartys } from "store/party/slice";

const PartyPage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    function fetchAllOrder() {
      try {
        dispatch(
          getAllPartys({
            pageCur: partyPage.pageCurDefault,
            numOnPage: partyPage.pageOnNum,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllOrder();
  }, [dispatch]);

  const { parties, pageNumberParty } = useSelector((state) => state.parties);

  useEffect(() => {
    if (!parties || !parties?.length) return;
    setPageCount(pageNumberParty);
  }, [parties, nextPage, pageNumberParty]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(
      getAllPartys({
        pageCur: event.selected + 1,
        numOnPage: partyPage.pageOnNum,
      })
    );
  };

  return (
    <LayoutDashboardTable title="Danh sách đơn đặt tiệc">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Thời gian đãi tiệc</th>
            <th>Địa điểm</th>
            <th>Số bàn</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {parties?.length > 0 &&
            parties.map((item) => (
              <ListParty data={item} key={item.PartyID}></ListParty>
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

export default PartyPage;
