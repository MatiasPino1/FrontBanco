import React, { useEffect } from "react";
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
import YourAccount from "./componentes/Admin/YourAccount";
import EditProfile from "./componentes/Admin/EditProfile";
import Home from "./componentes/Home";
import NoRute from "./componentes/Admin/NoRute";
import Forgot from "./componentes/Forgot";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<App><Home/></App>}
        >
        </Route>
         <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/forgot" element={<Forgot/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        <Route path="/adminsite" element={<AdminSite/>}>
          <Route path="usersinfo" element={<UsersInfo/>}></Route>
          <Route path="postsinfo" element={<PostsInfo/>}></Route>
          <Route
            path="balanceinfo"
            element={<BalanceInfo/>}
          ></Route>
        </Route>
        <Route
          path="/youraccount"
          element={<YourAccount/>}
        ></Route>
        <Route
          path="/editprofile"
          element={<EditProfile/>}
        ></Route>
        <Route path="*" element={<NoRute/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
