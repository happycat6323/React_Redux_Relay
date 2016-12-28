import React, { PropTypes } from 'react'
import {Button, Grid, Row, Col, Well, FormGroup, FormControl, Label} from 'react-bootstrap'

export default class Client extends React.Component {
    constructor(props) {
        super(props)
        this.props.subscribe()
        this.state = { message: ""}
    }
    componentWillUnmount(){
        this.props.subscribeObject.cancel()
    }
    handleMessageChange(e) {
        this.setState({message: e.target.value});
    }

    render() {
        let pushMessage = this.props.pushMessage.map((data, index) => {
            return (
                <div key={index}>
                    {data.time} - {data.message} &nbsp; <Label bsStyle="info">{data.role}</Label>
                    <hr/>
                </div>
            )
        })

        return (
            <div>
                <Grid>
                    <Row className='show-grid'>
                        <Col md={6} xs={6}>
                            <h3 style={{textAlign:'center',fontWeight: '900'}}>聊天室</h3>
                            <br/>
                            <Well style={{paddingBottom: '10px',paddingTop: '10px',overflow: 'auto',height: '500px'}}>
                                {pushMessage}
                            </Well>
                        </Col>
                        <Col md={6} xs={6}>
                            <h3 style={{textAlign:'center',fontWeight: '900'}}>傳送訊息</h3>
                            <br/>
                            <form style={{paddingBottom: '10px',paddingTop: '10px'}}>
                                <FormGroup>
                                    <FormControl componentClass="textarea" placeholder="訊息" value={this.state.message} onChange={this.handleMessageChange.bind(this)} />
                                </FormGroup>
                            </form>
                            <Button bsStyle="primary" onClick={this.props.publish.bind(this,this.state.message)} className="pull-right">Sent</Button>
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
    subscribe: PropTypes.func.isRequired,
    publish: PropTypes.func.isRequired
}