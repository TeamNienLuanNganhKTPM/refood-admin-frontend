/** @format */

import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const UpdateFood = lazy(() => import("./modules/foods/UpdateFood"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const OrderDetailPage = lazy(() => import("./pages/OrderDetailPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const LayoutDashboard = lazy(() => import("./layout/LayoutDashboard"));
const PartyPage = lazy(() => import("./pages/PartyPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const AddFood = lazy(() => import("./modules/foods/AddFood"));
const PartyDetail = lazy(() => import("./modules/party/PartyDetail"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route path="/product" element={<ProductPage></ProductPage>}></Route>
          <Route path="product/add" element={<AddFood></AddFood>}></Route>
          <Route
            path="product/update/:slug"
            element={<UpdateFood></UpdateFood>}
          ></Route>
          <Route
            path="/category"
            element={<CategoryPage></CategoryPage>}
          ></Route>
          <Route path="/order" element={<OrderPage></OrderPage>}></Route>
          <Route
            path="order/:slug"
            element={<OrderDetailPage></OrderDetailPage>}
          ></Route>
          <Route path="/party" element={<PartyPage></PartyPage>}></Route>
          <Route
            path="party/:slug"
            element={<PartyDetail></PartyDetail>}
          ></Route>
          <Route path="/user" element={<UserPage></UserPage>}></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
