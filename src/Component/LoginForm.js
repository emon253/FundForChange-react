import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import axios from "axios";
import AuthService from "../services/auth.service";
import Alert from "@mui/material/Alert";
import Buttons from "@mui/material/Button";
import Stack from "@mui/material/Stack";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [sinnedIn, setSinnedIn] = useState(
    localStorage.getItem("signupStatus")
  );
  const navigation = useNavigate();
  const reload = () => {
    navigation("/");
    window.location.reload();
    setSinnedIn(false);
    localStorage.removeItem("signupStatus");
  };
  async function handleSubmit(e) {
    e.preventDefault();

    AuthService.login(email, "xyz@gmail.com", password).then(
      () => {
        reload();
      },
      (error) => {
        setError("Incorrect User or Password");
        console.log(error);
      }
    );
  }
  const [show, setShow] = useState(
    sinnedIn ? { height: "40px" } : { display: "none" }
  );

  return (
    <Form style={{height:"400px"}} onSubmit={handleSubmit}>
      <Alert
        onClose={() => {
          setShow({ display: "none" });
          localStorage.removeItem("signupStatus");
        }}
        style={show}
        severity="success"
      >
        <strong>You have successfully signed up, You can login now</strong>
      </Alert>

      <TextInput
        type="email"
        placeholder="Enter email"
        icon=""
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon=""
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" disabled={loading}>
        <span>Login</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
      <div className="info">
        Login as Admin <Link to="/admin">Login</Link> instead.
      </div>
    </Form>
  );
}
