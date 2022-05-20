import React from "react";
import LandingNavbar from "../../components/LandingNavbar";
import { Link } from "react-router-dom";
import ReusableButton from "../../components/Button/button";

const Homepage = () => {
  return (
    <div>
      <LandingNavbar />
      {/* <h1>Welcome to solution recaller</h1> */}
      {/* <div>
        <button className="btn btn-primary">
          <Link to="/login">Login</Link>
        </button>
      </div>

      <div>
        <button className="btn btn-primary">
          <Link to="/signup">Signup</Link>
        </button>
      </div> */}
      <ReusableButton text="Login">
        <Link to="/login"></Link>
      </ReusableButton>
      <ReusableButton text="Register" />
    </div>
  );
};

export default Homepage;
