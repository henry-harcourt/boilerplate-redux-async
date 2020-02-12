import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'


class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subreddit: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>

        <input 
        type="text" 
        name="subreddit" 
        value={this.state.subreddit} 
        onChange={this.handleChange} 
        />

        <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>Fetch Posts</button>
        
        {this.props.children}

      </div>
    )
  }
}

export default connect()(LoadSubreddit)
