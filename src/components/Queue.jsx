import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";

function Queue() {
  return(
    <div>
      <TicketList/>
      <NewTicketControl/>
    </div>
  )
}

export default Queue;
