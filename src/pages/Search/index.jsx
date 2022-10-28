import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useQuery, useQueryClient } from "react-query";
import MainNavbar from "../../components/MainNavbar";
import PostCard from "../../components/PostCard";
import searchAPI from "../../redux/api/searchAPI";
import "./style.scss";

const SearchPost = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const queryClient = useQueryClient();
  const { error, isError, isLoading, refetch } = useQuery(
    ["searchedKeyword", searchTerm],
    () => searchAPI.searchKeyword(searchTerm),
    {
      onSuccess: (response) => {
        if (!response.error) {
          queryClient.setQueryData("searchedKeyword", () => response?.data);
          setAllPosts(response?.userPostsResult);
        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return (
    <div>
      <MainNavbar />
      <h3 className="mt-4 mb-4">Recall a solution</h3>
      <Container>
        <Row className="mt-4">
          <Col xs={12} md={6} lg={4}></Col>

          <Col xs={12} md={6} lg={4}>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Enter keyword"
                className="col-sm-4"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                variant="outline-dark"
                className="col-sm-3"
                disabled={isLoading}
                onClick={refetch}
              >
                Recall
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={6} lg={4}></Col>
        </Row>
      </Container>

      <Container>
        {!allPosts?.length ? (
          <Row className="mt-5">
            <div className="text-center">
              <h3>No post found</h3>
            </div>
          </Row>
        ) : (
          <Row xs={1} md={2} className="g-6 mt-5">
            {allPosts?.map((post) => (
              <Col xs={12} md={6} lg={4} key={post?.id} className="mb-4">
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

export default SearchPost;
