import React from 'react'
import { connect } from 'react-redux'

import Character from './Character'

const CharacterList = (props) => (
  <div>
    {props.character.map((character, i) =>
      <Character
        key={i}
        title={character.name}
        starships={character.starships}
        homeworld={character.homeworld}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    character: state.character
  }
}

export default connect(
  mapStateToProps
)(CharacterList)