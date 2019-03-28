import { combineReducers } from 'redux'

const apiDataReducer = (state=[], action) => {
  switch (action.type){
    case 'FETCH_DATA':
        return action.payload
    default:
      return state
  }
}

export default combineReducers({
  apiData: apiDataReducer
})
