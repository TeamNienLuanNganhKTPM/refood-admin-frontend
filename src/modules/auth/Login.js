/** @format */

import useToggleValue from "hooks/useToggleValue";
import React, { useEffect } from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import IconEyeToggle from "components/icons/IconEyeToggle";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { Button } from "components/button";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "store/auth/slice";

const schema = yup.object({
  phonenumber: yup.string().required("Vui lòng nhập số điện thoại"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

const Login = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const dispatch = useDispatch();

  const handleLoginForm = (values) => {
    if (!isValid) return;
    dispatch(authLogin(values));
    reset({});
  };

  const { admin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (admin) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin]);

  return (
    <LayoutAuthentication>
      <div>
        <Link to="/" className="inline-block mb-5 lg:mb-16">
          <img srcSet="/refood-logo.png 2x" alt="admin-logo" />
        </Link>
      </div>
      <form onSubmit={handleSubmit(handleLoginForm)}>
        <FormGroup>
          <Label htmlFor="phonenumber">Số điện thoại</Label>
          <Input
            control={control}
            name="phonenumber"
            placeholder="Nhập số điện thoại"
            error={errors.phonenumber?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Mật khẩu</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Nhập mật khẩu"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium cursor-pointer text-primary">
              Quên mật khẩu?
            </span>
          </div>
        </FormGroup>
        <Button className="w-full" kind="primary" type="submit">
          Đăng nhập
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default Login;
