import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";

class Queue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
    };
  }

  render() {
    return(
      <div>
        <TicketList
          ticketList = {this.state.masterTicketList}/>
        <NewTicketControl/>
      </div>
    )
  }
}

export default Queue;
