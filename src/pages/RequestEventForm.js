import EventDetailsInputForm from "../Component/EventDetailsInputForm";
import "../styles/requestEventForm.css";
import { Row, Col } from "react-bootstrap";
export default function RequestEventForm() {
  return (
    <div className="eventFormMain">
      {/* <div>
            <h1>Request An Event</h1>
          </div> */}
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <EventDetailsInputForm />
        </Col>
      </Row>
    </div>
  );
}
