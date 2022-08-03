import React from "react";
import Button from "react-bootstrap/Button";
import logo1 from "../../assets/images/code.jpg";
import "./style.scss";

const SinglePostView = ({ eachProblem }) => {
  return (
    <div className="single-post-wrapper col">
      <div>
        <h2 className="post-card-title">{eachProblem?.problemTitle}</h2>
      </div>
      <div>
        {!eachProblem?.imageUrl ? (
          <img src={logo1} alt="by pexel" />
        ) : (
          <img src={eachProblem?.imageUrl} alt="" />
        )}
      </div>
      <br />
      <div>
        <h5>{eachProblem?.problemDescription}</h5>
        <p>{eachProblem?.problemSolution}</p>
      </div>
      <div className="action-button-wrapper col-6">
        <Button variant="success">Edit</Button>
        <Button variant="dark">Delete</Button>
      </div>
    </div>
  );
};

export default SinglePostView;
