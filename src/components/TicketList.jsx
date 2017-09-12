import React from "react";
import Ticket from "./Ticket";

var masterTicketList = [
  {
    names: "Thato & Haley",
    location: "3A",
    issue: "Firebase won't save record. Halp."
  },
  {
    names: "Sleater & Kinney",
    location: "4B",
    issue: "Fox image not displaying on page, can only see duck?"
  },
  {
    names: "Imani & Jacob",
    location: "9F",
    issue: "Donkey picture not displaying on hover in Zoology app. :("
  }
];

function TicketList(props) {
  return (
    <Ticket
      location="3a"
      names=""
      issue="Firebase won't save record"
    />
  );
}

export default TicketList;
