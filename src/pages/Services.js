import { useEffect } from "react";
import {Table} from "react-bootstrap";
import authService from "../services/auth.service";
import { Card } from "react-bootstrap";
import UserProfile from "../User/Component/UserProfile";
import swal from "sweetalert";
import { ToastContainer, toast } from 'react-toastify';
import PaymentUI from "../Component/payment/PaymentUI";

export default function Services() {
  useEffect(()=>{
    // const user = localStorage.getItem('user');
    // console.log(JSON.parse(user))
  //   console.log(JSON.parse(localStorage.getItem('user')))
  //  authService.logout()
  //   console.log(JSON.parse(localStorage.getItem('user')))
  },[])
  return (
    <>
   
    <PaymentUI/>
    </>

  );
}
