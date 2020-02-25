import React from 'react'
import Activity from './Activity'
import Buttons from './Buttons'
import { connect } from 'react-redux'
import { fetchData } from '../actions/index'
// import { Router } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchData('high'))
  }

  render() {

    return (

      // <Router>
        <div className='mainees'>

          <Activity />
          <Buttons />

        </div>
      // </Router> 
    )
  }
}



export default connect()(App)
