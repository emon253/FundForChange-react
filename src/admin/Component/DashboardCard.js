import { Card, Row, Col } from "react-bootstrap";
import "../styles/card-style.css";

export default function DashboardCard({title,image, num}) {
  return (
    <Card className="card" style={{ width: "25rem" }}>
      <Card.Body>
        <Row>
          <Col md={8}>
            <div className="card-title">
            <h3>{num}</h3>
              <h2>{title}</h2>
             
            </div>
          </Col>
          <Col  md={4}>
            <div>
              <img className="card-logo" src={image} alt="" />
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
