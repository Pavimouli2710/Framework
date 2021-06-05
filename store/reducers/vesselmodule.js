import { SET_MODULEITEMS } from "../actions/vesselmodule";

import ModuleItem from "../../models/ModuleItem";

const initialState = {
  availableModuleItems: [],
  newVessel: new ModuleItem(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MODULEITEMS:
      return {
        availableModuleItems: action.moduleItems,
      };
  }
  return state;
};
