import React, { PropTypes } from 'react'
import {Table, Label, Button} from 'react-bootstrap'
import Icon from 'react-fa'

import CreateModal from "../../components/Pet/CreateModal.js"
import './Pet.css'

export default class Subpage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let pets = this.props.pet.map( (pet) => {
            return(
                <tr>
                    <td>{pet.name}</td>
                    <td>
                        <Label bsStyle={pet.status === "存活" ? "success" : "danger"}>{pet.status}</Label>
                    </td>
                    <td>{pet.description}</td>
                    <td>{pet.species}</td>
                    <td>2016-12-12</td>
                    <td>2016-12-19</td>
                    <td>
                        <Button bsStyle="info" bsSize="xsmall">
                            <Icon name="pencil"/>
                        </Button>
                        &nbsp;
                        <Button bsStyle="danger" bsSize="xsmall">
                            <Icon name="trash-o"/>
                        </Button>
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <h1>生死簿</h1>
                <div className="pull-right pet-create-button">
                    <Button bsStyle="primary" onClick={this.props.openCreateModal}>+ 新增</Button>
                </div>
                <Table striped bordered>
                    <thead>
                    <tr>
                        <th>名稱</th>
                        <th>狀態</th>
                        <th>描述</th>
                        <th>種類</th>
                        <th>登入時間</th>
                        <th>死亡時間</th>
                        <th>執行動作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>胖J</td>
                        <td>
                            <Label bsStyle="danger">陣亡</Label>
                        </td>
                        <td>跩蛙</td>
                        <td>黃金角蛙</td>
                        <td>2016-12-12</td>
                        <td>2016-12-19</td>
                        <td>
                            <Button bsStyle="info" bsSize="xsmall">
                                <Icon name="pencil"/>
                            </Button>
                            &nbsp;
                            <Button bsStyle="danger" bsSize="xsmall">
                                <Icon name="trash-o"/>
                            </Button>
                        </td>
                    </tr>
                    {pets}
                    </tbody>
                </Table>
                <CreateModal {...this.props}/>
            </div>
        )
    }
}

Subpage.propTypes = {
    //pet
    createModal: PropTypes.any.isRequired,
    pet: PropTypes.any.isRequired,
    petChange: PropTypes.any.isRequired,

    openCreateModal: PropTypes.func.isRequired,
    closeCreateModal: PropTypes.func.isRequired,
    createPet: PropTypes.func.isRequired,
    handlePetChange: PropTypes.func.isRequired
}