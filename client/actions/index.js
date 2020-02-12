import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const RECEIVE_QUOTE = 'RECEIVE_QUOTE'
export const REQUEST_QUOTE = 'REQUEST_QUOTE'

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

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request // opens request from superagent
      .get(`/api/v1/reddit/subreddit/${subreddit}`) // this get responds with the appropriate api data
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}




export const requestQuote = () => {
  return {
    type: REQUEST_QUOTE
  }
}


export const receiveQuote = (quote) => {
  console.log(quote)
  return {
    type: RECEIVE_QUOTE,
    quote: quote
  }
}

export function fetchQuotes () {
  return (dispatch) => {
    dispatch(requestQuote())
    return request
      .get(`/api/v1/quote/random`) // this get responds with the appropriate api data
      .then(res => {
        dispatch(receiveQuote(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}