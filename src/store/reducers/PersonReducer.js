import {PERSON_ACTION_TYPES} from '../actions/PersonActions'

const PersonReducer = (state = {}, {type, payload}) => {

    switch (type) {
        case PERSON_ACTION_TYPES.UPDATE_PERSON:
            return {
                ...state,
                name: payload
            };
        
        default:
            return state;
    }
};

export default PersonReducer;