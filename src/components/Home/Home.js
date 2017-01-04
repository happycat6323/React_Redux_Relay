import React, { PropTypes } from 'react'
import {Button} from 'react-bootstrap'

import ActivityInfo from '../../components/Home/ActivityInfo.js'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

//<ActivityInfo activityInfo={this.props.activityInfo} getActivityInfo={this.props.getActivityInfo}/>
    render() {
        return (
            <div>
                <h1>資料收集平台</h1>
            </div>
        )
    }
}

Home.propTypes = {
    activityInfo: PropTypes.any.isRequired,
    getActivityInfo: PropTypes.func.isRequired
}