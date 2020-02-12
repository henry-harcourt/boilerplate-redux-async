import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts(subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}



export const REQUEST_CHARACTER = 'REQUEST_CHARACTER'
export const RECEIVE_CHARACTER = 'RECIEVE_CHARACTER'

export const requestCharacters = () => {
  return {
    type: REQUEST_CHARACTER

  }
}

export const recieveCharacter = (character) => {
  console.log(character)
  return {
    type: RECEIVE_CHARACTER,
    character: character.map(characterMap => characterMap.data)
  }
}

export function fetchCharacter(character) {
  return (dispatch) => {
    dispatch(requestCharacters())
    return request
      .get(`/swapi.co/api/people/${character}`)
      .then(res => {
        dispatch(recieveCharacter(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
