import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {

  if(action.type === `CHANGETHUMB`){
    return Object.assign({}, state, {
      initialThumb: action.image,
      boxDescription: action.description
    })
  }
  if(action.type === `ADDPROJECT`){
    return Object.assign({}, state, {
      projectIsActive: true,
      project: action.project,
    })
  }
  if(action.type === `CLOSEPROJECT`){
    return Object.assign({}, state, {
      projectIsActive: false,
      project: {},
      imgProject: 1,
      showMoreProject: false
    })
  }
  if(action.type === `RESETIMG`){
    return Object.assign({}, state, {
      imgProject: 1
    })
  }
  if(action.type === `SHOWMOREPROJECT`){
    return Object.assign({}, state, {
      showMoreProject: !action.stateProject,
    })
  }
  return state
}

const initialState = { 
  count: 0,
  initialThumb: false,
  boxDescription: false,
  projectIsActive: false,
  project: {}, 
  showMoreProject: false,
  imgProject: 1
 }
 
//change this in Prod.
const createStore = () => reduxCreateStore(reducer, initialState)
// const createStore = () => reduxCreateStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default createStore