import React, { PropTypes } from 'react'
import {Button, Modal, FormGroup, FormControl, Radio} from 'react-bootstrap'

export default class CreateModal extends React.Component {
    constructor(props) {
        super(props)
    }
    handlePetChange(type, e){
        let petChange = this.props.petChange
        petChange[type] = e.target.value
        this.props.handlePetChange(petChange)
    }

    render() {
        return (
            <Modal show={this.props.createModal} onHide={this.props.closeCreateModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>新增</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="create-modal-form">
                        <FormGroup>
                            <FormControl type="text" placeholder="名稱" value={this.props.petChange.name} onChange={this.handlePetChange.bind(this, "name")} />
                        </FormGroup>
                        <FormGroup onChange={this.handlePetChange.bind(this, "status")}>
                            <Radio inline value="存活" name="status">
                                存活
                            </Radio>
                            &nbsp;
                            <Radio inline value="陣亡" name="status">
                                陣亡
                            </Radio>
                        </FormGroup>
                        <FormGroup>
                            <FormControl componentClass="textarea" placeholder="描述" value={this.props.petChange.description} onChange={this.handlePetChange.bind(this, "description")} />
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="種類" value={this.props.petChange.species} onChange={this.handlePetChange.bind(this, "species")} />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeCreateModal}>取消</Button>
                    <Button bsStyle="primary" onClick={this.props.createPet.bind(this, this.props.petChange)}>確定</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
