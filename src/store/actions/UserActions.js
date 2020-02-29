export const USER_ACTION_TYPES = {
    UPDATE_USER: 'UPDATE_USER' 
};

const Fetch_User = dispatch => {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(res => dispatch({
            type: USER_ACTION_TYPES.UPDATE_USER,
            payload: res.data
        }));
};

export default Fetch_User;