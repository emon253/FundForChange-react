import style from "../../styles/EventStyle.module.css";
import { Card } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import image from "./images/image1.png";
import { useParams } from "react-router-dom";
import useApiCall from "../../Hooks/useApiCall";

export default function EventProfile() {
  // Get ID from URL
  const params = useParams();
  const { response, error } = useApiCall("/event/" + params.id);
  console.log(response);

  return (
    <>
      <div className={style.box}>
        <h2 className={style.title}>{response.eventName}</h2>

        <div>
          <Row>
            <Col xs={12} md={8}>
              <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Text>{response.description}</Card.Text>
                  <Button variant="success">Donate</Button>
                  <Button variant="info">Share</Button>{" "}
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Card.Title>Location</Card.Title>
                  <Card.Text>{response.place}</Card.Text>
                </Card.Footer>
              </Card>
            </Col>

            <Col className="" xs={12} md={4}>
              <Card className={style.card2}>
                <Card.Header className={style.card2Header}>
                  {response.receivedAmount}TK &nbsp; raised of{" "}
                  {response.targetAmount}&nbsp;goal
                </Card.Header>

                <Card.Body className={style.card2Body}>
                  <Card.Text>0 people have just made a donation</Card.Text>
                  Contact-
                  <br />
                  {response.phone}
                  <br />
                  {response.email} <br />
                  <hr />
                  <Button variant="outline-success">See Top Donors</Button>{" "}
                </Card.Body>
                <Card.Footer className="text-muted">
                  Created &nbsp;{response.time}
                  <br />
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
