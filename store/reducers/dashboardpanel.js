import {
  SET_SUB_CATEGORIES,
  VESSEL_PERFORMANCE,
  CERTIFICATE_SURVEY,
  PURCHASE,
  PLANNED_MAINTENANCE,
  OPEN_REPORT,
  AUDIT_INSPECTION,
  INCIDENT,
  RISK_MOC,
} from "../actions/dashboardpanel";

const myVesselSubcategory = {
  subcategoryelements: [],
  vesselperformanceelements: [],
  certificatesurveyelements: [],
  purchaseelements: [],
  plannedmaintenanceelements: [],
  openreportelements: [],
  auditinspectionelements: [],
  incidentelements: [],
  riskmocelements: [],
};

export default (state = myVesselSubcategory, action) => {
  switch (action.type) {
    case SET_SUB_CATEGORIES:
      return {
        ...state,
        subcategoryelements: action.subcategoryelements,
      };
    case VESSEL_PERFORMANCE:
      return {
        ...state,
        vesselperformanceelements: action.subcategoryelements,
      };
    case CERTIFICATE_SURVEY:
      return {
        ...state,
        certificatesurveyelements: action.subcategoryelements,
      };
    case PURCHASE:
      return {
        ...state,
        purchaseelements: action.subcategoryelements,
      };
    case PLANNED_MAINTENANCE:
      return {
        ...state,
        plannedmaintenanceelements: action.subcategoryelements,
      };
    case OPEN_REPORT:
      return {
        ...state,
        openreportelements: action.subcategoryelements,
      };
    case AUDIT_INSPECTION:
      return {
        ...state,
        auditinspectionelements: action.subcategoryelements,
      };
    case INCIDENT:
      return {
        ...state,
        incidentelements: action.subcategoryelements,
      };
    case RISK_MOC:
      return {
        ...state,
        riskmocelements: action.subcategoryelements,
      };
  }
  return state;
};
