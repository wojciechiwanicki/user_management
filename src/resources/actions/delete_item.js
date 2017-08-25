export const deleteItem = (equipment) => {
    console.log('spoko');
    return{
        type: "DELETE_ITEM",
        payload: equipment
    }
};
