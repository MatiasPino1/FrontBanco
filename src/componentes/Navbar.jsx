import React from "react";
import Logo from "../public/img/vault.png";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="navbar mt-3 navbar-dark navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} width="75px" height="70px" alt="Logo" />
            <a className="navbar-brand bg fw-bold" href="#">
              tokenBank
            </a>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"login"} className="nav-link fw-bold active" aria-current="page" href="login">Login</Link>
              </li>
              <li className="nav-item">
              <Link to={"signup"} className="nav-link" aria-current="page" href="signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to={"adminsite"} className="nav-link" aria-current="page" href="adminsite">Admin Site</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;