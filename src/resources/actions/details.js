export const selectUser = (user) => {
    console.log('success 1');
    return{
        type: "SELECTED_USER",
        payload: user
    }
};
