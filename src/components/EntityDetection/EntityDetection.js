import React, { PropTypes } from 'react'
import {Button, Form, FormGroup, Col, FormControl, ControlLabel, Panel} from 'react-bootstrap'
import EntityInfo from './EntityInfo.js'

export default class EntityDetection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {"sentence": ""}
        this.props.entityInfo.entities = {};
    }

    handleChange(e) {
        this.setState({"sentence": e.target.value})
    }

    render() {
        return (
            <div>
                <Form horizontal>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                      輸入句子
                    </Col>
                    <Col sm={8}>
                      <FormControl type="text" placeholder="輸入句子"
                      onChange={this.handleChange.bind(this)}/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Button onClick={this.props.getEntityInfo.bind(this, this.state.sentence)}>
                        查詢
                      </Button>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col smOffset={2} sm={8}>
                      <Panel>
                      {this.props.entityInfo._text ?
                        <EntityInfo {...this.props} sentence={this.state.sentence}/> : ""}
                      </Panel>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col smOffset={2} sm={8}>
                      {this.props.entityPostState === 'ok' ? "設定成功" : ""}
                    </Col>
                  </FormGroup>
                </Form>
            </div>
        )
    }
}

EntityDetection.propTypes = {
    entityInfo: PropTypes.any.isRequired,
    entityPostState: PropTypes.string.isRequired,
    getEntityInfo: PropTypes.func.isRequired,
    postEntityToWit: PropTypes.func.isRequired
}
