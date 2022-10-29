/** @format */

import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const OrderDetailPage = lazy(() => import("./pages/OrderDetailPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const LayoutDashboard = lazy(() => import("./layout/LayoutDashboard"));
const InvoicePage = lazy(() => import("./pages/InvoicePage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const AddFood = lazy(() => import("./modules/foods/AddFood"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route path="/product" element={<ProductPage></ProductPage>}></Route>
          <Route path="product/add" element={<AddFood></AddFood>}></Route>
          <Route
            path="/category"
            element={<CategoryPage></CategoryPage>}
          ></Route>
          <Route path="/order" element={<OrderPage></OrderPage>}></Route>
          <Route
            path="order/:slug"
            element={<OrderDetailPage></OrderDetailPage>}
          ></Route>
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
