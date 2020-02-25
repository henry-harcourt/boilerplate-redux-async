import React from 'react'
import { connect } from 'react-redux'

class Activity extends React.Component {

    render() {

        return(
            <div>
                
                <h2>{this.props.activity.title}</h2>
                <img className='images' src={this.props.activity.img} alt="img"/>
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