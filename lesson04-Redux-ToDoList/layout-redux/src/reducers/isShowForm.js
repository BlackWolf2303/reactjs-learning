import * as types from '../constants/actionTypes';
const defaultState = false;

const isShowForm = (state = defaultState, action) => {
  switch(action.type){
    case types.CLOSE_FORM:
      state = true;
      break;

    case types.OPEN_FORM:
      state = false;
      break;
      
    case types.TOGGLE_FORM:
      return state = !state;

    default:
      return state;
  }
}

export default isShowForm;