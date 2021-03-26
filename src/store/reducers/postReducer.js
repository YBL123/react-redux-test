const initialState = []


const postReducer = (state = initialState, action) => {
  if (action.type === "posts/update") {
    return {
      ...state, 
      state: action.payload
    }
  }
  if (action.type === "posts/deleteSingle") {
    console.log('here', state)
    let newState = state.state.filter(post => post.id !== action.payload) //id matches id?
    return {
      ...state, 
      state: newState
    }
  }

  return state
}

export default postReducer