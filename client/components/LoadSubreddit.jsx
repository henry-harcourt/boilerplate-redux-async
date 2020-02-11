import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'


class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.dispatch(fetchPosts(this.state.source))
  }
  

  render() {
    return (
      <div>
        <h2>Search for SubReddits</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='source'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type='submit'>Fetch Posts</button>
        </form>
      </div>
    )
  }
}




export default connect()(LoadSubreddit)
