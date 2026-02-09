import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { Home } from "./pages";
import { Detail } from "./pages";
import { Nav } from "./pages";
import { Search } from "./pages";

const Router = () => {
  return (
    <>
     <Nav />
    <Routes>
      <Route path="/" element={<> <Search /> <Home /> </>} />
      <Route path="/Detail" element={<Detail />} />
    </Routes>
    </>
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
