import {put, takeLatest, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import testActionSuccess from '../actions/users/usersActions'

export function* testSaga(action){
    try{
        yield put(testActionSuccess(action.name, action.email))
    }
    catch(error){
      console.log(error, "my name")
    }

}

export default function* watchTestSaga(){
    yield takeLatest(types.CHANGE_INFORMATION, testSaga)
}