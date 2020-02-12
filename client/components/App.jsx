import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import Pokemon from './Pokemon'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <Pokemon />
    <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList />
  </div>
)

export default App
