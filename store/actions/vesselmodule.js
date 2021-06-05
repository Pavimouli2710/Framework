import ModuleItem from "./../../models/ModuleItem";
import * as Constants from "../../helpers/Url";

export const SET_MODULEITEMS = "SET_MODULEITEMS";

export const fetchModuleItems = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(Constants.URL_API + "/GetModuleItemsList");
      const resData = await response.json();

      const loadedModuleItems = [];

      for (const key in resData) {
        loadedModuleItems.push(
          new ModuleItem(
            key,
            resData[key].name,
            resData[key].type,
            resData[key].status
          )
        );
      }
      dispatch({
        type: SET_MODULEITEMS,
        moduleItems: loadedModuleItems,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
