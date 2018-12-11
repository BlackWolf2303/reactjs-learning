import { combineReducers } from 'redux';
import itemsData from '../mocks/tasks';
import isShowForm from'./isShowForm';
import sort from'./sort';

const defaulState = {
  items       : itemsData,
  isShowForm  : true,
  stringSearch: "",
  sort        :{orderBy : "name", orderDir: "asc"},
  itemEdit    : null
}

const appReducers = combineReducers({
  isShowForm,
  sort
});

export default appReducers;