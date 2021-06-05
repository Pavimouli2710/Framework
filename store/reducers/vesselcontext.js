import { VESSEL_CONTEXT } from "../actions/vesselcontext";

const initialState = {
  vesselid: null,
  subcategoryid: null,
  subcategoryname: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VESSEL_CONTEXT:
      return {
        vesselid: action.vesselid,
        subcategoryid: action.subcategoryid,
        subcategoryname: action.subcategoryname,
      };
    default:
      return state;
  }
};
