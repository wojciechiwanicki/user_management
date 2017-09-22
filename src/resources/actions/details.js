export const selectUser = (user) => {
    console.log('successfully got users data');
    return{
        type: "SELECTED_USER",
        payload: user
    }
};
