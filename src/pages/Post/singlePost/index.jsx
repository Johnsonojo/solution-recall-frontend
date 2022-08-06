import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import MainNavbar from "../../../components/MainNavbar";
import SinglePostCard from "../../../components/SinglePostCard";
import postAPI from "../../../redux/api/postAPI";
import queryKeys from "../../../redux/api/queryKeys";
import "./style.scss";

const DeletePostModal = (props) => {
  // console.log(props);
  // useQuery(
  //   [queryKeys.deletePost, props.postId],
  //   () => postAPI.deletePost(props.postId),
  //   {}
  // );

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div>
          <h3>Are you sure you want to delete this post?</h3>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="action-button-wrapper1">
          <Button variant="success" onClick={props.onHide}>
            Yes
          </Button>
          <Button variant="danger" onClick={props.onHide}>
            No
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const { postId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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
                onClick={() => navigate(`/edit-post/${postId}`)}
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
