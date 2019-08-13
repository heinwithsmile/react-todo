import * as actionTypes from '../Actions/actionTypes';
import uuid from 'uuid';

const initialState = () => ({
    id: uuid(),
    name: '',
    email: '',
    editing: false
    // date: new Date()
});

const person = (state = initialState(), action) => {
    switch (action.type) {
        case actionTypes.ADD_NAME:
            return Object.assign({}, state, { name: action.name });
        case actionTypes.ADD_EMAIL:
            return Object.assign({}, state, { email: action.email });
        case actionTypes.RESET_FORM:
            return initialState();
        case actionTypes.EDIT_PERSON:
                return Object.assign({}, state, { 
                    id:action.payload.id,
                    name:action.payload.name,
                    email: action.payload.email ,
                    editing:action.payload.editing });
        // case actionTypes.ADD_DATE:
        // return Object.assign({},state,{date:action.date})
        default:
            return state;
    }
}
export default person;