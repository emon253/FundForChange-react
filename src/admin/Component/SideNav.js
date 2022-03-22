import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidenav.css";

export default function SideNav() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [role,setRole] = useState(user?user.role:'')
  return (
    <>
      <div className="side-menu">
        <div className="brand-name">
          <h1>Brand</h1>
        </div>
        <ul>
          <li>
            <Link className="link" to={"/admin"}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="link" to={"/admin-event"}>
              Events
            </Link>
          </li>
          <li>
            <Link className="link" to={"/users"}>
              Users
            </Link>
          </li>

          <div style={role === 'ROLE_SupperAuthority' ?{} : {display:'none'}}>
            <li>
              <Link className="link" to={"/create-admin"}>
                Create Admin
              </Link>
            </li>
            <li>
              <Link className="link" to={"/create-admin"}>
                Generate Report
              </Link>
            </li>
          </div>

          <li>
            <Link className="link" to={"/users"}>
              Traffic
            </Link>
          </li>
       
        </ul>
      </div>
    </>
  );
}
