import React, { PropTypes } from 'react'
import {Button, Form, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap'

export default class EntityInfo extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        let intent = props.entityInfo.entities.intent ?
        props.entityInfo.entities.intent[0].value : "";
        this.state = {"intent": intent}
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        let intent = newProps.entityInfo.entities.intent ?
        newProps.entityInfo.entities.intent[0].value : "";
        this.setState({"intent": intent})
    }

    handleChange(e) {
        this.setState({"intent": e.target.value})
    }

    render() {
        return (
            <div>
              <Col componentClass={ControlLabel} sm={2}>
                預測的intent
              </Col>
              <Col sm={6}>
                <FormControl type="text" placeholder="輸入句子"
                onChange={this.handleChange.bind(this)}
                value={this.state.intent}/>
              </Col>
              <Col sm={4}>
                <Button onClick={this.props.postEntityToWit.bind(this,
                  this.props.sentence, this.state.intent)}>
                  修改至wit.ai
                </Button>
              </Col>
            </div>
        )
    }
}
