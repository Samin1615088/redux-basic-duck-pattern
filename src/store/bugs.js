//actionTypes>
const BUG_ADDED = 'BUG_ADDED';
const BUG_REMOVED = 'BUG_REMOVED';
const BUG_RESOLVED = 'BUG_RESOLVED';
const BUG_UPDATED = 'BUG_UPDATED';
//actionTypes<


//actionCreator>
export const createBug = (description) => {
    return (
        {
            type: BUG_ADDED,
            payload: {
                description
            }
        }
    )
}
export const removeBug = id => {
    return (
        {
            type: BUG_REMOVED,
            payload: {
                id
            }
        }
    )
}
export const resolveBug = id => {
    return (
        {
            type: BUG_RESOLVED,
            payload: {
                id
            }
        }
    )
}

export const updateBug = (id, description) => {
    return (
        {
            type: BUG_UPDATED,
            payload: { id, description }
        }
    )
}
//actionCreator<


//reducer>
let lastId = 0;
//reducer will take (state)-will get from store , (action )-will get from dispatch--- then reducer returns newState
export default function reducer(state = [], actions) {
    switch (actions.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: actions.payload.description,
                    resolved: false
                }
            ];

        case BUG_REMOVED:
            return state.filter(bug => bug.id !== actions.payload.id);

        case BUG_RESOLVED:
            return state.map(bug => {
                return (bug.id === actions.payload.id) ?
                    ({
                        ...bug,
                        resolved: true
                    })
                    :
                    (bug)
            });

        case BUG_UPDATED:
            return state.map(bug => {
                return (bug.id === actions.payload.id) ?
                    ({
                        ...bug,
                        description: `${bug.description} ${actions.payload.description}`,
                        resolved: false
                    })
                    :
                    (bug)
            })

        default:
            return state;
    }

}
//reducer<
