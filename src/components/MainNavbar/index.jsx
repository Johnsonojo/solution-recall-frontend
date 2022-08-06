import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.scss";

const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">Solution Caller</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <Link to="/dashboard">Dashboard</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/create-post">Create Post</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/all-posts">All Posts</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/posts/search">Search</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/search">Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
