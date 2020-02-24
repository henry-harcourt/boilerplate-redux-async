import React from 'react'
import { connect } from 'react-redux'

class Activity extends React.Component {

    render() {

        return(
            <div>
                
                <h2>{this.props.activity.title}</h2>
        
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