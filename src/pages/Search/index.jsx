import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import MainNavbar from "../../components/MainNavbar";

const SearchPost = () => {
  return (
    <div>
      <MainNavbar />

      <h1>SearchPost</h1>
      <Container>
        <Row className="mt">
          <Col xs={12} md={6} lg={4}></Col>

          <Col xs={12} md={6} lg={4}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Enter keyword or tag"
                className="col-sm-4"
                aria-label="Search"
              />
              <Button variant="outline-dark" className="col-sm-3">
                Search
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={6} lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchPost;
