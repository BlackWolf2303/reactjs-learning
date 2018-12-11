import { createStore } from 'redux';
import appReducers from './reducers/indexReducer';




const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

store.subscribe(()=>{});

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
