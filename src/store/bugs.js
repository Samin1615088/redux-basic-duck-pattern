import { createSlice } from "@reduxjs/toolkit";

//actionTypes>
////no need for actionType as we used ex: "BUG_ADDED" is used only in one place. 
//actionTypes<


//actionCreator>
// export const createBug = createAction('BUG_ADDED');
// export const removeBug = createAction('BUG_REMOVED');
// export const resolveBug = createAction('BUG_RESOLVED');
// export const updateBug = createAction('BUG_UPDATED');
//actionCreator<


//reducer>
let lastId = 0;
//createSlice function that will auto-generate the action types and action creators for yme
const bugSlice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        createBug(state, action) {
            state.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        removeBug(state, action) {
            return state.filter(bug => bug.id !== action.payload.id);
        },
        resolveBug(state, action) {
            const index = state.findIndex(bug => bug.id === action.payload.id);
            state[index].resolved = true;
        },
        updateBug(state, action) {
            const index = state.findIndex(bug => bug.id === action.payload.id);
            state[index].description = `${state[index].description} ${action.payload.description}`
        }
    },
})

// Extract the action creators object and the reducer
const { actions, reducer } = bugSlice
// Extract and export each action creator by name
export const { createBug, removeBug, resolveBug, updateBug } = actions
// Export the reducer, either as a default or named export
export default reducer

// export default createReducer([], {
//     //key: value 
//     //actions: functions (event => event handler)   --> just for understanding
//     [createBug.type]: (state, action) => {    //BUG_ADDED: (state, action) => {
//         state.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//         })
//     },

//     [removeBug.type]: (state, action) => {  //BUG_REMOVED: (state, action) => {
//         return state.filter(bug => bug.id !== action.payload.id);
//     },

//     [resolveBug.type]: (state, action) => {    //BUG_RESOLVED: (state, action) => {
//         const index = state.findIndex(bug => bug.id === action.payload.id);
//         state[index].resolved = true;
//     },

//     [updateBug.type]: (state, action) => {  //BUG_UPDATED: (state, action) => {
//         const index = state.findIndex(bug => bug.id === action.payload.id);
//         state[index].description = `${state[index].description} ${action.payload.description}`
//     }

// })
//reducer<
