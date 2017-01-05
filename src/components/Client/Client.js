import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {Button, Grid, Row, Col, Well, FormGroup, FormControl, Label} from 'react-bootstrap'

import './Client.css'

export default class Client extends React.Component {
    constructor(props) {
        super(props)
        this.props.subscribe()
        this.props.getPlot()
    }
    componentDidUpdate() {
        let element  = ReactDOM.findDOMNode(this.refs.pushMessageWell)
        element.scrollTop = element.scrollHeight
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
                <div key={index} style={{textAlign : data.role === "client" ? "right" : "left"}}>
                    {data.time} - {data.message} &nbsp; <Label bsStyle={data.role === "client" ? "info" : "warning"}>{data.role}</Label>
                    <hr/><br/>
                </div>
            )
        })

        let plotButton = this.props.plots.map((data, index) => {
            return (
                <Button onClick={this.props.setCurrentPlot.bind(this, data, index+1)} key={index}>劇情 {index+1}</Button>
            )
        })

        return (
            <div>
                <Grid className="client-padding-right">
                    <Row className='show-grid'>
                        <Col md={6} xs={6}>
                            <h3 className="client-title">聊天室</h3>
                            <br/>
                            <Well className="client-push-message-well" ref="pushMessageWell">
                                {pushMessage}
                            </Well>
                        </Col>
                        <Col md={6} xs={6}>
                            <h3 className="client-title">傳送訊息</h3>
                            <br/>
                            <form>
                                <FormGroup>
                                    <FormControl componentClass="textarea" placeholder="訊息" value={this.props.pushMessageChange} onChange={this.handleMessageChange.bind(this)} />
                                </FormGroup>
                            </form>
                            <Button bsStyle="primary" onClick={this.props.publish.bind(this, this.props.pushMessageChange)} className="pull-right">Sent</Button>
                            <br/><br/><br/>
                            {plotButton}
                            <br/><br/>
                            <Well>
                                劇情 {this.props.currentPlot.index}
                                <br/>
                                {this.props.currentPlot.plot}
                            </Well>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

Client.propTypes = {
    pushMessage: PropTypes.any.isRequired,
    subscribeObject: PropTypes.any.isRequired,
    pushMessageChange: PropTypes.any.isRequired,
    currentPlot: PropTypes.any.isRequired,

    subscribe: PropTypes.func.isRequired,
    publish: PropTypes.func.isRequired,
    handlePushMessageChange: PropTypes.func.isRequired,
    getPlot: PropTypes.func.isRequired,
    setCurrentPlot: PropTypes.func.isRequired
}