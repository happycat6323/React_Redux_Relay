import React, { PropTypes } from 'react'
import {Button, Grid, Row, Col, Well, FormGroup, FormControl, Label} from 'react-bootstrap'

export default class Client extends React.Component {
    constructor(props) {
        super(props)
        this.props.subscribe()
        this.state = { message: "",catt:"喵喵肚子好餓"}
    }
    componentWillUnmount(){
        this.props.subscribeObject.cancel()
    }
    handleMessageChange(e) {
        this.setState({message: e.target.value})
    }
    test(num){
        let a ="喵喵和媽媽去逛街，搭捷運到忠孝復興，想去逛微風廣場，卻不知道微風廣場"
        let b ="喵喵和媽媽去逛街，搭捷運到忠孝復興，"
        let c ="喵喵和媽媽去逛街"

        if(num===0){
            this.setState({catt: a})
        }else if(num ===1){
            this.setState({catt: b})
        }else{
            this.setState({catt: c})
        }
    }

    render() {
        let pushMessage = this.props.pushMessage.map((data, index) => {
            return (
                <div key={index} style={{textAlign:data.role === "client"?"right":"left"}}>
                    {data.time} - {data.message} &nbsp; <Label bsStyle={data.role === "client"?"info":"warning"}>{data.role}</Label>
                    <hr/><br/>
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
                            <Well style={{paddingBottom: '10px',paddingTop: '10px',overflow: 'auto',height: '300px'}}>
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
                            <Button onClick={this.test.bind(this,0)}>劇情一</Button>
                            <Button onClick={this.test.bind(this,1)}>劇情二</Button>
                            <Button onClick={this.test.bind(this,2)}>劇情三</Button>
                            <br/><br/><br/>
                            <Well style={{paddingBottom: '10px',paddingTop: '10px',overflow: 'auto'}}>
                                {this.state.catt}
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
    subscribe: PropTypes.func.isRequired,
    publish: PropTypes.func.isRequired
}