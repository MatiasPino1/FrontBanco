import React from "react";
import Bubble from "../public/img/Bubble.png"
import Card from "../public/img/Card.png"
import Girl from "../public/img/Girl.png"
const Footer = () => {
  return (
    <>
      <div className="container bg">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-secondary border-top">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center text-center mb-3  text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32">
                <use link href="#bootstrap" />
              </svg>
            </a>
            <p className="bg text-center">&copy; 2022</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col text-center mb-3">
            <img src={Bubble} className="mb-3" width="50"></img>
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 bg">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col text-center mb-3">
          <img src={Card} className="mb-3" width="50"></img>
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link  bg p-0 bg">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col bg text-center mb-3">
          <img src={Girl} className="mb-3" width="50"></img>
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link bg p-0 bg">
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
