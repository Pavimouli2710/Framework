import {
  SET_CATEGORIES,
  SET_MODULES,
  SET_CATEGORY_MENU_LIST,
} from "../actions/categories";

const categoryState = {
  categorieslist: [],
  moduleslist: [],
  categorymenulist: [],
};

export default (state = categoryState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categorieslist: action.categories,
      };
    case SET_MODULES:
      return {
        ...state,
        moduleslist: action.modules,
      };
    case SET_CATEGORY_MENU_LIST:
      return {
        ...state,
        categorymenulist: action.categorymenulist,
      };
  }
  return state;
};
