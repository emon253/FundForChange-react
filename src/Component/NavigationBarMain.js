import { NavLink, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import navStyle from "../styles/Navbar.module.css";
export default function NavigationBarMain() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [role,setRole] = useState(user?user.role:'')

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("user");
    navigate("login");
    window.location.reload();
  };
  return (
    <Navbar
      className="shadow-lg bg-white  p-4"
      expand="xl"
      fixed="top"
      collapseOnSelect
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <div className={navStyle.logo}>
            <h2>
              <span>F</span>und For Change
            </h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-5">
            <Nav.Link className={navStyle.navlink} as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link className={navStyle.navlink} as={NavLink} to="/event">
              Event
            </Nav.Link>
            {/* <Nav.Link className={navStyle.navlink} as={NavLink} to="/contact">
              contact
            </Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link
              className={navStyle.navlink}
              style={user ? { display: "none" } : {}}
              as={NavLink}
              to="/login"
            >
              Login
            </Nav.Link>

            <NavDropdown
              className={navStyle.navlink}
              style={user ? {} : { display: "none" }}
              title={user ? user.userName : ""}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                as={Link}
                to={user? '/usr/'+user.userId : '/'}
              >
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/my-event/id">
                My Events
              </NavDropdown.Item>
              <NavDropdown.Item style={role === 'ROLE_ADMIN' || role === 'ROLE_SupperAuthority' ?{}:{display:'none'}} as={Link} to="/admin">
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/usr/setting">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => logOut()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
