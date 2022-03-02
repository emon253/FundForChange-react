import cardImage from "../../resources/images/user2.png";
import moneyImage from "../../resources/images/money.png";
import cardImageEvent from "../../resources/images/event.png";
import DashboardCard from "../DashboardCard";
import { Col, Row, Container } from "react-bootstrap";
import useApiCall from "../../../Hooks/useApiCall";

export default function DashboardHome() {
  // const [totalUser, setTotalUser] = useState(0);
  // const [totalEvent, setTotalEvent] = useState(0);
  const { response, error } = useApiCall("/event/all");

  return (
    <Container>
      <Row className="g-4">
        <Col xs={1} md={2} lg={4}>
          <DashboardCard title={"Users"} num={2} image={cardImage} />
        </Col>
        <Col xs={1} md={2} lg={4}>
          <DashboardCard
            title={"Events"}
            num={response.length}
            image={cardImageEvent}
          />
        </Col>
        <Col xs={1} md={2} lg={4}>
          <DashboardCard
            title={"Transection"}
            num={0 + " BDT"}
            image={moneyImage}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={0} md={6}>
          {/* <UsersTable /> */}
        </Col>
        <Col xs={12} md={6}></Col>
      </Row>
    </Container>
  );
}
