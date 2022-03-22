import acceptedImageEvent from "../../resources/images/accepted.png";
import pendingImageEvent from "../../resources/images/pending.png";
import rejectedImageEvent from "../../resources/images/rejected.png";
import DashboardCard from "../DashboardCard";
import { Col, Row, Container } from "react-bootstrap";
import UserTable from "../UsersTable";
import useApiCall from "../../../Hooks/useApiCall";

export default function UsersDashboard() {
  // let header = {

  // }
  const { response, error } = useApiCall("/user/admin/all");
  return (
    <Container style={{ marginTop: 120 }}>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <DashboardCard
            title={"Total Users"}
            num={response.length}
            image={pendingImageEvent}
          />
        </Col>
        <Col>
          <DashboardCard title={"Admins"} num={34} image={acceptedImageEvent} />
        </Col>
        <Col>
          <DashboardCard title={"Admins"} num={34} image={acceptedImageEvent} />
        </Col>
      </Row>

      <Row>
        <Col style={{ marginTop: 10 }} md={8}>
          <UserTable
          name="users"
            th={["User ID", "Name", "Phone", "Email", "States"]}
            td={response}
            title="Users Table"
          />
        </Col>
        
      </Row>
    </Container>
  );
}
