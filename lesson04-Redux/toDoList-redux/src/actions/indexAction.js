import * as types from "../constants/actionTypes";

export const actCloseForm = () => {
  return {
    type: types.CLOSE_FORM
  };
};

export const actOpenForm = () => {
  return {
    type: types.OPEN_FORM
  };
};

export const actToggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  };
};

export const actSort = (orderBy, orderDir) => {
  return {
    type: types.SORT_ITEM,
    sort: {
      orderBy: orderBy,
      orderDir: orderDir
    }
  };
};
