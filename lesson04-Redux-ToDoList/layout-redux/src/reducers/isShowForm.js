const defaultState = false;

const isShowForm = (state = defaultState, action) => {
  switch(action.type){
    case 'CLOSE_FORM':
     state = false;

  case 'OPEN_FORM':
    state = true;
  case 'TOGGLE_FORM':
    return state = !state;
    return state;

  default:
    return state;
  }
}

export default isShowForm;