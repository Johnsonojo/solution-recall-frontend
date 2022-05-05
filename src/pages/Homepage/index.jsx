import React from "react";
import LandingNavbar from "../../components/LandingNavbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <LandingNavbar />
      <h1>Welcome to solution recaller</h1>
      <div>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>

      <div>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
