import React, { PropTypes } from 'react'
import {Button, Modal} from 'react-bootstrap'

export default class CommonModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let title
        let text
        if(this.props.commonModal === "create"){
            title="新增"
            text=[
                <form>
                    名稱:<br/>
                    <input type="text"/><br/>
                    狀態:<br/>
                    <input type="text"/><br/>
                    描述:<br/>
                    <input type="textarea"/><br/>
                    種類:<br/>
                    <input type="text"/><br/>
                </form>
            ]
        }

        return (
            <Modal show={this.props.commonModal !== "close"} onHide={this.props.closeModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {text}
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
    commonModal: PropTypes.any.isRequired,
    closeModal: PropTypes.func.isRequired
}