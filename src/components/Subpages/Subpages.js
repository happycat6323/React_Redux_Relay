import React, { PropTypes } from 'react'

export default class Subpage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{margin: "80px"}}>
                <img src={this.props.activityInfo.titleImgUrl}></img>
            </div>
        )
    }
}

Subpage.propTypes = {
    activityInfo: PropTypes.any.isRequired
}