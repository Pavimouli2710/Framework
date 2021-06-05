import Vessel from "../../models/Vessel";
import * as Constants from "../../helpers/Url";

export const GET_VESSELS = "GET_VESSELS";
export const SET_VESSELS = "SET_VESSELS";
export const SET_CATEGORIES = "SET_CATEGORIES";

export const fetchVessels = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(Constants.URL_API + "/GetVesselList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          EMail: "",
          Name: "",
        }),
      });

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = "Something went wrong!";

        throw new Error(message);
      }

      const resData = await response.json();

      const loadedVessels = [];

      for (const key in resData) {
        loadedVessels.push(
          new Vessel(
            key,
            resData[key].id,
            resData[key].imageUrl,
            resData[key].vesselname,
            resData[key].fromAt,
            resData[key].to,
            resData[key].eta,
            resData[key].etd,
            resData[key].speed,
            resData[key].windforce,
            resData[key].isVesselperformance,
            resData[key].isCertsurvey,
            resData[key].isPMS,
            resData[key].isPurchase,
            resData[key].isCargooperation,
            resData[key].isTradingareawx,
            resData[key].isPSCvetting,
            resData[key].isOthers,
            resData[key].isIncidents,
            resData[key].isMoCRA,
            resData[key].isDrill,
            resData[key].isAuditInspection,
            resData[key].isManningDocuments,
            resData[key].isOpenreportsComplaints,
            resData[key].isCrewChangeApproval,
            resData[key].isActionItem,
            resData[key].isNotes,
            resData[key].imonumber
          )
        );
      }
      dispatch({
        type: SET_VESSELS,
        vessels: loadedVessels,
      });
    } catch (err) {
      throw err;
    }
  };
};
