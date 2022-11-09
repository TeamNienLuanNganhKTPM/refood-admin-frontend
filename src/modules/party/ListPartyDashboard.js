/** @format */

import { foodsPage } from "constants/constants";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getAllPartys } from "store/party/slice";
import ListParty from "./ListParty";

const ListPartyDashboard = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const { parties, pageNumberParty } = useSelector((state) => state.parties);
  useEffect(() => {
    function fetchAllParties() {
      try {
        dispatch(
          getAllPartys({
            pageCur: foodsPage.pageCurDefault,
            numOnPage: foodsPage.pageOnNum,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllParties();
  }, [dispatch]);

  useEffect(() => {
    if (!parties || !parties?.length) return;
    setPageCount(pageNumberParty);
  }, [parties, nextPage, pageNumberParty]);

  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);

    dispatch(
      getAllPartys({
        pageCur: event.selected + 1,
        numOnPage: foodsPage.pageOnNum,
      })
    );
  };

  return (
    <>
      <div className="w-full overflow-x-auto border cursor-default scroll pur-scroll border-line">
        <table className="lg:w-full">
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
      </div>
      <div className="flex justify-end mt-2 bg-white rounded">
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
    </>
  );
};

export default ListPartyDashboard;
