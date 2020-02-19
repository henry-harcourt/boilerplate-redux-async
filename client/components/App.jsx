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

  handleActivityClick = (isHyper) => {
    const intensity = isHyper ? 'high' : 'low'
    getActivitiesFromApi(intensity)
    .then(whateverIsReturnedFromFunction => {
      let randomAct = Math.floor(Math.random()*whateverIsReturnedFromFunction.length)
      this.setState({
        activity: whateverIsReturnedFromFunction[randomAct]
      })
    })
  }


  // ------ this function is a way of filtering the data to return an activity based on intensity at the front-end
  //  it is not a good idea because you might have lots of data to filter.  this one isnt fully responsive. -----

  // handleMoodClick = () => {
  //   getActivitiesFromApi()
  //   .then(whateverIsReturnedFromFunction => {
  //     let hyperActs = whateverIsReturnedFromFunction.filter(acts => {
  //       return acts.intensity = 'high'
  //     })
  //     let randomHyperAct = Math.floor(Math.random()*hyperActs.length)
  //     this.setState({
  //       activity: randomHyperAct 
  //     })
  //   })
  // }

  
  render() {
    return (
      <div className='app'>
        <h1>Hello World</h1>
        <Activity activity = {this.state.activity.title}/>
        <Buttons clickThing = {this.handleActivityClick} clickHyper = {this.handleMoodClick}/>
        
      </div>
    )
  }
}

export default App
