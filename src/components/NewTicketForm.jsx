import React from "react";
import Ticket from "../models/Ticket.js";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import c from './../constants';

class NewTicketForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault();
    const { _names, _location, _issue } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.ADD_TICKET,
      id: null,
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpened: new Date().getTime()
    }
    dispatch(action);

    var newTicket = new Ticket(_names.value, _location.value, _issue.value);

    this.props.onNewTicketCreation(newTicket);
    this.props.hideFormAfterSubmission();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleNewTicketFormSubmission}>
          <input
              ref="_names"
              type="text"
              id="names"
              placeholder="Pair Names"/>
          <input
              ref="_location"
              type="text"
              id="location"
              placeholder="Location"/>
          <textarea
              ref="_issue"
              id="issue"
              placeholder="Describe your issue."/>
          <button type="submit">Help!</button>
        </form>
      </div>
    );
  }
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;
