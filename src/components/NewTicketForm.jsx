import React from 'react';

function NewTicketForm(props) {
  return(
    <div>
      <form>
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
