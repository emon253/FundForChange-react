import style from "../styles/UserProfile.module.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import TextInput from "../../Component/TextInput";
import TextArea from "../../Component/TextArea";
import { useEffect, useState } from "react";
import Form from "../../Component/Form";
import useApiCall from "../../Hooks/useApiCall";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ChangePasswordModal from "../../Component/ChangePasswordModal";
export default function UserSettings() {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userNid, setuserNid] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [address, setaddress] = useState("");
  const [disabled, setDisabled] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const { response, error } = useApiCall("/user/" + user.userId);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setuserName(response.fullName);
    setuserEmail(response.userEmail);
    setuserPhone(response.userPhone);
    setuserNid(response.userNid);
    setaddress(response.address);
  }, [
    response.fullName,
    response.userEmail,
    response.userPhone,
    response.userNid,
    response.address,
  ]);

  let token = authHeader();
  console.log(token);

  // update form
  const navigation = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(
        "http://localhost:8080/user/update/" + user.userId,
        {
          fullName: userName,
          userEmail,
          userPhone,
          userNid,
          area: address,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        toast.success("Information has been updated", {
          onClose: () => {
            navigation("/usr/setting");
            window.location.reload();
          },
        });
      })
      .catch((error) => {
        console.log("Error Occured............");
        console.log(error);
      });
  }
  // update form
  return (
    <div className={style.main}>
      <Card>
        <Card.Header className={style.header}>
          <h1>Yasin Chowdhury </h1>
          <div className="headerop2">
            <Button
              onClick={() => setDisabled(false)}
              className="m-2"
              variant="outline-success"
            >
              Edit your profile
            </Button>
            <Button
              onClick={() => setModalShow(true)}
              className="m-2"
              variant="outline-info"
            >
              Change Password
            </Button>

            {/* change password modal */}
            <ChangePasswordModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            {/* change password modal */}
          </div>
        </Card.Header>
        <Form onSubmit={handleSubmit}>
          <Card.Body>
            <Row>
              <Col xs={6} md={6}>
                <div className={style.item}>
                  <label>Name</label>
                  <TextInput
                    type="text"
                    value={userName}
                    disabled={disabled}
                    onChange={(e) => setuserName(e.target.value)}
                  />
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div className={style.item}>
                  <label>Email</label>
                  <TextInput
                    type="text"
                    value={userEmail}
                    disabled="true"
                    onChange={(e) => setuserEmail(e.target.value)}
                  />{" "}
                </div>
              </Col>

              <Col xs={6} md={6}>
                <div className={style.item}>
                  <label>Phone</label>
                  <TextInput
                    type="text"
                    value={userPhone}
                    disabled={disabled}
                    onChange={(e) => setuserPhone(e.target.value)}
                  />
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div className={style.item}>
                  <label style={{ marginRight: "20px" }}>NID</label>
                  <TextInput
                    type="text"
                    value={userNid}
                    disabled={disabled}
                    onChange={(e) => setuserNid(e.target.value)}
                  />
                </div>
              </Col>
              <Col xs={12} md={12}>
                <div className={style.item}>
                  <label style={{ marginRight: "10px" }}>Address</label>
                  <TextArea
                    type="text"
                    value={address}
                    disabled={disabled}
                    onChange={(e) => setaddress(e.target.value)}
                  />
                </div>
              </Col>
              <Col md={{ span: 2, offset: 5 }}>
                <Button
                  type="submit"
                  className="m-2 text-center"
                  variant="outline-success"
                >
                  Update Changes
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Form>
      </Card>
      <ToastContainer />
    </div>
  );
}
