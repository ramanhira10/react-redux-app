import {GAME_ACTION_TYPES} from '../actions/GameActions';

const GameReducer = (state = {}, {type, payload}) => {
    
    switch (type) {
        case GAME_ACTION_TYPES.UPDATE_GAME:
            return {
                ...state,
                name: payload
            };
        default:
            return state;
    }
};

export default GameReducer;