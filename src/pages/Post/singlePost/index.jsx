import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import MainNavbar from "../../../components/MainNavbar";
import SinglePostView from "../../../components/SinglePostView";
import postAPI from "../../../redux/api/postAPI";
import queryKeys from "../../../redux/api/queryKeys";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState({});
  const { postId } = useParams();
  const queryClient = useQueryClient();

  const fetchOnePost = useQuery(
    [queryKeys.getOnePost, postId],
    () => postAPI.getOnePost(postId),
    {
      onSuccess: (response) => {
        if (!response.error) {
          queryClient.setQueryData("singlePost", () => response?.data);
          setSinglePost(response?.data);
        }
      },
    }
  );
  const { error, isError, isLoading } = fetchOnePost;

  return (
    <div>
      <MainNavbar />
      <br />
      <Container className="mt-4">
        {isLoading && <div>Loading...</div>}
        {isError && <div>{error}</div>}
        <Row>
          <Col xs={12} md={1} className="mb-4"></Col>
          <Col xs={12} md={6} className="mb-4">
            <SinglePostView eachProblem={singlePost} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SinglePost;
