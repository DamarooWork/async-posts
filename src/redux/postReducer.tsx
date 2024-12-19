import { UnknownAction } from 'redux'

const initialState: CounterState = {
  posts: [],
  fetchedPosts: [],
}

export const postsReducer = (state = initialState, action: UnknownAction) => {
  switch (action.type) {
    case 'CREATE_POST':
      return { ...state, posts: [...state.posts, action.payload] }

    default:
      return state
  }
}
