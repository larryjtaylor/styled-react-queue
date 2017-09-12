import React from 'react';
import NewTicketForm from './NewTicketForm';
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
    this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  handleDisplayingNewTicketForm(event) {
    console.log("New ticket button was clicked!");
    this.setState({formVisibleOnPage: true});
  }

  render() {
    // const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;
    if (this.state.formVisibleOnPage) {
      formAreaContent = <NewTicketForm/>
    } else {
      formAreaContent = <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Request Help</button>
    }
    return (
      <div>
        {formAreaContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketControl;
