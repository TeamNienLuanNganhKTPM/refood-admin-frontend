/** @format */

import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "all .3s ease-out",
  },
};

Modal.setAppElement("#root");

const ModalForm = ({
  children,
  modalIsOpen,
  closeModal = () => {},
  className = "",
}) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className={className}
        overlayClassName="overlay"
        bodyOpenClassName="overflow"
      >
        {children}
      </Modal>
    </>
  );
};

ModalForm.propTypes = {
  children: PropTypes.any,
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default ModalForm;
