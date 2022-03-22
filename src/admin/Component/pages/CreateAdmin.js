import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../Component/Button";
import Checkbox from "../../../Component/Checkbox";
import Form from "../../../Component/Form";
import TextInput from "../../../Component/TextInput";
import { Row, Col } from "react-bootstrap";
import swal from "sweetalert";
import authHeader from "../../../services/auth-header";
export default function CreateAdmin() {
  const [fullName, setFullName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const navigation = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    axios
      .post(
        "http://localhost:8080/sAuth/register",
        {
          fullName,
          userEmail,
          password,
          confirmPassword,
        },
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        console.log(response);
        swal("Success");
        navigation("/create-admin");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error Occured............");
        console.log(error);
      });
  }

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h2 className="text-center">Create Admin Profile</h2>
        <hr />

        <Form style={{ height: "350px" }} onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Enter full name"
            icon=""
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <TextInput
            type="email"
            required
            placeholder="Enter email"
            icon=""
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            type="password"
            required
            placeholder="Enter password"
            icon=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextInput
            type="password"
            required
            placeholder="Confirm password"
            icon=""
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Checkbox
            required
            text="I agree to the Terms &amp; Conditions"
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
          />

          <Button disabled={loading} type="submit">
            <span>Create</span>
          </Button>
          

          {error && <p className="error">{error}</p>}
        </Form>
      </Col>
    </Row>
  );
}
