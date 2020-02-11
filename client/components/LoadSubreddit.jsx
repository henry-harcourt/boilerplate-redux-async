import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)

    this.State = {
      subreddit: ''
    }
  }

  onChange = (e) => {
    this.setState({
        subreddit: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(fetchPosts(this.state.subreddit))
  }
  
  render() {
    return(
      <div>
        <form >
            <input type="text" onChange={this.onChange} />
            <input type="submit" onClick={this.onSubmit} />
        </form>
      {this.props.children}
    </div> 
    )
  }
}

export default connect()(LoadSubreddit)

