import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacter } from '../actions'


class StarWarsCharacter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      character: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state.character)
    return (
      <div>
        <input
          type="text"
          name="character"
          value={this.state.character}
          onChange={this.handleChange}
        />

        <button onClick={() => this.props.dispatch(fetchCharacter(this.state.character))}>Fetch Characters</button>

        {this.props.children}

      </div>
    )
  }
}

export default connect()(StarWarsCharacter)
