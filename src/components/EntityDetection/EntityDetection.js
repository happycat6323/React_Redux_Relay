import React, { PropTypes } from 'react'
import {Button, Form, FormGroup, Col, FormControl, ControlLabel, Panel} from 'react-bootstrap'

import EntityInfo from './EntityInfo.js'
import ChatRoom from './ChatRoom.js'

export default class EntityDetection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ChatRoom {...this.props}/>
        <hr/>
        <Form horizontal>
          <FormGroup>
            <Col smOffset={2} sm={8}>
              <Panel>
                {this.props.entityInfo._text ?
                  <EntityInfo {...this.props}/> : ""}
                  </Panel>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={8}>
                  {this.props.postEntityStatus === 'ok' ? "設定成功" : ""}
                </Col>
              </FormGroup>
            </Form>
          </div>
        )
      }
    }

    EntityDetection.propTypes = {
      entityInfo: PropTypes.any.isRequired,
      entities: PropTypes.any.isRequired, //reconstruct entityInfo
      postEntityStatus: PropTypes.string.isRequired,
      selectSentence: PropTypes.string.isRequired,
      getEntityInfo: PropTypes.func.isRequired,
      postEntityInfo: PropTypes.func.isRequired,
      setEntities: PropTypes.func.isRequired,
      //from Client
      pushMessage: PropTypes.any.isRequired,
      subscribeObject: PropTypes.any.isRequired,
      pushMessageChange: PropTypes.any.isRequired,
      subscribe: PropTypes.func.isRequired,
      publish: PropTypes.func.isRequired,
      handlePushMessageChange: PropTypes.func.isRequired
    }
