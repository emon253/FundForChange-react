import Table from "react-bootstrap/Table";
import TableScrollbar from "react-table-scrollbar";
import "../styles/table.css";
import { Link } from "react-router-dom";
export default function UsersTable({
  th,
  td,
  name = "user",
  title = "Users Table",
}) {

  return (
    <>
      <div className="table-user">
        <div className="title">{title}</div>
        <TableScrollbar rows={10}>
          {/* <Table striped bordered hover size="sm"> */}
          <Table hover size="sm">
            <thead className="t-head">
              <tr>
                {th.map((columnName, index) => {
                  return <th key={index}> {columnName}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {td.map((e, index) => {
                if (name === "users") {
                  return (
                    <tr key={index}>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>Otto</td>
                    </tr>
                  );
                }
                return (
                  <tr  key={index}>
                    <td>
                      <Link style={{color:"green", fontWeight:"bold"}} to={"/event/"+e.eventId}>{"Event "+ e.eventId}</Link>
                    </td>
                    <td>{e.user.fullName}</td>
                    <td>{e.phone}</td>
                    <td>{e.targetAmount}</td>
                    <td>{e.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableScrollbar>
      </div>
    </>
  );
}
