import Category from "../../models/Category";
import SubCategory from "../../models/SubCategory";
import CategoryMenu from "../../models/CategoryMenu";
import * as Constants from "../../helpers/Url";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_MODULES = "SET_MODULES";
export const SET_CATEGORY_MENU_LIST = "SET_CATEGORY_MENU_LIST";

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(Constants.URL_API + "/GetSubCategoryList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rowusercode: "1",
          categoryid: null,
        }),
      });

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = "Something went wrong!";

        throw new Error(message);
      }

      const resData = await response.json();

      const loadedCategories = [];

      for (const key in resData) {
        loadedCategories.push(
          new SubCategory(
            key,
            resData[key].categoryid,
            resData[key].subcategoryid,
            resData[key].subcategoryname,
            resData[key].subcategorycode,
            resData[key].subcategoryimage,
            resData[key].subcategoryflag
          )
        );
      }
      dispatch({
        type: SET_CATEGORIES,
        categories: loadedCategories,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchModules = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(Constants.URL_API + "/GetCategoryList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rowusercode: "1",
          categoryid: null,
        }),
      });

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = "Something went wrong!";

        throw new Error(message);
      }

      const resData = await response.json();

      const loadedModules = [];

      for (const key in resData) {
        loadedModules.push(
          new Category(
            key,
            resData[key].categoryid,
            resData[key].categorycode,
            resData[key].categoryname
          )
        );
      }
      dispatch({
        type: SET_MODULES,
        modules: loadedModules,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchCategoryMenuList = (subcategoryid) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        Constants.URL_API + "/GetSubCategoryMenuItemList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rowusercode: 1,
            subcategoryid: subcategoryid,
            istech: null,
            ishseqa: null,
            isoperation: null,
            iscrew: null,
            parentid: null,
          }),
        }
      );

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = "Something went wrong!";

        throw new Error(message);
      }

      const resData = await response.json();

      const loadedCategoryMenu = [];

      for (const key in resData) {
        loadedCategoryMenu.push(
          new CategoryMenu(
            key,
            subcategoryid,
            resData[key].elementid,
            resData[key].elementname,
            resData[key].parentid
          )
        );
      }
      dispatch({
        type: SET_CATEGORY_MENU_LIST,
        categorymenulist: loadedCategoryMenu,
      });
    } catch (err) {
      throw err;
    }
  };
};
