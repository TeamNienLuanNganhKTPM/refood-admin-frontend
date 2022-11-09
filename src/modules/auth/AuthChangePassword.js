/** @format */

import { Button } from "components/button";
import FormGroup from "components/common/FormGroup";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { changePasswordAdmin } from "store/auth/slice";

const schema = yup.object({
  oldpassword: yup.string().required("Vui lòng nhập mật khẩu cũ"),
  newpassword: yup.string().required("Vui lòng nhập mật khẩu mới"),
  repassword: yup.string().required("Vui lòng nhập lại mật khẩu"),
});

const AuthChangePassword = () => {
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

  const handleChangePasswordForm = (values) => {
    try {
      dispatch(changePasswordAdmin(values));
      reset({});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[500px]">
      <form onSubmit={handleSubmit(handleChangePasswordForm)}>
        <FormGroup>
          <Label htmlFor="oldpassword">Mật khẩu cũ</Label>
          <Input
            control={control}
            name="oldpassword"
            placeholder="Nhập mật khẩu cũ"
            error={errors.oldpassword?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="newpassword">Mật khẩu mới</Label>
          <Input
            control={control}
            name="newpassword"
            placeholder="Nhập mật khẩu mới"
            error={errors.newpassword?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="repassword">Xác nhận mật khẩu</Label>
          <Input
            control={control}
            name="repassword"
            placeholder="Nhập lại mật khẩu"
            error={errors.repassword?.message}
          ></Input>
        </FormGroup>
        <div className="flex justify-end">
          <Button kind="primary" type="submit" className="rounded">
            Đổi mật khẩu
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthChangePassword;
