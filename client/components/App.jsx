import React from 'react'
import Activity from './Activity'
import Buttons from './Buttons'
import { getActivitiesFromApi } from '../api'
import { connect } from 'react-redux'
import { fetchData } from '../actions/index'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

      activity: {}
    }
  }



  // ------ this onClick function takes the isHyper parameter from the const below which uses a ternery operator to 
  // be able to recognise the switching state / query betweeen low and high (query is determined in the router by 
  // db function). -------

  handleActivityClick = (isHyper) => {
    const intensity = isHyper ? 'high' : 'low'
    fetchData(intensity)
      .then(whateverIsReturnedFromFunction => {
        let randomAct = Math.floor(Math.random() * whateverIsReturnedFromFunction.length)
        this.setState({
          activity: whateverIsReturnedFromFunction[randomAct]
        })
      })
  }


  render() {
    console.log(this.props.activityData.map(data => data.title)[0])
    return (
      <div className='app'>
        <h1>Hello World</h1>
        <Activity activity={this.props.activityData.map(data => data.title)[0]} />
        <Buttons clickThing={this.handleActivityClick} />

      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
      activityData: globalState.getDataPls
  }
}

export default connect(mapStateToProps)(App)
