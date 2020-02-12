import React from 'react'

const Character = ({name, starships, homeworld}) => (
  
  <div>
    <div>{name}</div>
    <div>{starships}</div>   
    <div>{homeworld}</div>
  </div>
)

export default Character
