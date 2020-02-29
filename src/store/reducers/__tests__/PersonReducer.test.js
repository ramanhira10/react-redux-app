import PersonReducer from '../PersonReducer';
import PersonActions, {PERSON_ACTION_TYPES} from '../../actions/PersonActions';

describe ('reducers', () => {
    it ('should update person name only', () => {
        expect (PersonReducer({}, {
            type: PERSON_ACTION_TYPES.UPDATE_PERSON,
            payload: 'bitfumes'
        }));
    });
});