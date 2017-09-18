import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {formModalIsShowing: false};
  }

  showFormModal() {
    this.setState({formModalIsShowing: true});
  }

  hideFormModal() {
    this.setState({formModalIsShowing: false});
  }

  render() {
    return (
      <div>
        <Button
            block
            bsStyle="primary"
            bsSize="large"
            onClick={this.showFormModal}>
                Request Help
        </Button>
        <Modal
            show={this.state.formModalIsShowing}
            onHide={this.hideFormModal}
            bsSize="large">
          <Modal.Header>
            <Modal.Title>Request Help!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewTicketForm
                hideFormAfterSubmission = {this.hideFormModal}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default NewTicketControl;
