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

  handleSubmit = e => {
    e.preventDefault()
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.dispatch(fetchPosts(this.state.subreddit))
  
  }
  

  render() {
    return (
      <div>
        <h1>Search for SubReddit</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='source'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>

        <button onClick={() => this.props.dispatch(fetchPosts('newzealand'))}>
          Fetch Posts
        </button>
        {/* {children} */}
      </div>
    )
  }
}




export default connect()(LoadSubreddit)
