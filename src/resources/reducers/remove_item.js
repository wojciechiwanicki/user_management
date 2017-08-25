export default function(state = null, action) {
    switch (action.type) {
        case "DELETE_ITEM":
        const newState = Object.assign([], state);
        const indexOfItemToDelete = state.findIndex(equipment => {return equipment.id === action.equipment.id})
        newState.splice(indexOfItemToDelete, 1);
        return newState;
        default:

    }
    return state;
}
