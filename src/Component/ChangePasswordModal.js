import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import TextInput from "./TextInput";
import axios from "axios";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";
export default function ChangePasswordModal(props) {
  const [oldPass, setOldPass] = useState("***");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [error, setError] = useState();
  const navigation = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  async function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(
        "http://localhost:8080/user/change-password/",
        {
          userId: user.userId,
          currentPassword: oldPass,
          newPassword: newPass,
        },
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        toast.success("password Successfully Changed", {
          onClose: () => {
            navigation("/usr/setting");
            window.location.reload();
          },
        });
      })
      .catch((error) => {
        console.log(error);
        setError("Bad credentials");
      });
  }

  return (
    <>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Change Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ height: "250px" }} onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}

            <TextInput
              type="text"
              placeholder="Current Password"
              required
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
            />
            <TextInput
              type="password"
              placeholder="New Password"
              required
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            <TextInput
              type="password"
              placeholder="Confirm New Password"
              required
              value={confirmNewPass}
              onChange={(e) => setConfirmNewPass(e.target.value)}
            />
            <Button
              style={{ width: "120px", height: "20px", margin: "auto" }}
              variant="secondary"
              type="submit"
              size="sm"
            >
              Change Password
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}
