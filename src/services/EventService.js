import axios from "axios";
export const getAllEvents =()=>{
    return axios.get("http://localhost:8080/event/all");
}