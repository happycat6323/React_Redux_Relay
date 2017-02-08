import React, { PropTypes } from 'react'
import {Button, FormGroup, FormControl} from 'react-bootstrap'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    handleLoginChange(type, e){
        let loginChange = this.props.loginChange
        loginChange[type] = e.target.value
        this.props.handleLoginChange(loginChange)
    }

    render() {
        return (
            <div style={{maxWidth: '330px', margin: 'auto', paddingTop: '100px'}}>
                <form>
                    <FormGroup>
                        <FormControl type="text" placeholder="Email" value={this.props.loginChange.email} onChange={this.handleLoginChange.bind(this, "email")}/>
                    </FormGroup>
                    <FormGroup>
                        <FormControl type="text" placeholder="密碼" value={this.props.loginChange.password} onChange={this.handleLoginChange.bind(this, "password")}/>
                    </FormGroup>
                </form>
                <Button onClick={this.props.createUser}>建立</Button>
                <Button bsStyle="primary" className="pull-right" onClick={this.props.LoginUser}>登入</Button>
            </div>
        )
    }
}

Login.propTypes = {
    //login
    loginChange: PropTypes.any.isRequired,

    handleLoginChange: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    LoginUser: PropTypes.func.isRequired
}