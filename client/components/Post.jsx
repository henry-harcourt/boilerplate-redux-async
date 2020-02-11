import React from 'react'

const Post = ({ post }) => (
  <section>
    <h2>{post.title}</h2>
    <p>{post.author}</p>
    <p>{post.url}</p>

  </section>

)

export default Post
