import React from "react";
import TicketList from "./TicketList";
import Header from "./Header";

function App(props) {
  return (
    <div>
      <Header/>
      <TicketList />
    </div>
  );
}

export default App;
