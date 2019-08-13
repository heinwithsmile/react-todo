import * as actionTypes from '../Actions/actionTypes';

export const addname = (name) =>{
    return {
        type: actionTypes.ADD_NAME,
        name: name
    }
}

export const addemail = (email) =>{
    return {
        type: actionTypes.ADD_EMAIL,
        email:email
    }
}

export const reset = () => {
    return {
        type: actionTypes.RESET_FORM
    }
}

export const onEdit = (id,name,email,editing) => {
    return {
        type: actionTypes.EDIT_PERSON,
        payload:{
            id:id,
            name:name,
            email:email,
            editing:!editing
        }
    }
}
// export const addDate = (date) =>{
//     return {
//         type: actionTypes.ADD_DATE,
//         date: date
//     }
// }