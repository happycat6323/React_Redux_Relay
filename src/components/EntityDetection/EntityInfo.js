import React, { PropTypes } from 'react'
import {Button, Form, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap'

export default class EntityInfo extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.init(props)
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        if(this.props.entityInfo !== newProps.entityInfo) {
          this.init(newProps)
        }
    }

    init(props) {
      let intent = props.entityInfo.entities.intent ?
      props.entityInfo.entities.intent[0].value : ""
      let entities = [{"id": "intent", "lookups": ["trait"], "values": [{"value": intent, "expressions":[props.sentence]}]}]
      delete props.entityInfo.entities.intent
      Object.keys(props.entityInfo.entities).map((entityName, idx) => {
        entities.push({"id": entityName, "values":
        [{"value": props.entityInfo.entities[entityName][0].value,
        "expressions":[props.entityInfo.entities[entityName][0].value]}]})
      })
      this.state = {"entities": entities}
      this.wordOption = props.sentence.split(" ")
    }

    handleChange(idx, field, e) {
      console.log(e.target.value)
      let entities = this.state.entities
      if(field === 'id') {
        entities[idx].id = e.target.value
      }
      if(field === 'value') {
        entities[idx].values[0].value = e.target.value
        if(idx !== 0) { // !== 'intent'
          entities[idx].values[0].expressions[0] = e.target.value
        }
      }
      this.setState({"entities": entities})
      console.log(this.state.entities)
    }

    addSlot() {
      let entities = this.state.entities
      entities.push({"id": "", "values": [{"value": this.wordOption[0],
      "expressions":[this.wordOption[0]]}]})
      this.setState({"entities": entities})
    }

    deleteSlot(idx) {
      let entities = this.state.entities
      entities.splice(idx, 1)
      this.setState({"entities": entities})
    }

    render() {
        return (
          <div>
            <FormGroup>
              <Col sm={2}>
                <Button onClick={this.addSlot.bind(this)}>
                  新增Slot
                </Button>
              </Col>
            </FormGroup>
            {this.state.entities.map((entity, idx) => {
              return <FormGroup key={idx}>
                <Col sm={4}>
                  <FormControl type="text"
                  disabled={entity.id === 'intent'}
                  onChange={this.handleChange.bind(this, idx, 'id')}
                  value={entity.id}/>
                </Col>
                <Col sm={6}>
                  <FormControl type="text"
                  componentClass={entity.id !== 'intent' ? "select" : "input"}
                  value={entity.values[0].value}
                  onChange={this.handleChange.bind(this, idx, 'value')}>
                    {entity.id !== 'intent' ? this.wordOption.map((word, idx) => {
                      return <option value={word} key={idx}>{word}</option>
                    }) : ""}
                  </FormControl>
                </Col>
                {entity.id !== 'intent' ?
                <Col sm={2}>
                  <Button onClick={this.deleteSlot.bind(this, idx)}>
                    刪除
                  </Button>
                </Col>
                : ""}
              </FormGroup>
            })}
            <FormGroup>
              <Col smOffset={10} sm={2}>
                <Button onClick={this.props.postEntityToWit.bind(this, this.state.entities)}>
                  修改至wit.ai
                </Button>
              </Col>
            </FormGroup>
          </div>
        )
    }
}
