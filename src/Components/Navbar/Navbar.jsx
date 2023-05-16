import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav
        style={{ backgroundColor: "#0F2C67" }}
        className="navbar navbar-expand-lg navbar-light   shadow"
      >
        <div className="container-fluid">
          <Link className="navbar-brand ms-5 text-white" to={""}>
            Tour Advisor
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5 ">
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to={"/tourPackages"}>
                  Packages
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to={"/hotel"}>
                  Hotel
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to={"/contact"}>
                  Contact us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white dropdown-toggle"
                  to={""}
                  id="navbarDropdownAccount"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownAccount"
                >
                  <li>
                    <Link className="dropdown-item" to={""}>
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={""}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
