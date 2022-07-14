import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Image from "../../src/public/img/adminsite.png";
const AdminSite = () => {
  return (
    <>
      <Navbar />
      <div className="bg container">
        <div className="mt-5 text-center">
          <img
            class="Yaf d-block mx-auto mb-0"
            src={Image}
            alt=""
            width="280"
            height="230"
          />
          <h2 className="m-3 fw-bold upper-casez m-5">Admin Site</h2>
          <p className="lead">Here you can Administrate the Site.</p>
          <button className="button-85 navbar-brand m-3 ">
            <Link to={"usersinfo"} className="navbar-brand  ">
              Users Info
            </Link>
          </button>
          <button className="button-85 navbar-brand m-3 ">
            <Link to={"postsinfo"} className="navbar-brand">
              Post Info
            </Link>
          </button>
          <button className="button-85 navbar-brand m-3 ">
            <Link to={"balanceinfo"} className="navbar-brand ">
              Balance info
            </Link>
          </button>
        </div>
        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
};

export default AdminSite;
