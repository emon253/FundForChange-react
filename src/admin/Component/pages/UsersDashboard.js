import AdminLayout from "../AdminLayout";
import UserTable from '../UsersTable';
import { Col, Row } from "react-bootstrap";

export default function UserDashboard() {
  return (
    <AdminLayout>
      <Row>
        <Col xs={0} md={6}>
          <h1>This is users information page</h1>
        </Col>
        <Col xs={12} md={6}>
      

        </Col>
      </Row>
    </AdminLayout>
  );
}
