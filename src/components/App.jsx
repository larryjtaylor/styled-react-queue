import React from "react";
import TicketList from "./TicketList";
import Header from "./Header";

function App(props) {
  return (
    <div>
      <Header/>
      <TicketList />
      {/* <h2>{new Date().toLocaleTimeString()}</h2> */}
    </div>
  );
}

export default App;
