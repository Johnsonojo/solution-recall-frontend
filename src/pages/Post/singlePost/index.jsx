import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import MainNavbar from "../../../components/MainNavbar";
import SinglePostCard from "../../../components/SinglePostCard";
import postAPI from "../../../redux/api/postAPI";
import queryKeys from "../../../redux/api/queryKeys";
import DeletePostModal from "./DeleteModal";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState({});
  const [modalShow, setModalShow] = useState(false);
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
            <SinglePostCard eachProblem={singlePost} />
            <div className="action-button-wrapper2">
              <Button
                variant="outline-success"
                onClick={() => (window.location = `/edit-post/${postId}`)}
              >
                Edit
              </Button>
              <Button variant="outline-dark" onClick={() => setModalShow(true)}>
                Delete
              </Button>
            </div>
          </Col>
          <Col xs={12} md={5} className="mb-4"></Col>
        </Row>
      </Container>
      <DeletePostModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        postId={postId}
      />
    </div>
  );
};

export default SinglePost;
