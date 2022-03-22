import acceptedImageEvent from "../../resources/images/accepted.png";
import pendingImageEvent from "../../resources/images/pending.png";
import rejectedImageEvent from "../../resources/images/rejected.png";
import DashboardCard from "../DashboardCard";
import { Col, Row, Container } from "react-bootstrap";
import UserTable from "../UsersTable";
import useApiCall from "../../../Hooks/useApiCall";
import { useEffect } from "react";

export default function EventDashboard() {
 
  var pending = 0;
  var rejected = 0;
  const { response, error } = useApiCall("/event/admin/all");

    response.filter((val)=>{return val.status === 'Pending'? pending++ : pending;})
    response.filter((val)=>{return val.status === 'Rejected'? rejected++ : rejected;})

  return (
    <Container style={{ marginTop: 120 }}>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <DashboardCard
            title={"Pending Events"}
            num={pending}
            image={pendingImageEvent}
          />
        </Col>
        <Col>
          <DashboardCard
            title={"Accepted Events"}
            num={response.length - (pending + rejected)}
            image={acceptedImageEvent}
          />
        </Col>
        <Col>
          <DashboardCard
            title={"Rejected Events"}
            num={rejected}
            image={rejectedImageEvent}
          />
        </Col>
      </Row>

      <Row>
        <Col style={{ marginTop: 10 }} md={{ span: 10, offset: 0 }}>
          <UserTable
            th={["Event ID", "User", "Event Phone", "Targer Amount", "States"]}
            td={response}
            title="Events Table"
          />
        </Col>
      </Row>
    </Container>
  );
}
