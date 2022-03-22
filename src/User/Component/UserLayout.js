import SideNav from "./SideNav";
import DashboardHome from "../../admin/Component/pages/DashboardHome";

import { Col, Row } from "react-bootstrap";
export default function UserLayout({ children }) {
  // const [open, setOpen] = useState(false);
  document.title = "F.F.C Admin"

  // const handleToggle = () => setOpen(!open);
  return (
    <>
      <main>
        <Row>
        
          <Col xs={10} md={{ span: 10, offset: 1 }}>
            <div style={{ marginTop: 120 }}>{children}</div>
          </Col>
        </Row>
      </main>
    </>
  );
}
