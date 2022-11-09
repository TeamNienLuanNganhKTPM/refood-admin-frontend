/** @format */

import ModalForm from "components/modal/ModalForm";
import useModal from "hooks/useModal";
import React from "react";

import formatToDate from "utils/formatDate";
import RelyCommentModal from "./RelyCommentModal";

const ListComment = ({ rely }) => {
  const { modalIsOpen, openModal, closeModal } = useModal();
  const handleRely = () => {
    openModal();
  };
  return (
    <tr>
      <td>
        <span>{rely.CommentId}</span>
      </td>
      <td>{rely.CommentOwnerName}</td>
      <td>{rely.CommentFoodName.slice(0, 10) + "..."}</td>

      <td>{rely.CommentContent.slice(0, 20) + "..."}</td>
      <td>{formatToDate(rely.CommentTime)}</td>
      <td>
        <span
          className="text-base cursor-pointer text-primary"
          onClick={handleRely}
        >
          Trả lời
        </span>
        <ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal}>
          <RelyCommentModal
            closeModal={closeModal}
            commentId={rely.CommentId}
            content={rely.CommentContent}
          ></RelyCommentModal>
        </ModalForm>
      </td>
    </tr>
  );
};

export default ListComment;
