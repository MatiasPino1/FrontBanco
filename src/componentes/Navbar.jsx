import React from "react";
import Logo from "../public/img/vault.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  let username = sessionStorage.getItem("name");
  let token = sessionStorage.getItem("token");
  let email = sessionStorage.getItem("email");
  return (
    <>
      {token ? (
        //Navbar con token
        <nav className="navbar mt-3 navbar-dark navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              <img src={Logo} width="75px" height="70px" alt="Logo" />
              <Link className="navbar-brand fst-italic bg fw-bold" to={"/"}>
                sudBank
              </Link>
            </Link>
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
                  <Link
                    to={"/login"}
                    className="nav-link fw-bold active"
                    aria-current="page"
                    href="login"
                    onClick={() => {
                      sessionStorage.removeItem("token");
                      sessionStorage.removeItem("name");
                      sessionStorage.removeItem("email");
                      sessionStorage.removeItem("savingsBank");
                    }}
                  >
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/youraccount"}
                    className="nav-link"
                    aria-current="page"
                    href="youraccount"
                  >
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/editprofile"}
                    className="nav-link"
                    aria-current="page"
                    href="editprofile"
                  >
                    Edit Profile
                  </Link>
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
                    <div className="col-md-4 d-inline-block align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                      <a className="navbar-brand" href="/">
                        <img src={Logo} width="75px" height="70px" alt="Logo" />
                        <a className="navbar-brand bg fw-bold" href="#">
                          tokenBank
                        </a>
                      </a>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        //Navbar sin token
        <nav className="navbar mt-3 navbar-dark navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              <img src={Logo} width="75px" height="70px" alt="Logo" />
              <Link className="navbar-brand fst-italic bg fw-bold" to={"/"}>
                sudBank
              </Link>
            </Link>
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
                  <Link
                    to={"/login"}
                    className="nav-link fw-bold active"
                    aria-current="page"
                    href="login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/signup"}
                    className="nav-link"
                    aria-current="page"
                    href="/signup"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link"
                    aria-current="page"
                    href="/"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
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
      )}
    </>
  );
};

export default Navbar;
