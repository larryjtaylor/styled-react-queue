import React from 'react';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
  }

  handleDisplayingNewTicketForm(event) {
    console.log("New ticket button was clicked!");
  }

  render() {
    return (
      <button onClick={this.handleDisplayingNewTicketForm}>Request Help</button>
    );
  }
}

export default NewTicketControl;
