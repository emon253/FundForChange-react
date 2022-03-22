import { useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { getAllEvents } from "../../services/EventService";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import authHeader from "../../services/auth-header";
export default function Event(index) {
  let style = {
    fontSize: 14,
    fontWeight: "bold",
    notify: {
      fontSize: "3rem",
    },
  };
  const [events, setEvents] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  let token = authHeader();
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/event/accepted-events",
      headers: {
        Authorization: token
      },
    })
      .then((res) => {
        setEvents(res.data);
        setIsDataLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);
  return (
    <>
      <Container style={{}}>
        <Row className="g-4 ">
          {events.map((event) => {
            return (
              <Col xs={12} md={6} lg={3} key={parseInt(event.eventId)}>
                <Card
                  border="warning"
                  style={{ width: "23rem", height: "25rem" }}
                >
                  <Card.Header style={style}>{event.user.fullName}</Card.Header>
                  <Card.Body>
                    <Card.Title style={style}>{event.eventName}</Card.Title>
                    <Card.Title style={style}>Event ID: {event.eventId}</Card.Title>
                    <Card.Text
                      style={{
                        overflowY: "hidden",
                        fontSize: 12,
                        height: "8rem",
                      }}
                    >
                      {event.description}
                    </Card.Text>
                  </Card.Body>

                  <Link to={"/event/" + event.eventId}>
                    <Button style={{ width: "100%" }} variant="primary">
                      Details
                    </Button>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
        <div style={isDataLoaded ? { display: "none" } : style.notify}>
          No Events found
        </div>
      </Container>
    </>
  );
}
