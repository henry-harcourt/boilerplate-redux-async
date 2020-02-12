import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import StarWarsCharacter from './StarWarsCharacter'
import CharacterList from './CharacterList'

const App = () => (
  <div className='app'>
  
    <ErrorMessage />
    
    <StarWarsCharacter>
      <WaitIndicator />
    </StarWarsCharacter>
    <CharacterList/>

    <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList />
  
  </div>
)

export default App
