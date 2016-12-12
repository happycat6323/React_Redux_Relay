import React, { PropTypes } from 'react'
import {Button} from 'react-bootstrap'

import ActivityInfo from '../../containers/ActivityInfo.js'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{margin: "80px"}}>
                <h1>hello world</h1>
                <ActivityInfo />
            </div>
        )
    }
}