import React from "react";
import createButton from "../../assets/images/create-button.png";
import createPage from "../../assets/images/create.png";
import loginImage from "../../assets/images/Login.png";
import search from "../../assets/images/search.png";
import singlePage from "../../assets/images/single.png";
import LandingNavbar from "../../components/LandingNavbar";
import "./style.scss";

const Homepage = () => {
  return (
    <div>
      <LandingNavbar />
      <div className="container col-sm-12 col-md-6 d-flex justify-content-center my-5">
        <h3 className="main-text">
          Are you tired of constantly searching for the solutions to technical
          problems, challenges and or blockers you have solved in the past?
          Well, with Solution Recaller you can document and recall them at any
          time in the future.
        </h3>
      </div>
      <div className="container">
        <div className="main-title">
          <h3 className="my-5">How it works</h3>
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
              <img src={createButton} alt="Step 2 pics" />
            </div>
            <div className="col-sm-12 col-md-4">
              <p>Click the create button on the top right corner</p>
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
              <img src={createPage} alt="Step 2 pics" />
            </div>
          </div>
        </section>

        <section className="section-wrapper py-4">
          <h4 className="mb-4">Step 4</h4>
          <div className="row step-wrapper hmmm">
            <div className="col-sm-12 col-md-6">
              <img src={search} alt="Step 2 pics" />
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
              <img src={singlePage} alt="Step 2 pics" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
