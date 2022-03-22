import cardImage from "../../resources/images/user2.png";
import moneyImage from "../../resources/images/money.png";
import cardImageEvent from "../../resources/images/event.png";
import DashboardCard from "../DashboardCard";
import { Col, Row, Container, Card } from "react-bootstrap";
import useApiCall from "../../../Hooks/useApiCall";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useEffect, useState } from "react";
import authHeader from "../../../services/auth-header";
import axios from "axios";

import jsPDF from "jspdf";
import "jspdf-autotable";
export default function DashboardHome() {
  // const [totalUser, setTotalUser] = useState(0);
  // const [totalEvent, setTotalEvent] = useState(0);
  const { response, error } = useApiCall("/user/admin/all");
  const [totalUser, setTotalUser] = useState(0);
  const [totalEvent, setTotalEvent] = useState(0);
  const [totalTransection, setTotalTransection] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const [role,setRole] = useState(user?user.role:'')
  // total transection
  useEffect(() => {
    axios
      .get("http://localhost:8080/event/admin/all/")
      .then((response) => {
        setTotalEvent(response.data.length);
        let total = 0;
        response.data.forEach((event) => {
          console.log(event);
          total+=event.receivedAmount;
        });
        setTotalTransection(total)
      })
      .catch((err) => {console.log(err)});
  }, []);
  // total transection

  //-------------------- generate report for last 7 days fun araise----------------------------------------------
  const generatePdf = (data) => {
    // initialize jsPDF
    const doc = new jsPDF();

    // define the columns we want and their titles
    const tableColumn = ["Id", "Event Title", "User Name", "Status", "Time"];
    // define an empty array of rows
    const tableRows = [];

    // for each ticket pass all its data into an array
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    // ticket title. and margin-top + margin-left
    doc.text("Last 7 days fundaraise request list", 14, 15);
    // we define the name of our PDF file.
    doc.save(`Fundaraise request list ${dateStr}.pdf`);
  };

  async function getPdfReport() {
    const url = "http://localhost:8080/event/admin/all";
    console.log(url);
    let token = authHeader();

    await axios
      .get(url, {
        headers: {
          Authorization: token,
          esponseType: "blob",
        },
      })
      .then((response) => {
        generatePdf(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //--------------------end of  generate report for last 7 days funDaraise----------------------------------------------

  return (
    <Container>
      <Row className="g-4">
        <Col xs={12} md={6} lg={4}>
          <DashboardCard
            title={"Users"}
            num={response.length}
            image={cardImage}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <DashboardCard
            title={"Events"}
            num={totalEvent}
            image={cardImageEvent}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <DashboardCard
            title={"Transection"}
            num={totalTransection + " BDT"}
            image={moneyImage}
          />
        </Col>
      </Row>
      <Row style={role === "ROLE_SupperAuthority"?{}:{display:'none'}} className="mt-5">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <h2 className=" text-center ">Export Report</h2>
              <Table responsive>
                <thead></thead>
                <tbody>
                  <tr style={{ fontSize: "2rem" }}>
                    <td>Last 7 days users list</td>
                    <td>
                      <Badge bg="light">
                       
                        <Link onClick={getPdfReport} to="/admin">
                          PDF
                        </Link>                      </Badge>
                    </td>
                  </tr>
                  <tr style={{ fontSize: "2rem" }}>
                    <td>Last 7 days Fundaraise requests</td>
                    <td>
                      <Badge bg="light">
                        {" "}
                        <Link onClick={getPdfReport} to="/admin">
                          PDF
                        </Link>
                      </Badge>
                    </td>
                  </tr>
                  <tr style={{ fontSize: "2rem" }}>
                    <td>Last 7 days Fundaraise requests</td>
                    <td>
                      <Badge bg="light">
                        {" "}
                        <Link onClick={getPdfReport} to="/admin">
                          PDF
                        </Link>
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
