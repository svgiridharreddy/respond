import { createSlice } from "@reduxjs/toolkit";
import {createSelector} from 'reselect';
import { apiCallBegan } from './api';
// import { loadBugs } from './bugs';
import moment from 'moment';


const bugSlice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loader: false,
    lastFetch: null
  },
  reducers: {
    bugsRequested: (bugs,action) => {
      bugs.loader = true;
    },
    bugsReceived: (bugs,action) => {
      bugs.list = action.payload;
      bugs.loader = false;
      bugs.lastFetch = Date.now();
    },
    bugsRequestFailed: (bugs,action) => {
      bugs.loader = false;
    },
    bugAdded: (bugs, action) => {
      console.log("In bugAdded reducer",action.paylod)
      bugs.list.push(action.payload)
    },
    bugAssignedToUser: (bugs,action) => {
      const {id: bugId, userId,userName}  = action.payload;
      const index = bugs.list.findIndex(bug => bug.id === bugId)
      bugs.list[index].userId = userId;
      bugs.list[index].userName = userName;
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
      bugs.list[index].resolved = true
    },
    bugRemoved: (bugs, action) => {
      bugs.list.filter(bug => bug.id !== action.payload.id)
    }
  }
})
const {bugAdded, bugResolved, bugRemoved,bugAssignedToUser,bugsReceived,bugsRequested,bugsRequestFailed} = bugSlice.actions
export default bugSlice.reducer;

// Action Creators
const url = "/bugs"
export const loadBugs = () => (dispatch,getState) => {
  debugger;
  dispatch(
    apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onError: bugsRequestFailed.type,
      onSuccess: bugsReceived.type
    })
  )
  // const {lastFetch} = getState().entities.bugs.lastFetch;
  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  // if(diffInMinutes < 10) return;
  // dispatch(
  //   apiCallBegan({
  //     url,
  //     onStart: bugsRequested.type,
  //     onError: bugsRequestFailed.type,
  //     onSuccess: bugsReceived.type
  //   })
  // )
}
export const addBug = bug => apiCallBegan({
  url,
  data: bug,
  method: "post",
  onSuccess: bugAdded.type
})

export const resolveBug = id => apiCallBegan({
  url: url + "/" + id,
  method: "patch",
  data: {resolved: true},
  onSuccess: bugResolved.type
})

export const assignBugToUser = (bugId,userId) => apiCallBegan({
  url: url + "/" + bugId,
  method: "patch",
  data: {userId},
  onSuccess: bugAssignedToUser.type
})
// selectors 

// with out using memoization : without using createSelector reselect package;
// this will execute even when there is no change in the list of unresolved bugs when ever it is called and lowers the performance;

// export const getUnresolvedBugs = state => state.entities.bugs.filter( bug => !bug.resolved)

// using memoization : with createSelector from reselect package
// 
export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs.list, // returns the bugs and passes as input to next function
  bugs => bugs.filter( bug => !bug.resolved) // this will not execute when there is no change in list of unresolved bugs, this will increase the performance by taking the result from cache;
)

export const getBugsByUser = userId => createSelector(
  state => state.entities.bugs.list,
  bugs => bugs.filter(bug => bug.userId === userId)
)

// Action Types

// const BUG_ADDED = "bugAdded";
// const BUG_RESOLVED = "bugResolved";
// const BUG_REMOVED = "bugRemoved";

// Action Creators 

// with out using redux tool kit

// export const bugAdded = description => ({
//   type: BUG_ADDED,
//   payload: {
//     description
//   }
// })

// with using redux toolkit 
// export const bugAdded = createAction("bugAdded")

// // with out using redux tool kit
// export const bugResolved = (id) => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id
//   }
// })

// // with using redux toolkit 
// export const bugResolved = createAction("bugResolved")


// with out using redux tool kit
// export function bugRemoved(id){
//   return{
//     type: BUG_REMOVED,
//     payload: {
//       id
//     }
//   }
// }

// with using redux toolkit 
// export const bugRemoved = createAction("bugRemoved")

// Reducer 


// with using create reducer from reduxtool kit 
// export default createReducer([],{
//   [bugAdded.type]: (bugs,action) => {
//     bugs.push(
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false
//       }
//     )
//   },
//   [bugResolved.type]: (bugs,action) => {
//     const index = bugs.findIndex(bug => bug.id === action.payload.id)
//     state[index].resolved = true
//   },
//   [bugRemoved.type]: (bugs,action) => {
//     bugs.filter(bug => bug.id !== action.payload.id)
//   }
// })

// without using createReducer from redux toolkit

// export default function reducer(state=[],action){
//   switch(action.type){
//     // case BUG_ADDED: // without redux toolkit
//     case bugAdded.type: // using redux tool kit 
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false
//         }
//       ]    
//     case bugResolved.type:
//       return state.map(bug => bug.id === action.payload.id ? {...bug, resolved: true} : bug)
//     case bugRemoved.type:
//       return state.filter(bug => bug.id !== action.payload.id)
//     default: 
//       return state;
//   }
// }