import "../payment/style.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import TextInput from "../TextInput";
import { useState } from "react";
import bkash from "./logo/bkash.png";
import roket from "./logo/roket.png";
import nagad from "./logo/nagad.png";
import card from "./logo/card.png";
 import Form from "../Form";
import { useNavigate } from "react-router-dom";
import authHeader from "../../services/auth-header";
import axios from "axios";
import { toast } from "react-toastify";
export default function PaymentUI(props) {
  const [eventName, setEventName] = useState("");
  const [eventDescriction, setEventDescriction] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [amount, setAmount] = useState("");


// handle form starts

const navigation = useNavigate();


async function handleSubmit(e) {
  e.preventDefault();

await  axios
    .post("http://localhost:8080/donate/event", {
      amount,
      eventId:props.eventId
    },{
      headers: {
        Authorization: authHeader(),
      },
    })
    .then((response) => {
      
      toast.success("Your request has successfully sent, Please wait for verification",{
        onClose: () => {
         // navigation("/event/id")
         // window.location.reload()
        }

      })
    
    })
    .catch((error) => {
      console.log("Error Occured............");
      console.log(error);
    });
}



// handle form ends

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="card main text-center">
            <div className="header">Make payment</div>
            <div className="card-body">
             <Form onSubmit={handleSubmit}>
              <TextInput
                type="number"
                placeholder="Enter Amount"
                icon=""
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="mt-5">
                <input
                  id="bkash"
                  className="ps-5"
                  type="radio"
                  value="MALE"
                  name="gender"
                />{" "}
                <img
                  style={{ height: "40px", width: "60px" }}
                  alt="bkash"
                  src={bkash}
                />
                <input
                  className="ps-5"
                  type="radio"
                  value="FEMALE"
                  name="gender"
                />{" "}
                <img
                  style={{ height: "40px", width: "60px" }}
                  alt=""
                  src={roket}
                />
                <input
                  className="ps-5"
                  type="radio"
                  value="FEMALE"
                  name="gender"
                />{" "}
                <img
                  style={{ height: "40px", width: "60px" }}
                  alt=""
                  src={nagad}
                />
                <input
                  className="ps-5"
                  type="radio"
                  value="FEMALE"
                  name="gender"
                />{" "}
                <img
                  style={{ height: "40px", width: "60px" }}
                  alt=""
                  src={card}
                />
              </div>
              <Button style={{marginLeft:'30%'}} type="submit" className="mt-5 " onClick={props.onHide} variant="success">
                Donate
              </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
