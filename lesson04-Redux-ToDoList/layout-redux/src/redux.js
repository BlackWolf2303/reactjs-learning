import { createStore } from 'redux';
import itemsData from "./mocks/tasks";
let defaulState = {
  items       : itemsData,
  isShowForm  : true,
  stringSearch: "",
  orderBy     : "name",
  orderDir    : "asc",
  itemEdit    : null
}

let appReducers = (state=defaulState, action) => {
  switch (action.type){
    case 'CLOSE_FORM':
      return {...state, isShowForm : false}
    case 'OPEN_FORM':
      return {...state, isShowForm : true}
    default:
    return state;
  }

}

const store = createStore(appReducers);

console.log("Init",store.getState());

//OPEN FORM
let action = {type: 'CLOSE_FORM'};
store.dispatch(action);
console.log("CLOSE_FORM",store.getState());

//CLOSE FORM
action = {type: 'OPEN_FORM'};
store.dispatch(action);
console.log("OPEN_FORM",store.getState());

export default store;




