import Update_Person, {PERSON_ACTION_TYPES} from '../PersonActions';

describe ('actions', () => {
    it ('should return the action for person', () => {
        const expectedAction = {
            type: PERSON_ACTION_TYPES.UPDATE_PERSON,
            payload: 'bitfumes'
        }
        
        expect(Update_Person).toEqual(expectedAction);
    });
})