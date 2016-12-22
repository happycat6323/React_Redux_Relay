import React from 'react'
import {browserHistory, Link} from 'react-router'
import {Navbar,Nav,NavItem} from 'react-bootstrap'

import '../public/css/main.css'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.menuItems = ['Pet', 'DetectEntity']
    }
    handleSelect(selectedKey){
        browserHistory.push(this.menuItems[selectedKey])
    }

    render(){
        return (
            <div>
                <Navbar inverse style={{borderRadius:"0"}} onSelect={this.handleSelect.bind(this)}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">React_Redux_Relay example</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={0}>Pet</NavItem>
                    </Nav>
                    <Nav>
                        <NavItem eventKey={1}>Entity Detection</NavItem>
                    </Nav>
                </Navbar>
                <div style={{margin: "80px"}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
