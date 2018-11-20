import * as types from "../../constants/actionTypes"

export const getUserAction = () =>({
    type: types.GET_USERS
})

export const createUserAction = (name, email)=>({
    type: types.CREATE_USERS,
    name,
    email
})

export const testAction = (name, email)=>({
    type: types.CHANGE_INFORMATION,
    name,
    email
})

const testActionSuccess = (name, email)=>({
    type: types.CHANGE_INFORMATION_SUCCESS,
    name,
    email
});

export default testActionSuccess