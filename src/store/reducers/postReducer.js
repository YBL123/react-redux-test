const initialState = []


const postReducer = (state = initialState, action) => {
  if (action.type === "posts/update") {
    return {
      ...state, 
      state: action.payload
    }
  }

  return state
}

export default postReducer