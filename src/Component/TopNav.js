import { Navbar, Nav } from "react-bootstrap";
import { Container } from "reactstrap";
import navStyle from "../styles/Navbar.module.css";
export default function TopNav(){
    <Navbar className={navStyle.nav1}>
    <Container>
      <Nav.Link
        className={navStyle.navLinks}
        style={{ color: "#0000FF" }}
        href="#deets"
      >
        Emergency dial 999
      </Nav.Link>
      <Nav className="ms-auto">
        <Nav.Link
          className={navStyle.navLinks}
          style={{ color: "#0000FF" }}
          href="#deets"
        >
          Login
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
}