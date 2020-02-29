import {USER_ACTION_TYPES} from '../actions/UserActions'

const UserReducer = (state = {}, {type, payload}) => {

    switch (type) {
        case USER_ACTION_TYPES.UPDATE_USER:
            return payload;
        
        default:
            return state;
    }
};

export default UserReducer;