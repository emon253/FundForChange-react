
import { Col, Row, Container } from "react-bootstrap";
import useApiCall from "../../../Hooks/useApiCall";
import UserProfile from "../UserProfile";

export default function UserDashboardHome() {
  // const [totalUser, setTotalUser] = useState(0);
  // const [totalEvent, setTotalEvent] = useState(0);
  const { response, error } = useApiCall("/event/all");

  return (
    <Container>
         <UserProfile/>
    </Container>
  );
}
