import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subreddits: ''
    }
  }

  handleChange = (e) => {
    // dispatch 
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch((fetchPosts(this.state.subreddits)))
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="subreddits"
            value={this.state.subreddits}
            onChange={this.handleChange}
          />
          <input type= "submit"/>
        </form>

        {this.props.children}
        {/*  puts the wait indicator underneath the form*/}
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      subreddits: state.subreddits
    }
  }


export default connect(mapStateToProps)(LoadSubreddit)


// change view to title, date, article preview

// new reducer loadSubreddits