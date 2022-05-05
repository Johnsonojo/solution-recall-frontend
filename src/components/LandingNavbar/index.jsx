import React from "react";
import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Solution Caller
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex">
              <div>
                <Link to="/login">Login</Link>
              </div>
              <div>
                <Link to="/signup">Signup</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
