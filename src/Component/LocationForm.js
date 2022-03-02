import { Card, Form } from "react-bootstrap";
import useLocation from "./useLocation";
import { useState } from "react";

export default function LocationForm() {
  const location = useLocation();
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState();

  const divisionChange = (e) => {
    location.Division.divisions.forEach((element) => {
      if (e.target.value === element.name) {
        setDivision(element.id);
      }
    });
  };
  const districtChange = (e) => {
    location.District.districts.forEach((element) => {
      if (e.target.value === element.name) {
        setDistrict(element.id);
      }
    });
  };
  
  

  return (
    <Card style={{ width: "15rem", backgroundColor: "#f7f7f7" }}>
      <Card.Body>
        <form>
          <label>Select your location</label>

          <Form.Select onChange={divisionChange} size="sm">
            <option>Division</option>
            {location.Division.divisions.map((e, index) => {
              return <option key={index}>{e.name}</option>;
            })}
          </Form.Select>

          <Form.Select onChange={districtChange} size="sm">
            <option>District</option>
            {location.District.districts.map((e, index) => {
              if (division === e.division_id) {
                return <option key={index}>{e.name}</option>;
              }
            })}
            ;
          </Form.Select>
        </form>
      </Card.Body>
    </Card>
  );
}
