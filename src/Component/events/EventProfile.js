import style from "../../styles/EventStyle.module.css";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { Row, Col, Button, ProgressBar } from "react-bootstrap";
import image from "./images/image1.png";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useApiCall from "../../Hooks/useApiCall";
import authHeader from "../../services/auth-header";
import axios from "axios";
import Form from "../Form";
import swal from "sweetalert";
import Layout from "../Layout";
import { useEffect, useState } from "react";
import PaymentUI from "../payment/PaymentUI";

export default function EventProfile() {
  // Get ID from URL
  const params = useParams();
  const { response, error } = useApiCall("/event/" + params.id);
  const user = JSON.parse(localStorage.getItem("user"));
  const [role, setRole] = useState(user ? user.role : "");
  const [modalShow, setModalShow] = useState(false);
  const navigation = useNavigate();
  const donation = response.donation ? response.donation : [];
  const receivedAmount =
    (response.receivedAmount / response.targetAmount) * 100;
  donation.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));

  if (
    (response.status !== "Accepted" &&
      role !== "ROLE_ADMIN" &&
      role !== "ROLE_SupperAuthority") ||
    error != null
  ) {
    return (
      <Layout>
        <h2>No Event found</h2>;
      </Layout>
    );
  }
  // update request to the server
  async function handleSubmit(status) {
    await axios
      .put(
        "http://localhost:8080/event/admin/update-status/" + params.id,
        {
          status,
        },
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert("Something went wrong...");

        console.log("Error Occured............");
        console.log(error);
      });
  }
  // --------------------------------------------
  // delelete request
  const deleteRequest = () => {
    axios
      .delete(
        "http://localhost:8080/event/admin/deleteEvent/" + params.id,

        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error Occured............");
        console.log(error);
      });
  };
  // -----------------------------------------------

  const alert = (msg, afterSuccessMsg) => {
    swal({
      title: msg,
      icon: "warning",
      buttons: "Aww yiss!",
      dangerMode: true,
      onClose: () => {},
    }).then((willDelete) => {
      if (willDelete) {
        swal(afterSuccessMsg, {
          icon: "success",
        }).then(() => {
          reload();
        });
      }
    });
  };
  const reload = () => {
    navigation("/event/" + params.id);
    window.location.reload();
  };

  return (
    <>
      <div className={style.box}>
        <h2 className={style.title}>{response.eventName}</h2>

        <div>
          <Row>
            <Col xs={12} md={8}>
              <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Text>{response.description}</Card.Text>
                  <Button variant="success" onClick={() => setModalShow(true)}>
                    Donate
                  </Button>
                  <PaymentUI
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    eventId={response.eventId}
                  />
                  <Button variant="info">Share</Button>{" "}
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Card.Title>Location</Card.Title>
                  <Card.Text>{response.place}</Card.Text>
                </Card.Footer>
              </Card>
            </Col>

            <Col className="" xs={12} md={4}>
              <Row>
                <Col className="" xs={12} md={12}>
                  <Card className={style.card2}>
                    <Card.Header className={style.card2Header}>
                      {response.receivedAmount}TK &nbsp; raised of{" "}
                      {response.targetAmount}&nbsp;goal
                    </Card.Header>
                    <Card.Body className={style.card2Body}>
                      {/* Progress  bar */}
                      <ProgressBar
                        striped
                        style={{ fontSize: "1rem", margin: "10px" }}
                        now={receivedAmount}
                        label={`${receivedAmount}%`}
                      />
                      {/* Progress bar */}
                      <Card.Text>
                        {donation.length} people have just made a donation
                      </Card.Text>
                      Contact-
                      <br />
                      {response.phone}
                      <br />
                      {response.email} <br />
                      <hr />
                      {/* TOP DONORS */}
                      <OverlayTrigger
                        trigger="click"
                        key={"bottom"}
                        placement={"bottom"}
                        overlay={
                          <Popover id={`popover-positioned-${"bottom"}`}>
                            <Popover.Header as="h3">
                              TOP DONATIONS
                            </Popover.Header>
                            <Popover.Body>
                              {
                              donation.map((e) => {
                              
                              
                                return (
                                  <>
                                    <strong>Timne:{e.time}</strong>&nbsp;
                                    Amount:{e.amount} <br />
                                  </>
                                );
                                
                              })}
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <Button variant="outline-success">
                          See Top Donors
                        </Button>
                      </OverlayTrigger>
                      {/* TOP DONORS */}
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      Created &nbsp;{response.time}
                      <br />
                    </Card.Footer>
                  </Card>
                </Col>
                <Col
                  style={
                    response.status === "Accepted" ? { display: "none" } : {}
                  }
                  className="mt-5"
                  xs={12}
                  md={12}
                >
                  <Card
                    style={role === "ROLE_ADMIN" || role === "ROLE_SupperAuthority" ? {} : { display: "none" }}
                    className={style.card2}
                  >
                    <Card.Header>
                      <Button
                        className="m-2"
                        onClick={() => {
                          alert("Want to Accept?", "Event Accepted");
                          handleSubmit("Accepted");
                        }}
                        variant="danger"
                      >
                        Accept
                      </Button>
                      <Button
                        className="m-2"
                        onClick={() => {
                          handleSubmit("Rejected");
                          alert("Want to Reject?", "Rejected");
                        }}
                        variant="warning"
                      >
                        Reject
                      </Button>
                      <Button
                        className="m-2"
                        onClick={() => {
                          alert("Want to delete?", "Successfully deleted");
                          deleteRequest();
                        }}
                        variant="warning"
                      >
                        Delete
                      </Button>
                    </Card.Header>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
