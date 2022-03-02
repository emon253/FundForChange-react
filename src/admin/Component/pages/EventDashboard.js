import acceptedImageEvent from "../../resources/images/accepted.png";
import pendingImageEvent from "../../resources/images/pending.png";
import rejectedImageEvent from "../../resources/images/rejected.png";
import DashboardCard from "../DashboardCard";
import { Col, Row, Container } from "react-bootstrap";
import UserTable from '../UsersTable';
import useApiCall from "../../../Hooks/useApiCall";

export default function EventDashboard(){
  // let header = {
    
  // }
  const { response, error } = useApiCall("/event/all");
// console.log(response)
    return (
        <Container style={{ marginTop: 120 }}>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <DashboardCard title={"Pending Events"} num={0} image={pendingImageEvent} />
          </Col>
          <Col>
            <DashboardCard title={"Accepted Events"} num={34} image={acceptedImageEvent} />
          </Col>
          <Col>
            <DashboardCard title={"Rejected Events"} num={0} image={rejectedImageEvent} />
          </Col>
        </Row>

        <Row>
        <Col style={{marginTop:10}} md={{ span: 10, offset: 0 }}>
          <UserTable th={["Event ID", "User", "Event Phone",  "Targer Amount", "States"]}  td={response} title="Events Table" />
        </Col>
      </Row>
      </Container>
    );
}