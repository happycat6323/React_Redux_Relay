import React, { PropTypes } from 'react'
import {Button} from 'react-bootstrap'

export default class ActivityInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Button bsStyle="link" onClick={this.props.getActivityInfo}>getActivityInfo</Button>
                <div>
                    {this.props.activityInfo.description}
                </div>
            </div>
        )
    }
}

ActivityInfo.propTypes = {
    activityInfo: PropTypes.any.isRequired,
    getActivityInfo: PropTypes.func.isRequired
}