import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../../../components/MainNavbar";
import PostCard from "../../../components/PostCard";
import postAPI from "../../../redux/api/postAPI";
import queryKeys from "../../../redux/api/queryKeys";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const allPostsForUser = useQuery([queryKeys.allPosts], postAPI.getAllPosts, {
    onSuccess: (response) => {
      if (!response.error) {
        queryClient.setQueryData(
          "allPosts",
          () => response?.data.paginatedUserPosts
        );
        setAllPosts(response?.data.paginatedUserPosts);
      }
    },
  });

  const { error, isError, isLoading } = allPostsForUser;

  return (
    <div>
      <MainNavbar />
      <div className="container top-content">
        <h2>All Posts</h2>
        <Button
          variant="dark"
          type="button"
          onClick={() => {
            navigate("/create-post");
          }}
          size="lg"
        >
          Create
        </Button>
      </div>
      <Container>
        {allPosts?.length === 0 ? (
          <Row>
            <div className="text-center">
              <h3>You have no posts</h3>
            </div>
          </Row>
        ) : (
          <Row xs={1} md={2} className="g-6">
            {allPosts?.map((post) => (
              <Col xs={12} md={6} lg={4} key={post?.id} className="mb-4">
                {isLoading && <div>Loading...</div>}
                {isError && <div>{error}</div>}
                <PostCard eachProblem={post} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default AllPosts;
