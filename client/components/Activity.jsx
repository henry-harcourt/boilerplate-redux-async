import React from 'react'
// import { combineReducers } from 'redux'

class Activity extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <h2>{this.props.activity}</h2>
            </div>
        )
    }
}

export default Activity