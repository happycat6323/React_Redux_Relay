import React, { PropTypes } from 'react'
import {Button, Modal, FormGroup, FormControl, Radio} from 'react-bootstrap'

export default class CreateModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",status:"",description:"",species:""
        }
    }
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    handleStatusChange(e) {
        this.setState({status: e.target.value});
    }
    handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }
    handleSpeciesChange(e) {
        this.setState({species: e.target.value});
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
                        <FormGroup onChange={this.handleStatusChange.bind(this)}>
                            <Radio inline value="存活" name="status">
                                存活
                            </Radio>
                            &nbsp;
                            <Radio inline value="陣亡" name="status">
                                陣亡
                            </Radio>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="textarea" placeholder="描述" value={this.state.description} onChange={this.handleDescriptionChange.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="種類" value={this.state.species} onChange={this.handleSpeciesChange.bind(this)} />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeCreateModal}>取消</Button>
                    <Button bsStyle="primary" onClick={this.props.createPet.bind(this,this.state.name,this.state.status,this.state.description,this.state.species)}>確定</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
