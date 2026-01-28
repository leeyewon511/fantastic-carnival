import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { Home } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
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
