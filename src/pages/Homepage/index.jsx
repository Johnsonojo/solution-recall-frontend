import React from "react";
import LandingNavbar from "../../components/LandingNavbar";
import "./style.scss";
import loginImage from "../../assets/images/Login.png";

const Homepage = () => {
  return (
    <div>
      <LandingNavbar />
      <h1>Welcome to solution recaller</h1>

      <div className="container">
        <div className="main-title">
          <h3>How it works</h3>
        </div>
        <section className="section-wrapper py-4">
          <h4 className="mb-4">Step 1</h4>
          <div className="row step-wrapper hmmm">
            <div className="col-sm-12 col-md-4">
              <p>
                Login if you have an account or register if you don't have one.
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src={loginImage} alt="login" />
            </div>
          </div>
        </section>

        <section className="section-wrapper py-4">
          <h4 className="mb-4">Step 2</h4>
          <div className="row step-wrapper hmmm">
            <div className="col-sm-12 col-md-6">
              <img src={loginImage} alt="Step 2 pics" />
            </div>
            <div className="col-sm-12 col-md-4">
              <p>Click the create button</p>
            </div>
          </div>
        </section>

        <section className="section-wrapper py-4">
          <h4 className="mb-4">Step 3</h4>
          <div className="row step-wrapper hmmm">
            <div className="col-sm-12 col-md-4">
              <p>
                Fill in the details of the problem, such as title, description
                and solution and click the create button. You can format your
                solution using the in-built text editor.
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src={loginImage} alt="Step 2 pics" />
            </div>
          </div>
        </section>

        <section className="section-wrapper py-4">
          <h4 className="mb-4">Step 4</h4>
          <div className="row step-wrapper hmmm">
            <div className="col-sm-12 col-md-6">
              <img src={loginImage} alt="Step 2 pics" />
            </div>
            <div className="col-sm-12 col-md-4">
              <p>
                Navigate to the search page to search for the saved problem.
                Enter your search keyword in the input field, click the recall
                button and see a list of post matching your search keyword.
              </p>
            </div>
          </div>
        </section>

        <section className="section-wrapper py-4">
          <h4 className="mb-4">Step 5</h4>
          <div className="row step-wrapper hmmm">
            <div className="col-sm-12 col-md-4">
              <p>
                Once the desired solved problem has been found, click on the
                title of the post to see the details of a problem. you can
                choose to edit the problem details or delete it. If a problem
                more than one solution, you can just edit the problem and add
                the multiple solutions in the text editor and format it as you
                like.
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src={loginImage} alt="Step 2 pics" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
