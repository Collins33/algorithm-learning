import {createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../saga'

// const configurestore = () =>{
//     const sagaMiddleware = createSagaMiddleware()
//     return {
//         ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
//         runSaga: sagaMiddleware.run(rootSaga)
//     };
// };

const sagaMiddleware = createSagaMiddleware();
const tool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = tool;
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, middleware);

export default store;