import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            Star HealthCare BD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center ">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#news">
                News
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#covid">
                Covid 19
              </Nav.Link>
              <Nav.Link as={HashLink} to="/aboutUS">
                About Us
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contactUS">
                Contact Us
              </Nav.Link>

              {}
              {user?.email ? (
                <div>
                  <Button onClick={logOut} variant="light">
                    Logout
                  </Button>
                  <Navbar.Text className="ms-2">
                    Signed in as:{" "}
                    <span className="text-light fw-bold">
                      {user?.displayName}
                    </span>
                  </Navbar.Text>
                </div>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <Button variant="light">Login/Register</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
