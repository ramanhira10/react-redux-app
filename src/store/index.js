import {createStore, combineReducers, applyMiddleware} from 'redux';

import PersonReducer from './reducers/PersonReducer';
import GameReducer from './reducers/GameReducer';
import UserReducer from './reducers/UserReducer';
import thunk from 'redux-thunk';

const AllReducers = combineReducers({
    game: GameReducer,
    person: PersonReducer,
    users: UserReducer
});

const InitialStates = {
    game: {name: 'Football'},
    person: {name: 'Raman Hira'},
    users: []
};

const middleware = [thunk];

const store = createStore(AllReducers, InitialStates, applyMiddleware(...middleware));

export default store;