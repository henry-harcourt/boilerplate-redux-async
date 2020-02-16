import React from 'react'
import Activity from './Activity'
import Buttons from './Buttons'
import { getActivitiesFromApi } from '../api'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activity: {}
    }
  }

  handleClick = () => {
    getActivitiesFromApi()
    .then(whateverIsReturnedFromFunction => {
      let randomAct = Math.floor(Math.random()*8)
      this.setState({
        activity: whateverIsReturnedFromFunction[randomAct]
      })
    })
  }

  render() {
    return (
      <div className='app'>
        <h1>Hello World</h1>
        <Activity activity = {this.state.activity.title}/>
        <Buttons clickThing = {this.handleClick} />
        <p>working?</p>
      </div>
    )
  }
}
export default App
