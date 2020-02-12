import React from 'react'

const Post = ({title, date, summary}) => (
  
  <div>
    <div>{title}</div>
    <div>{date}</div>   
    <div>{summary}</div>
  </div>
)

export default Post
