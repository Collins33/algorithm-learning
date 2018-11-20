import * as types from '../../redux/constants/actionTypes'

const initialState = {
    name: "collins",
    email: "collins.muru@andela.com"
}

const testsReducer = ( state= initialState, action)=>{
    switch(action.type){
        case types.CHANGE_INFORMATION_SUCCESS:
          return {
              ...state,
              name: action.name,
              email: action.email
          };
        default:
          return state
    }
}

export default testsReducer;