import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    
   

    {subreddits.map((post, i) =>
    <div>
    {console.log(post)}
      <Post
        key={i}
        post={post}
      />
      </div>
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(mapStateToProps)(Subreddit)
