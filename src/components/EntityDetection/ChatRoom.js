import React, { PropTypes } from 'react'
import {Button, Grid, Row, Col, Well, FormGroup, FormControl, Label} from 'react-bootstrap'

import './EntityDetection.css'

export default class ChatRoom extends React.Component {
    constructor(props) {
        super(props)
        this.props.subscribe()
    }
    componentWillUnmount(){
        this.props.subscribeObject.cancel()
        this.props.handlePushMessageChange("")
    }
    handleMessageChange(e) {
        this.props.handlePushMessageChange(e.target.value)
    }

    render() {
        let pushMessage = this.props.pushMessage.map((data, index) => {
            return (
                <div key={index} style={{textAlign:data.role === "robot" ? "right" : "left"}}>
                    {data.time} - {data.message} &nbsp;
                    <Label bsStyle={data.role === "client" ? "info" : "warning"}>{data.role}</Label> &nbsp;
                    {data.role === "client" ?
                      <Button onClick={this.props.getEntityInfo.bind(this, data.message)}>
                          查詢
                      </Button>
                    : "" }
                    <hr/>
                </div>
            )
        })

        return (
            <div>
                <Grid className="entity-detection-padding-right">
                    <Row className='show-grid'>
                        <Col md={6} xs={6}>
                            <h3 className="entity-detection-title">聊天室</h3>
                            <br/>
                            <Well className="entity-detection-push-message-well">
                                {pushMessage}
                            </Well>
                        </Col>
                        <Col md={6} xs={6}>
                            <h3 className="entity-detection-title">傳送訊息</h3>
                            <br/>
                            <form>
                                <FormGroup>
                                    <FormControl componentClass="textarea" placeholder="訊息" value={this.props.pushMessageChange} onChange={this.handleMessageChange.bind(this)} />
                                </FormGroup>
                            </form>
                            <Button bsStyle="primary" onClick={this.props.publish.bind(this,this.props.pushMessageChange)} className="pull-right">Sent</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
