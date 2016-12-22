import React, { PropTypes } from 'react'
import {Button} from 'react-bootstrap'

import ActivityInfo from '../../components/Home/ActivityInfo.js'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>hello world</h1>
                <ActivityInfo activityInfo={this.props.activityInfo} getActivityInfo={this.props.getActivityInfo}/>
            </div>
        )
    }
}

Home.propTypes = {
    activityInfo: PropTypes.any.isRequired,
    getActivityInfo: PropTypes.func.isRequired
}