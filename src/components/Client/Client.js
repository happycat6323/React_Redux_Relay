import React, { PropTypes } from 'react'
import {Button, Grid, Row, Col, Well, FormGroup, FormControl, Label} from 'react-bootstrap'

export default class Client extends React.Component {
    constructor(props) {
        super(props)
        this.props.subscribe()
        this.state = { message: "",catt:"瑋瑋和喵喵在逛微風，買了超多東西，提的累死了，想知道館內有沒有可以寄放的地方"}
    }
    componentWillUnmount(){
        this.props.subscribeObject.cancel()
    }
    handleMessageChange(e) {
        this.setState({message: e.target.value})
    }
    test(num){
        let a ="瑋瑋和喵喵在逛微風，買了超多東西，提的累死了，想知道館內有沒有可以寄放的地方"
        let b ="星星在遠東百貨看到一件他媽媽想要的外套，想傳照片給他媽媽確認要不要買，但他網路用量已經用完，他想知道百貨是否有免費的wifi"
        let c ="嘉嘉在日本的百貨公司買了好幾件衣服，店員跟她說可以tax free，但她卻不知道哪裡可以辦理退稅"

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
