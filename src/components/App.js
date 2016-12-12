import React from 'react'
import {Router ,Link} from 'react-router'
import {Navbar,Nav,NavItem} from 'react-bootstrap'

import '../public/css/main.css'

export default class App extends React.Component {
    handleSelect(){
        this.context.router.push('Subpage')
    }

    render(){
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">React_Redux_Relay example</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} onClick={this.handleSelect.bind(this)}>Subpage</NavItem>
                    </Nav>
                </Navbar>
                {this.props.children}
            </div>
        )
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};