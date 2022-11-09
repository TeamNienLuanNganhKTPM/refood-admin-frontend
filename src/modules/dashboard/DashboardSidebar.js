/** @format */

import React from "react";
import ErrorComponent from "components/common/ErrorComponent";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authLogOut } from "store/auth/slice";
import {
  IconCategory,
  IconDarkmode,
  IconDashboard,
  IconLogout,
  IconOrder,
  IconParty,
  IconProduct,
  IconProfile,
  IconUser,
} from "components/icons";
import { withErrorBoundary } from "react-error-boundary";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Trang chủ",
    url: "/",
  },
  {
    icon: <IconProduct></IconProduct>,
    title: "Sản phẩm",
    url: "/product",
  },
  {
    icon: <IconCategory></IconCategory>,
    title: "Thực đơn",
    url: "/category",
  },
  {
    icon: <IconOrder></IconOrder>,
    title: "Đơn hàng",
    url: "/order",
  },
  {
    icon: <IconParty></IconParty>,
    title: "Đặt tiệc",
    url: "/party",
  },
  {
    icon: <IconUser></IconUser>,
    title: "User",
    url: "/user",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Admin",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Đăng xuất",
    url: "/logout",
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Light/Dark",
    url: "/#",
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  const navlinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:mt-auto last:bg-white last:shadow-sdprimary";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => {
        if (link.url === "/logout") {
          return (
            <button
              className={navlinkClass}
              key={link.title}
              onClick={() => {
                dispatch(authLogOut());
                navigate("/login");
              }}
            >
              <span>{link.icon}</span>
              <span className="md:hidden">{link.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? `${navlinkClass} text-primary bg-primary bg-opacity-20`
                : `${navlinkClass} text-icon-color hover:bg-primary hover:text-primary hover:bg-opacity-20 transition-all`
            }
          >
            <span>{link.icon}</span>
            <span className="md:hidden">{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default withErrorBoundary(DashboardSidebar, {
  FallbackComponent: ErrorComponent,
});
