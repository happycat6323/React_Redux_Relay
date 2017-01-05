import React from 'react'
import {browserHistory, Link} from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

import '../public/css/main.css'

let FOLDER_NAME = "";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.menuItems = ['/pet', '/entityDetection', '/client']
    }
    handleSelect(selectedKey){
        browserHistory.push(FOLDER_NAME + this.menuItems[selectedKey])
    }

    render(){
        return (
            <div>
                <Navbar inverse style={{borderRadius:"0"}} onSelect={this.handleSelect.bind(this)}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={FOLDER_NAME + "/"}>Data_Collection_Platform</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1}>Entity Detection</NavItem>
                    </Nav>
                    <Nav>
                        <NavItem eventKey={2}>Client</NavItem>
                    </Nav>
                </Navbar>
                <div style={{margin: "80px"}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
