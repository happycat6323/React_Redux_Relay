import React, { PropTypes } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import {Button, Modal, FormGroup, FormControl, Radio} from 'react-bootstrap'

import 'react-datepicker/dist/react-datepicker.css'

export default class CreateModal extends React.Component {
    constructor(props) {
        super(props)
    }
    handlePetChange(type, e){
        let petChange = this.props.petChange
        if(type === "startDate" || type === "endDate"){
            petChange[type] = e ? moment(e).format('YYYY-MM-DD') : ""
        }
        else{
            petChange[type] = e.target.value
        }
        this.props.handlePetChange(petChange)
    }

    render() {
        return (
            <Modal show={this.props.createModal.open} onHide={this.props.closeCreateModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.createModal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="create-modal-form">
                        <FormGroup validationState={this.props.petChange.validationName}>
                            <FormControl type="text" placeholder="名稱" value={this.props.petChange.name} onChange={this.handlePetChange.bind(this, "name")} />
                        </FormGroup>
                        <FormGroup onChange={this.handlePetChange.bind(this, "status")} validationState={this.props.petChange.validationStatus}>
                            <Radio inline value="存活" name="status" defaultChecked={this.props.petChange.status === "存活" ? "checked" : ""}>
                                存活
                            </Radio>
                            &nbsp;
                            <Radio inline value="陣亡" name="status" defaultChecked={this.props.petChange.status === "陣亡" ? "checked" : ""}>
                                陣亡
                            </Radio>
                        </FormGroup>
                        <FormGroup>
                            <FormControl componentClass="textarea" placeholder="描述" value={this.props.petChange.description} onChange={this.handlePetChange.bind(this, "description")} />
                        </FormGroup>
                        <FormGroup validationState={this.props.petChange.validationSpecies}>
                            <FormControl type="text" placeholder="種類" value={this.props.petChange.species} onChange={this.handlePetChange.bind(this, "species")} />
                        </FormGroup>
                        <DatePicker className="form-control" dateFormat="YYYY-MM-DD" placeholderText="登入時間" selected={this.props.petChange.startDate ? moment(this.props.petChange.startDate) : ""} onChange={this.handlePetChange.bind(this, "startDate")} />
                        &nbsp;
                        <DatePicker className="form-control" dateFormat="YYYY-MM-DD" placeholderText="死亡時間" selected={this.props.petChange.endDate ? moment(this.props.petChange.endDate) : ""} onChange={this.handlePetChange.bind(this, "endDate")} minDate={moment(this.props.petChange.startDate)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeCreateModal}>取消</Button>
                    <Button bsStyle="primary" onClick={this.props.validatePet.bind(this)}>確定</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
