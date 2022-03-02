import { Button } from "react-bootstrap";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
export default function Home() {
  let btnStyle = { width: 150, fontSize: 17, fontWeight: "bold", margin: 2 };
  return (
    <>
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Fund For Change</h1>
        <div>
          <Link to="/services">
            <Button style={btnStyle} variant="outline-secondary">
              Request an Event
            </Button>
          </Link>

          <Button style={btnStyle} variant="outline-success">
            About
          </Button>
        </div>
      </section>
    </>
  );
}
