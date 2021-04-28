import { createAction, createReducer } from "@reduxjs/toolkit";

//actionTypes>
// const BUG_ADDED = 'BUG_ADDED';
// const BUG_REMOVED = 'BUG_REMOVED';
// const BUG_RESOLVED = 'BUG_RESOLVED';
// const BUG_UPDATED = 'BUG_UPDATED';
//actionTypes<


//actionCreator>
export const createBug = createAction('BUG_ADDED');
export const removeBug = createAction('BUG_REMOVED');
export const resolveBug = createAction('BUG_RESOLVED');
export const updateBug = createAction('BUG_UPDATED');
// export const createBug = (description) => {
//     return (
//         {
//             type: BUG_ADDED,
//             payload: {
//                 description
//             }
//         }
//     )
// }
// export const removeBug = id => {
//     return (
//         {
//             type: BUG_REMOVED,
//             payload: {
//                 id
//             }
//         }
//     )
// }
// export const resolveBug = id => {
//     return (
//         {
//             type: BUG_RESOLVED,
//             payload: {
//                 id
//             }
//         }
//     )
// }
// export const updateBug = (id, description) => {
//     return (
//         {
//             type: BUG_UPDATED,
//             payload: { id, description }
//         }
//     )
// }
//actionCreator<


//reducer>
let lastId = 0;
export default createReducer([], {
    //key: value 
    //actions: functions (event => event handler)   --> just for understanding
    [createBug.type]: (state, action) => {    //BUG_ADDED: (state, action) => {
        state.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },

    [removeBug.type]: (state, action) => {  //BUG_REMOVED: (state, action) => {
        return state.filter(bug => bug.id !== action.payload.id);
    },

    [resolveBug.type]: (state, action) => {    //BUG_RESOLVED: (state, action) => {
        const index = state.findIndex(bug => bug.id === action.payload.id);
        state[index].resolved = true;
    },

    [updateBug.type]: (state, action) => {  //BUG_UPDATED: (state, action) => {
        const index = state.findIndex(bug => bug.id === action.payload.id);
        state[index].description = `${state[index].description} ${action.payload.description}`
    }

})

//reducer will take (state)-will get from store , (action )-will get from dispatch--- then reducer returns newState
// export default function reducer(state = [], actions) {
//     switch (actions.type) {
//         case createBug.type: //changed here
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: actions.payload.description,
//                     resolved: false
//                 }
//             ];

//         case removeBug.type: //changed here
//             return state.filter(bug => bug.id !== actions.payload.id);

//         case resolveBug.type: //changed here
//             return state.map(bug => {
//                 return (bug.id === actions.payload.id) ?
//                     ({
//                         ...bug,
//                         resolved: true
//                     })
//                     :
//                     (bug)
//             });

//         case updateBug.type: //changed here
//             return state.map(bug => {
//                 return (bug.id === actions.payload.id) ?
//                     ({
//                         ...bug,
//                         description: `${bug.description} ${actions.payload.description}`,
//                         resolved: false
//                     })
//                     :
//                     (bug)
//             })

//         default:
//             return state;
//     }

// }
//reducer<
