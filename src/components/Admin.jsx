import React from "react";
import TicketList from "./TicketList";
import { connect } from 'react-redux';

class Admin extends React.Component {

  render() {
    return (
      <div>
      <h3>This is the Admin page!</h3>
      <TicketList ticketList={this.props.adminMasterTicketList}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminMasterTicketList : state
  }
}

export default connect(mapStateToProps)(Admin);
