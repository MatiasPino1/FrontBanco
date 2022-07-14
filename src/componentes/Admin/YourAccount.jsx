import React from "react";
import Image from "../../public/img/ya.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Delete from "../../public/img/icons/delete.png";
import Edit from "../../public/img/icons/edit.png";
const YourAccount = () => {
  let userID = sessionStorage.getItem("userId");
  let userName = sessionStorage.getItem("userName");
  let completeName = sessionStorage.getItem("completeName");
  let userEmail = sessionStorage.getItem("userEmail");
  let savingsBank = sessionStorage.getItem("savingsBank");
  return (
    <>
      <Navbar />
      <div class="px-4 py-5 mt-5 text-center">
        <h1 class="display-5 lh-1 fw-bold">Hello {userName} ! </h1>
        <div class="col-lg-6 text-center mx-auto">
          <p class=" mt-5 mb-4">
            Here you can check your Account Setting and modify has needed.
          </p>
          <img
            class="Yaf d-block mx-auto mb-0"
            src={Image}
            alt=""
            width="250"
            height="330"
          />
          <div className="cards  bg-opacity-10 mx-auto bg-opacity-10 rounded  py-5 px-4">
            <div className="text-center">
              <h5 class="fw-bold text-center fst-italic  mb-4 lh-1 bg">
                YOUR INFORMATION
              </h5>

              <ul className="navbar-nav mb-2">
                <li className="fw-bold mb-3">User ID : # {userID}</li>
                <li className="fw-bold mb-3 ">
                  Complete Name : {completeName}
                </li>
                <li className="fw-bold mb-3">Savings Bank: {savingsBank}</li>
                <li className="fw-bold ">Email : {userEmail}</li>
              </ul>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <Link to={"/editprofile"} className="social-link">
                    <img
                      src={Edit}
                      alt=""
                      width="50"
                      height="50"
                      className="img-fluid "
                    />
                  </Link>
                </li>

                <li className="list-inline-item">
                  <Link to={"/adminsite/usersinfo"} className="social-link">
                    <img
                      src={Delete}
                      alt=""
                      width="50"
                      height="50"
                      className="img-fluid "
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="d-grid gap-2 d-sm-flex justify-content-center">
          <Link to={"/adminsite"} class="navbar-brand button-85 ">
            Admin Site &raquo;
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default YourAccount;
