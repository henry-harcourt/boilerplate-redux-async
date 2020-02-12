import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sub: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { children, dispatch } = this.props
    return (

      <div>
        <label>new subreddit</label> <br />
      
        <input type="text" name="sub" onChange={this.handleChange}></input>
        <button onClick={() => { dispatch(fetchPosts(this.state.sub)) }}>
          Fetch Posts
        </button>
        {children}
      </div>

    )
  }
}

export default connect()(LoadSubreddit)
