import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

let lastId = 0
const projectSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects,action) => {
      projects.push({
      id: ++lastId,
      projectName: action.payload.projectName
    })
    }
  }
})

export const {projectAdded} = projectSlice.actions
export default projectSlice.reducer;


// export const projectAdded = createAction("projectAdded")

// export default createReducer([],{
//   [projectAdded.type]: (state,action) => {
//     state.push({
//       id: 1,
//       projectName: action.payload.projectName
//     })
//   }
// })