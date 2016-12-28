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
      let entities = [{"id": "intent", "values": [{"value": intent, "expressions":[props.sentence]}]}]
      delete props.entityInfo.entities.intent
      Object.keys(props.entityInfo.entities).map((entityName, idx) => {
        entities.push({"id": entityName, "values":
        [{"value": props.entityInfo.entities[entityName][0].value}]})
      })
      this.state = {"entities": entities}
      this.wordOption = props.sentence.split(" ")
    }

    handleChange(idx, field, e) {
      let entities = this.state.entities
      if(field === 'id') {
        entities[idx].id = e.target.value
      }
      if(field === 'value') {
        entities[idx].values[0].value = e.target.value
      }
      this.setState({"entities": entities})
    }

    render() {
        return (
          <div>
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
