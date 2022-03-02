import { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import { Row, Col } from "react-bootstrap";
import SelectInput from "./SelectInput";
import useLocation from "../Hooks/useLocation";
import axios from "axios";
export default function EventDetailsInputForm() {
  const [eventName, setEventName] = useState("");
  const [eventDescriction, setEventDescriction] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [targetAmount, setTargetmount] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nid, setNid] = useState("");
  const [email, setEmail] = useState("");

  //location
  const location = useLocation();
  const [division, setDivision] = useState();
  const [district, setDistrict] = useState();
  const [upZIlla, setUpzilla] = useState();

  const divisionList = location.Division.divisions;
  const districtList = [];
  const upZIllaList = [];

  const [dist, setDist] = useState(districtList);
  const [upZILLA, setUpZILLA] = useState(upZIllaList);

  const divisionChange = (e) => {
    location.District.districts.forEach((dis) => {
      if (String(e.target.options.selectedIndex) === dis.division_id) {
        districtList.push(dis);
      }
    });
    setDist(districtList);

    setDivision(e.target.value);
  };

  const districtChange = (el) => {
    const index = el.target.selectedIndex;
    const elm = el.target.childNodes[index];
    const data_id = elm.getAttribute("id");

    location.UpZilla.upazilas.forEach((u) => {
      if (data_id === u.district_id) {
        upZIllaList.push(u);
      }
    });
    setUpZILLA(upZIllaList);
    setDistrict(el.target.value);
  };

  // Location functioonalities end

  /**...................... Setup api request.................................................. */

  async function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/event/addEvent", {
        eventName,
        eventDescriction,
        division,
        district,
        upZIlla,
        eventLocation,
        targetAmount,
        name,
        email,
        phone,
        nid
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error Occured............");
        console.log(error);
      });
  }
  /**...................... End api request.................................................. */
  return (
    <Form style={{ height: "600px" }} onSubmit={handleSubmit}>
      <h2>Event Information</h2>
      <TextInput
        type="text"
        placeholder="Event Title "
        icon=""
        required
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <Row>
        <Col xs={12} md={6}>
          <TextArea
         
            required
            placeholder="Event Description"
            value={eventDescriction}
            onChange={(e) => setEventDescriction(e.target.value)}
          />
        </Col>
       
        <Col xs={12} md={6}>
          <TextInput
            type="number"
            required
            placeholder="Target amount"
            icon=""
            value={targetAmount}
            onChange={(e) => setTargetmount(e.target.value)}
          />
        </Col>
      </Row>

      {/* Location fields starts */}

      <h2>Event Location</h2>
      <Row>
        <Col xs={12} md={4}>
          <SelectInput
            name={"Select Division"}
            val={divisionList}
            onChange={(e) => divisionChange(e)}
          />
        </Col>
        <Col xs={12} md={4}>
          <SelectInput
            name={"Select District"}
            val={dist}
            onChange={(el) => districtChange(el)}
          />
        </Col>
        <Col xs={12} md={4}>
          <SelectInput
            name={"Select Up Zilla"}
            val={upZILLA}
            onChange={(e) => setUpzilla(e.target.value)}
          />
        </Col>
        <Col xs={12} md={12}>
          <TextArea
            required
            placeholder="Exact place"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />
        </Col>
      </Row>
      {/* Location fields ends */}
      <h2>Personal Information</h2>
      {/* Personal information fields */}
      <Row>
        <Col xs={12} md={6}>
          <TextInput
            type="text"
            placeholder="Name "
            icon=""
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextInput
            type="email"
            placeholder="Email "
            icon=""
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextInput
            type="number"
            placeholder="Phone Number"
            icon=""
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6}>
          <TextInput
            type="number"
            placeholder="NID "
            icon=""
            required
            value={nid}
            onChange={(e) => setNid(e.target.value)}
          />
        </Col>
      </Row>

      {/* Personal information fields end */}
      <Checkbox
        required
        text=" I am declaring that the information described in this form is completely true to my knowledge and belief.
"
      />
      <p style={{ fontSize: "1.5rem" }}>
        Please ensure your profile is 100% complete before you request for an
        Event
      </p>

      <Button type="submit">
        <span>Submit</span>
      </Button>
    </Form>
  );
}
