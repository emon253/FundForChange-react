import SideNav from "./SideNav";
import DashboardHome from "../../admin/Component/pages/DashboardHome";

import { Col, Row } from "react-bootstrap";
export default function AdminLayout({ children }) {
  // const [open, setOpen] = useState(false);
  document.title = "F.F.C Admin"

  // const handleToggle = () => setOpen(!open);
  return (
    <>
      <main>
        <Row>
          <Col xs={2} md={3}>
            <SideNav />
          </Col>
          <Col xs={10} md={9}>
            <div style={{ marginTop: 120 }}>{children}</div>
          </Col>
        </Row>
      </main>
    </>
  );
}
