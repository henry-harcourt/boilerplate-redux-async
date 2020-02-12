
import React from 'react'
import {connect} from 'react-redux'
import {fetchPoke} from '../actions'


class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {} 

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(fetchPoke(this.state.value))
  }

  render() {
  return (
  
  <div>
    {this.props.children}
    <form onSubmit={this.handleSubmit}>
      <label>
        Enter a Pokemon: 
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon
  }
}

export default connect(mapStateToProps)(Pokemon)

