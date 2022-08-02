import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../../components/MainNavbar";
import PostCard from "../../components/PostCard";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MainNavbar />
      <h1>DashboardPage</h1>
      <Button
        variant="dark"
        type="button"
        onClick={() => {
          navigate("/create-post");
        }}
        className="col-lg-2 mt-4"
        size="lg"
      >
        Create Post
      </Button>
      <PostCard />
    </div>
  );
};

export default DashboardPage;
