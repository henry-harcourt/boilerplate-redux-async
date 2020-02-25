import React from 'react'
import { connect } from 'react-redux'

class Activity extends React.Component {

    render() {

        return (
            <div>
                <h1>Why don't you....</h1>
                <h2 className='title'>{this.props.activity.title}</h2>
                <img className='images' src={this.props.activity.img} alt="img" />
                <p>Head to - {this.props.activity.address}</p>
                <p>{this.props.activity.info}</p>

            </div>
        )
    }
}

function mapStateToProps(globalState) {

    return {
        activity: globalState.getDataPls
    }
}

export default connect(mapStateToProps)(Activity)