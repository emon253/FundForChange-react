import { Link} from "react-router-dom";
import '../styles/sidenav.css'

export default function SideNav() {
  return (
    <>
      <div className="side-menu">
        <div className="brand-name">
          <h1>Brand</h1>
        </div>
        <ul>
          <li>
            <Link className="link"  to={"/admin"}>Profile</Link>
          </li>
          <li>
            <Link className="link" to={"/admin-event"}>My Events</Link>
          </li>
         
          <li>
            <Link className="link" to={"/t"}>Settings</Link>
          </li>
          <li>
            <Link className="link" to={"/t"}>Logout</Link>
          </li>
        </ul>
      </div>


     
    </>
  );
}
