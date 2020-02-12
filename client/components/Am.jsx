import React from 'react'
import { connect } from 'react-redux'


class Am extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
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
      
        <input type="text" name="search" onChange={this.handleChange}></input>
        <button onClick={() => { dispatch(fetchPosts(this.state.sub)) }}>
          Fetch Posts
        </button>
        {children}
      </div>

    )
  }
}

export default connect()(Am)