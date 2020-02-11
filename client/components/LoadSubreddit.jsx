
import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'


class LoadSubreddit extends React.Component {
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
    this.props.dispatch(fetchPosts(this.state.value))
  }

  render() {
  return (<div>
    {this.props.children}
    <form onSubmit={this.handleSubmit}>
      <label>
        Enter a subreddit: 
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(mapStateToProps)(LoadSubreddit)
