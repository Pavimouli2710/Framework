import { combineReducers } from "redux";
import authReducer from "./auth";
import vesselReducer from "./vessels";
import categoryReducer from "./categories";
import vesselModuleReducer from "./vesselmodule";
import dashboardPanelReducer from "./dashboardpanel";
import vesselcontext from "./vesselcontext";

export default rootReducer = combineReducers({
  vessels: vesselReducer,
  auth: authReducer,
  vesselModule: vesselModuleReducer,
  categories: categoryReducer,
  dashboardPanel: dashboardPanelReducer,
  vesselcontext: vesselcontext,
});
