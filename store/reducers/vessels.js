import { SET_VESSELS } from "../actions/vessels";

import Vessel from "../../models/Vessel";

const vesselState = {
  availableVessels: [],
  editedVessel: null,
  newVessel: new Vessel(),
};

export default (state = vesselState, action) => {
  switch (action.type) {
    case SET_VESSELS:
      return {
        availableVessels: action.vessels,
      };
  }
  return state;
};
