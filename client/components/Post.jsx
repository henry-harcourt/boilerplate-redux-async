import React from 'react'


const Post = ({ post }) => (
  <div>
    <section>
      <h2>{post.title}</h2>
      <p>Summary: {post.selftext}</p>
      <p>Date: {new Date(post.created_utc * 1000).toString()}</p>
    </section>
  </div>
)


export default Post
