export const deleteItem = (equipment) => {
    console.log('action-delete');
    return{
        type: "DELETE_ITEM",
        payload: equipment
    };
}
