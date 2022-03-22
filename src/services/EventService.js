import axios from "axios";
import authHeader from './auth-header'
export const getAllEvents =()=>{
    console.log(authHeader())
    return axios.get("http://localhost:8080/event/all",{headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjQ2NDk1OTc3LCJpYXQiOjE2NDY0NTk5Nzd9.5uaTwD0HWnpFm9wctyNeFWN1shsFX2CFHxmUEvW9naM"}});
}