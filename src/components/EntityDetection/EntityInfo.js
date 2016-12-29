import React, { PropTypes } from 'react'
import Icon from 'react-fa'
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
      props.setEntities(entities)
      this.wordOption = props.selectSentence.split(" ")
    }

    handleChange(idx, field, e) {
      let entities = JSON.parse(JSON.stringify(this.props.entities))
      if(field === 'id') {
        entities[idx].id = e.target.value
      }
      if(field === 'value') {
        entities[idx].values[0].value = e.target.value
        if(idx !== 0) { // !== 'intent'
          entities[idx].values[0].expressions[0] = e.target.value
        }
      }
      this.props.setEntities(entities)
    }

    addSlot() {
      let entities = JSON.parse(JSON.stringify(this.props.entities))
      entities.push({"id": "", "values": [{"value": this.wordOption[0],
      "expressions":[this.wordOption[0]]}]})
      this.props.setEntities(entities)
    }

    deleteSlot(idx) {
      let entities = JSON.parse(JSON.stringify(this.props.entities))
      entities.splice(idx, 1)
      this.props.setEntities(entities)
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
            {this.props.entities.map((entity, idx) => {
              return <FormGroup key={idx}>
                <Col sm={4}>
                  <FormControl type="text"
                  disabled={entity.id === 'intent'}
                  onChange={this.handleChange.bind(this, idx, 'id')}
                  value={entity.id}/>
                </Col>
                <Col sm={6}>
                {entity.id !== 'intent' ?
                  <FormSelect idx={idx} entity={entity}
                  wordOption = {this.wordOption} handleChange={this.handleChange.bind(this)}/>
                : <FormInput idx={idx} entity={entity} handleChange={this.handleChange.bind(this)}/>
                }
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
                <Button onClick={this.props.postEntityToWit.bind(this, this.props.entities)}
                        disabled={this.props.entityPostState === 'loading'}>
                  修改至wit.ai
                  {this.props.entityPostState === 'loading' ? <Icon spin name="spinner" /> : ""}
                </Button>
              </Col>
            </FormGroup>
          </div>
        )
    }
}

class FormSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FormControl type="text"
      componentClass="select"
      value={this.props.entity.values[0].value}
      onChange={this.props.handleChange.bind(this, this.props.idx, 'value')}>
        {this.props.wordOption.map((word, idx) => {
          return <option value={word} key={idx}>{word}</option>
        })}
      </FormControl>
    );
  }
}

class FormInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FormControl type="text"
      value={this.props.entity.values[0].value}
      onChange={this.props.handleChange.bind(this, this.props.idx, 'value')}/>
    );
  }
}
