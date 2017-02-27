import * as types from '../action/actionTypes';
export default function loginReducer(state =[] , action) {
  switch (action.type){
    case types.LOGIN_SUBMIT:
          debugger;
          return [...state, Object.assign({},action.login)] ;
    default:
          return state ;
  }
}
