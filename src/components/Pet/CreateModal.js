import React, { PropTypes } from 'react'
import {Button, Modal, FormGroup, FormControl} from 'react-bootstrap'

export default class CreateModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",status:"",description:"",species:""
        }
        console.log(this.props.createModal)
    }
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <Modal show={this.props.createModal} onHide={this.props.closeCreateModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>新增</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form style={{margin: "30px"}}>
                        <FormGroup>
                            <FormControl type="text" placeholder="名稱" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="狀態" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="textarea" placeholder="描述" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="種類" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeCreateModal}>取消</Button>
                    <Button bsStyle="primary" onClick={this.props.closeCreateModal}>確定</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}