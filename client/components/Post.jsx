import React from 'react'

const Post = ({post}) => (
  <div>
    <h3>Title: {post.title}</h3>
    
    <br></br>
    
    <img src={post.thumbnail} alt="thumbnail"/>
    <p>
      Date: {Date(post.utc_created).toString()}
    </p>
    <p>
      Author: {post.author}
    </p>
  </div>
)

export default Post
