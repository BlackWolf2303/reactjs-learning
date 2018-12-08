import itemsData from '../mocks/tasks';

const defaulState = {
  items       : itemsData,
  isShowForm  : true,
  stringSearch: "",
  orderBy     : "name",
  orderDir    : "asc",
  itemEdit    : null
}

const appReducers = (state=defaulState, action) => {
  switch (action.type){
    case 'CLOSE_FORM':
      return {
        ...state, 
        isShowForm : false
      }
    case 'OPEN_FORM':
      return {
        ...state, 
        isShowForm : true
      }
    case 'TOGGLE_FORM':
      return {
        ...state, 
        isShowForm : !state.isShowForm
      }
      case 'SORT_ITEM':    
      return {
        ...state, 
        orderBy : action.orderBy,  
        orderDir : action.orderDir
      }
    default:
    return state;
  }
}

export default appReducers;