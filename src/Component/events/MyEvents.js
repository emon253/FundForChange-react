import { Card, NavLink, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useApiCall from "../../Hooks/useApiCall";
export default function MyEvents() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { response, error } = useApiCall(
    "/event/my-events/" + parseInt(user.userId)
  );

  return (
    <Card>
      <h3 style={response.length > 0 ? {display:'none'}:{}} className="">{"No Event found"}</h3>
      <Card.Header style={{ fontSize: "2rem" }} className="text-center">
        My Events
      </Card.Header>
      <Card.Body>
        <Table responsive>
          <thead>
            <tr className="text-center">
              <th>Event ID </th>
              <th>Event Phone </th>
              <th>Title</th>
              <th>Targer Amount</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {response.map((event) => {
              return (
                <tr className="text-center">
                  <td>{event.eventId}</td>
                  <td>{event.phone}</td>
                  <td>{event.eventName}</td>
                  <td>{event.targetAmount}</td>
                  <td>{event.time}</td>
                  <td>{event.status}</td>
                  <Link style={event.status==='Accepted'?{textDecoration:'none', fontWeight:"bold"}:{display:'none'}} to={"/event/"+event.eventId}>View</Link>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
