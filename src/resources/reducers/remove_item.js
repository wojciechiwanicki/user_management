export default function(state = {}, action) {
    switch (action.type) {
        case "DELETE_ITEM":
            return (
            console.log("this is delete action payload"),
            console.log(action.payload),
            Object.assign({}))
        default:
    }
    return state;
}
