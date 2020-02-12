import React from 'react'

const Post = ({ post }) => (
  <section>
    <h2>{post.title}</h2>
    <h3>{post.author}</h3>
    <p>{post.url}</p>

  </section>

)

export default Post
