import { all } from 'redux-saga/effects';
import watchTestSaga from '../saga/testSaga'

function* rootSaga(){
    yield all([
      watchTestSaga()
    ])
}

export default rootSaga;