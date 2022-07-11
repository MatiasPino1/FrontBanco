import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./componentes/LogIn";
import "./public/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./componentes/Signup";
import AdminSite from "./componentes/AdminSite";
import UsersInfo from "./componentes/Admin/UsersInfo";
import PostsInfo from "./componentes/Admin/PostsInfo";
import BalanceInfo from "./componentes/Admin/BalanceInfo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Route>
        <Route path="/adminsite" element={<AdminSite></AdminSite>}>
          <Route path="usersinfo" element={<UsersInfo></UsersInfo>}></Route>
          <Route path="postsinfo" element={<PostsInfo></PostsInfo>}></Route>
          <Route
            path="balanceinfo"
            element={<BalanceInfo></BalanceInfo>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
