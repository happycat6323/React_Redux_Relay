import React, { PropTypes } from 'react'
import {Button, Modal, FormGroup, FormControl} from 'react-bootstrap'

export default class CommonModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Modal show={this.props.commonModal !== "close"} onHide={this.props.closeModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.commonModal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.commonModal.text}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeModal}>取消</Button>
                    <Button bsStyle="primary" onClick={this.props.closeModal}>確定</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

CommonModal.propTypes = {
    //commonModal
    commonModal: PropTypes.any.isRequired,

    closeModal: PropTypes.func.isRequired
}