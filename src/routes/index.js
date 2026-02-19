import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Nav from "../components/layout/MainLayout/Nav/NavPresenter";
import Search from "../components/layout/MainLayout/Search/SearchPresenter";
import { Home, Detail, Group, Item } from "./pages";

const Router = () => {
  return (
    <MainLayout>
     
    <Routes>
      <Route path="/" element={<> <Search /> <Home /> </>} />
      <Route path="/Detail" element={<Detail />} />
      <Route path="/Group" element={<><Search/> <Group /></>} />
      <Route path="/Item" element={<Item />} />
    </Routes>
    </MainLayout>
  );
};

export default Router;

// react-router-dom 데이터 모드 권장 방식
// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <div></div>,
//       },
//     ],
//   },
// ]);
