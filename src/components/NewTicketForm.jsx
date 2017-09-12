import React from 'react';

class NewTicketForm extends React.Component {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault()
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleNewTicketFormSubmission}>
          <input
            type="text"
            id="names"
            placeholder="Pair Names"/>
          <input
            type="text"
            id="location"
            placeholder="Location"/>
          <textarea
            id="issue"
            placeholder="Describe your issue."/>
          <button type="submit">Help!</button>
        </form>
      </div>
    )
  }
}

export default NewTicketForm;
