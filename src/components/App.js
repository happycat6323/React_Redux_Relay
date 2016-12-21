import React from 'react'
import {browserHistory, Link} from 'react-router'
import {Navbar,Nav,NavItem} from 'react-bootstrap'

import '../public/css/main.css'

export default class App extends React.Component {
    handleSelect(){
        browserHistory.push('Subpage')
    }

    detectEntity() {
      browserHistory.push('DetectEntity')
    }

    render(){
        return (
            <div>
                <Navbar inverse style={{borderRadius:"0"}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">React_Redux_Relay example</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} onClick={this.handleSelect.bind(this)}>Subpage</NavItem>
                    </Nav>
                    <Nav>
                        <NavItem eventKey={2} onClick={this.detectEntity.bind(this)}>Entity Detection</NavItem>
                    </Nav>
                </Navbar>
                {this.props.children}
            </div>
        )
    }
}
