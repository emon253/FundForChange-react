import TextInput from "./TextInput";
import { useState } from "react";
import Form from "../Component/Form";

export default function EventDetailsInputForm1() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter Event name"
        icon=""
        required
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Event description"
        icon=""
        required
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Event description"
        icon=""
        required
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
    </Form>
  );
}
