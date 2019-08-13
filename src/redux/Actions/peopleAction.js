import * as actionTypes from './actionTypes';

export const addPerson = (person) => {
    return {
        type: actionTypes.ADD_PERSON,
        payload:person

    }
}

export const deletePerson = (id) => {
    return {
        type: actionTypes.DELETE_PERSON,
        id: id
    }
}

export const updatePerson = (person) => {
    return {
        type: actionTypes.UPDATE_PERSON,
        person:person,

    }
}



