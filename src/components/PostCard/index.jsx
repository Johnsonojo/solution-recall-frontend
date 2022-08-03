import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/code.jpg";
import "./style.scss";

const PostCard = ({ eachProblem }) => {
  const navigate = useNavigate();

  return (
    <Card className="post-card h-100">
      <Card.Img variant="top" src={eachProblem?.imageUrl || logo1} />
      <Card.Body>
        <Card.Title
          className="post-card-title"
          onClick={() => navigate(`/post/${eachProblem?.id}`)}
        >
          {eachProblem?.problemTitle}
        </Card.Title>
        <Card.Subtitle>{eachProblem?.problemDescription}</Card.Subtitle>
        <br />
        <Card.Text className="text-truncate">
          {eachProblem?.problemSolution}
        </Card.Text>
        {eachProblem?.tags?.map((tag) => (
          <Badge className="tag-badge" bg="secondary" key={tag?.id}>
            {tag?.name}
          </Badge>
        ))}
      </Card.Body>
    </Card>
  );
};

export default PostCard;
