import { useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { getAllEvents } from "../../services/EventService";
import { useState } from "react";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    getAllEvents()
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
        setIsDataLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Container style={{}}>
        <Row    className="g-4 ">
          {events.map((event) => {
            return (
              <Col xs={12} md={6} lg={3} key={parseInt(event.eventId)}>
                <Card
                  border="warning"
                  style={{ width: "23rem", height: "20rem"}}
                >
                  <Card.Header style={style}>{event.user.fullName}</Card.Header>
                  <Card.Body>
                    <Card.Title style={style}>{event.eventName}</Card.Title>
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

                  <Link to={"/event/"+event.eventId}>
                    <Button  style={{width:"100%"}} variant="primary">Details</Button>
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
