import * as types from "../constants/actionTypes";

const defaultState = {
  orderBy: "name",
  orderDir: "asc"
};

const sort = (state = defaultState, action) => {
  // let { orderBy, orderDir } = action;
  switch (action.type) {
    case types.SORT_ITEM:
      return {
        orderBy: action.orderBy,
        orderDir: action.orderDir
      };
    default:
      return state;
  };
};

export default sort;
