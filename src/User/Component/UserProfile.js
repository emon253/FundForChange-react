import style from "../styles/UserProfile.module.css";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import useApiCall from "../../Hooks/useApiCall";
import userImage from "../../Assets/images/user.png";
import { Link, useParams } from "react-router-dom";
export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const {id} = useParams("id");
  const { response, error } = useApiCall("/user/"+ parseInt(id));
  console.log(response)
  console.log(id)
  return (
    <div className={style.main}>
      <div className={style.helpBox}>
        <h3>Need help fundraising?</h3>
        <Link to="/">Contact Support</Link>
      </div>
      <Card className={style.card}>
        {/* <Card.Img   className="roundedCircle " variant="top" src={userImage} /> */}
        <h2>User ID: {user.userId} </h2>
        <img className={style.image} src={userImage} alt="" />
        <Card.Body className={style.body}>
          <span className={style.title}>{response.fullName}</span>
          <p>
            Phone: +880{response.userPhone}
            <br />
            Email: {response.userEmail}
            <br />
            Address: {response.address}
          </p>
        </Card.Body>
        <Card.Footer className="text-muted">
          Joined: {response.joiningDate}
        </Card.Footer>
      </Card>
    </div>
  );
}
