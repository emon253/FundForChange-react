import Table from "react-bootstrap/Table";
import TableScrollbar from "react-table-scrollbar";
import "../styles/table.css";
import { Link, NavLink } from "react-router-dom";
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
        <TableScrollbar rows={7}>
          {/* <Table striped bordered hover size="sm"> */}
          <Table style={{}} size="sm">
            <thead v className="t-head text-center">
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
                    <tr className="text-center"  key={index}>
                      <td>
                      <Link style={{color:"green", fontWeight:"bold"}} to={"/usr/"+e.userId}>usr{e.userId}</Link>
                    </td>
                      <td>{e.fullName}</td>
                      <td>{e.userPhone}</td>
                      <td>{e.userEmail}</td>
                      <td >{e.role}</td>
                    
                    
                    </tr>
                  );
                }
                return (
                  <tr className="text-center"  key={index}>
                    <td>
                      <Link style={{color:"green", fontWeight:"bold"}} to={"/event/"+e.eventId}>{"Event "+ e.eventId}</Link>
                    </td>
                    <td>{e.user.fullName}</td>
                    <td>{e.phone}</td>
                    <td>{e.targetAmount}</td>
                    <td style={e.status==='Accepted'?{backgroundColor:'green',color:'white'}:{}}>{e.status}</td>
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
