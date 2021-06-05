export const VESSEL_CONTEXT = "VESSEL_CONTEXT";

export const setVesselContext = (vesselid, subcategoryid, subcategoryname) => {
  return (dispatch) => {
    dispatch({
      type: VESSEL_CONTEXT,
      vesselid: vesselid,
      subcategoryid: subcategoryid,
      subcategoryname: subcategoryname,
    });
  };
};
