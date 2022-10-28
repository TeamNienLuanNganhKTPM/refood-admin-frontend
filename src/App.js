/** @format */

import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const InvoicePage = lazy(() => import("./pages/InvoicePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const LayoutDashboard = lazy(() => import("./layout/LayoutDashboard"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route path="/product" element={<ProductPage></ProductPage>}></Route>
          <Route
            path="/category"
            element={<CategoryPage></CategoryPage>}
          ></Route>
          <Route path="/order" element={<OrderPage></OrderPage>}></Route>
          <Route path="/invoice" element={<InvoicePage></InvoicePage>}></Route>
          <Route
            path="/profile/customer"
            element={<ProfilePage></ProfilePage>}
          ></Route>
        </Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
