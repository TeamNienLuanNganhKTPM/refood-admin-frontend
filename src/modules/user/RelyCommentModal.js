/** @format */

import { Button } from "components/button";
import FormGroup from "components/common/FormGroup";
import { Textarea } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { relyComment } from "store/foods/slice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const schema = yup.object({
  content: yup.string().required("Vui lòng nhập nội dung câu trả lời"),
});

const RelyCommentModal = ({ closeModal, commentId, content }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const dispatch = useDispatch();
  const handleRelyComment = (values) => {
    const result = Object.assign({}, values, { commentid: commentId });
    try {
      dispatch(relyComment(result));
      reset({});
    } catch (error) {
      console.log(error);
    }
  };

  const { success } = useSelector((state) => state.foods);
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [success]);
  return (
    <div className="w-[500px] flex flex-col gap-3">
      <div className="flex items-center justify-between py-3 mb-5 border-b border-b-text4">
        <h3 className="text-xl font-semibold text-text2">Trả lời bình luận</h3>
        <div className="cursor-pointer text-primary" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-start gap-3 p-3 mb-5 rounded-sm bg-primary bg-opacity-10">
        <strong>Câu hỏi:</strong>
        {content}
      </div>
      <form onSubmit={handleSubmit(handleRelyComment)}>
        <FormGroup>
          <Label htmlFor="content">
            <strong>Trả lời</strong>
          </Label>
          <Textarea
            control={control}
            name="content"
            placeholder="Nhập câu trả lời"
            error={errors.content?.message}
          ></Textarea>
        </FormGroup>
        <div className="flex items-end justify-end gap-4">
          <Button
            kind="secondary"
            type="button"
            className="rounded w-[120px]"
            onClick={closeModal}
          >
            Thoát
          </Button>
          <Button kind="primary" type="submit" className="rounded w-[120px]">
            Trả lời
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RelyCommentModal;
