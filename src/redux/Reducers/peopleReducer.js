import * as actionTypes from '../Actions/actionTypes';


const initialState = [];

const people = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            return state.concat([action.payload]);
        case actionTypes.DELETE_PERSON:
            return state.filter((person, i) => i !== action.id)
        case actionTypes.UPDATE_PERSON:
            return state.map((pers) => {
                if (pers.id === action.person.id) {
                    return action.person;
                }

                return pers;
            })
        default:
            return state;
    }
}
export default people;