import React from 'react'
import Activity from './Activity'
import Buttons from './Buttons'
import { connect } from 'react-redux'
import { fetchData } from '../actions/index'


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchData('high'))
  }

  render() {
    
    return (
      <div className='app'>
        <h1>Hello World</h1>
        <Activity />
        <Buttons />

      </div>
    )
  }
}



export default connect()(App)
