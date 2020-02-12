import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchQuotes } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)

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
  } // 


  componentDidMount() {
    // this.props.dispatch((fetchQuotes())) // do i need this??
  }


  render() {
    return (
      <div>
        <h2>Search through the nonsense of reddit</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="subreddits"
            value={this.state.subreddits}
            onChange={this.handleChange}
          />
          <input type= "submit"/>
        </form>

      <p>{this.props.quote}</p>

        {this.props.children}
        {/*  puts the wait indicator underneath the form*/}
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      subreddits: state.subreddits,
      quote: state.quote
    }
  }


export default connect(mapStateToProps)(LoadSubreddit)


