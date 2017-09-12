import React from "react";
import TicketList from "./TicketList";
import Header from "./Header";
import NewTicketControl from "./NewTicketControl";

function App(props) {
  return (
    <div>
      <Header/>
      <TicketList/>
      <NewTicketControl/>
    </div>
  );
}

export default App;
