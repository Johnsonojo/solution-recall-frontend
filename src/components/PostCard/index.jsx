import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import logo3 from "../../assets/images/code.jpg";
import "./style.scss";

const PostCard = ({ eachProblem }) => {
  return (
    <Card className="post-card h-100">
      <Card.Img variant="top" src={eachProblem?.imageUrl || logo3} />
      <Card.Body>
        <Card.Title>{eachProblem?.problemTitle}</Card.Title>
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
