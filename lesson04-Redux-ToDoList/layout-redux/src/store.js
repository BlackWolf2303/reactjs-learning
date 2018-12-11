import { createStore } from 'redux';
import appReducers from './reducers/indexReducer';
import {actCloseForm, actOpenForm, actToggleForm,actSort} from './actions/index';



const store = createStore(appReducers);

store.subscribe(()=>console.log(store.getState()))
//OPEN FORM
store.dispatch(actCloseForm());
// let action = {type: 'CLOSE_FORM'};
// store.dispatch(action);
// console.log("CLOSE_FORM",store.getState());
//CLOSE FORM
store.dispatch(actOpenForm());
// action = {type: 'OPEN_FORM'};
// store.dispatch(action);
// console.log("OPEN_FORM",store.getState());
//TOGGLE FORM
store.dispatch(actToggleForm());

//SORT ITEM
store.dispatch(actSort('level','desc'));
console.log("SORT_ITEM",store.getState());

export default store;


// ---------------Original Code------------------ 

// const defaulState = {
//   items       : itemsData,
//   isShowForm  : true,
//   stringSearch: "",
//   orderBy     : "name",
//   orderDir    : "asc",
//   itemEdit    : null
// }

// const appReducers = (state=defaulState, action) => {
//   switch (action.type){
//     case 'CLOSE_FORM':
//       return {
//         ...state, 
//         isShowForm : false
//       }
//     case 'OPEN_FORM':
//       return {
//         ...state, 
//         isShowForm : true
//       }
//     default:
//     return state;
//   }
// }
// const store = createStore(appReducers);

// store.subscribe(()=>console.log(store.getState()))
//OPEN FORM
// let action = {type: 'CLOSE_FORM'};
// store.dispatch(action);
// console.log("CLOSE_FORM",store.getState());
//CLOSE FORM
// action = {type: 'OPEN_FORM'};
// store.dispatch(action);
// console.log("OPEN_FORM",store.getState());

//export default store;
