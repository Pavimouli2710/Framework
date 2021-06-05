import * as Constants from "../../helpers/Url";
import { DashboardMeasurePurchase } from "../../models/DashboardMeasure";
import { DashboardMeasureVesselPerformance } from "../../models/DashboardMeasure";
import { DashboardMeasureCertificates } from "../../models/DashboardMeasure";
import { DashboardMeasurePlannedMaintenance } from "../../models/DashboardMeasure";
import { DashboardMeasureIncident } from "../../models/DashboardMeasure";
import { DashboardMeasureMoC } from "../../models/DashboardMeasure";

export const SET_SUB_CATEGORIES = "SET_SUB_CATEGORIES";
export const VESSEL_PERFORMANCE = "VESSEL_PERFORMANCE";
export const CERTIFICATE_SURVEY = "CERTIFICATE_SURVEY";
export const PURCHASE = "PURCHASE";
export const PLANNED_MAINTENANCE = "PLANNED_MAINTENANCE";
export const AUDITS_INSPECTION = "AUDITS_INSPECTION";
export const OPEN_REPORT = "OPEN_REPORT";
export const INCIDENT = "INCIDENT";
export const RISK_MOC = "RISK_MOC";

const getSubCategoryAction = (subcategoryid) => {
  switch (subcategoryid) {
    case "1":
      return VESSEL_PERFORMANCE;
    case "2":
      return CERTIFICATE_SURVEY;
    case "3":
      return PLANNED_MAINTENANCE;
    case "4":
      return PURCHASE;
    case "12":
      return AUDITS_INSPECTION;
    case "9":
      return INCIDENT;
    case "10":
      return RISK_MOC;
    case "14":
      return OPEN_REPORT;
    default:
  }
};

const getWebApi = (subcategoryid) => {
  switch (subcategoryid) {
    case "1":
      return "/GetSubCategoryElementsVesselPerformance";
    case "2":
      return "/GetSubCategoryElementsCertificateSurvey";
    case "3":
      return "/GetSubCategoryElementsPMS";
    case "4":
      return "/GetSubCategoryElementsPurchase";
    case "9":
      return "/GetSubCategoryElementsIncident";
    case "10":
      return "/GetSubCategoryElementsRiskMoc";
    case "12":
      return "/GetSubCategoryElementsAuditAndInspection";
    case "14":
      return "/GetSubCategoryElementsOpenReports";

    default:
  }
};

const getSubCategoryElements = (subcategoryid, resData) => {
  switch (subcategoryid) {
    case "1":
      return getVesselPerformanceSubCategoryElements(subcategoryid, resData);
    case "2":
      return getCertificateSurveySubCategoryElements(subcategoryid, resData);
    case "3":
      return getPlannedMaintenanceSubCategoryElements(subcategoryid, resData);
    case "4":
      return getPurchaseSubCategoryElements(subcategoryid, resData);
    case "9":
      return getIncidentSubCategoryElements(subcategoryid, resData);
    case "10":
      return getRiskMocSubCategoryElements(subcategoryid, resData);
    case "12":
      return getAuditAndInspectionSubCategoryElements(subcategoryid, resData);
    case "14":
      return getOpenReportsSubCategoryElements(subcategoryid, resData);

    default:
  }
  if (subcategoryid === 4) {
  }
};

const getCertificateSurveySubCategoryElements = (subcategoryid, resData) => {
  const subcategoryelements = [];

  for (const key in resData) {
    subcategoryelements.push(
      new DashboardMeasureCertificates(
        key,
        resData[key].id,
        resData[key].measurename,
        subcategoryid,
        resData[key].measurecode,
        resData[key].overdue,
        resData[key].days30,
        resData[key].days60
      )
    );
  }
  return subcategoryelements;
};

const getRiskMocSubCategoryElements = (subcategoryid, resData) => {
  const subcategoryelements = [];

  for (const key in resData) {
    subcategoryelements.push(
      new DashboardMeasureMoC(
        key,
        resData[key].id,
        resData[key].measurename,
        subcategoryid,
        resData[key].measurecode,
        resData[key].ship,
        resData[key].office
      )
    );
  }
  return subcategoryelements;
};

const getVesselPerformanceSubCategoryElements = (subcategoryid, resData) => {
  const subcategoryelements = [];

  for (const key in resData) {
    subcategoryelements.push(
      new DashboardMeasureVesselPerformance(
        key,
        resData[key].id,
        resData[key].measurename,
        subcategoryid,
        resData[key].measurecode,
        resData[key].overdue,
        resData[key].pendingreview
      )
    );
  }
  return subcategoryelements;
};

const getPurchaseSubCategoryElements = (subcategoryid, resData) => {
  const subcategoryelements = [];

  for (const key in resData) {
    subcategoryelements.push(
      new DashboardMeasurePurchase(
        key,
        resData[key].id,
        resData[key].measurename,
        subcategoryid,
        resData[key].measurecode,
        resData[key].measurecount
      )
    );
  }
  return subcategoryelements;
};

const getPlannedMaintenanceSubCategoryElements = (subcategoryid, resData) => {
  const subcategoryelements = [];

  for (const key in resData) {
    subcategoryelements.push(
      new DashboardMeasurePlannedMaintenance(
        key,
        resData[key].id,
        resData[key].measurename,
        subcategoryid,
        resData[key].measurecode,
        resData[key].measurecount
      )
    );
  }
  return subcategoryelements;
};

const getIncidentSubCategoryElements = (subcategoryid, resData) => {
  const subcategoryelements = [];

  for (const key in resData) {
    subcategoryelements.push(
      new DashboardMeasureIncident(
        key,
        resData[key].id,
        resData[key].measurename,
        subcategoryid,
        resData[key].measurecode,
        resData[key].measurecount
      )
    );
  }
  return subcategoryelements;
};

export const fetchSubcategoryElements = (subcategoryid) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        Constants.URL_API + getWebApi(subcategoryid),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rowusercode: 5,
            subcategoryid: subcategoryid,
          }),
        }
      );

      if (!response.ok) {
        const errorResData = await response.json();
        console.log(errorResData);
        const errorId = errorResData.error.message;
        let message = "Something went wrong!";

        throw new Error(message);
      }

      const resData = await response.json();

      let subcategoryelements = [];

      subcategoryelements = getSubCategoryElements(subcategoryid, resData);
      dispatch({
        type: getSubCategoryAction(subcategoryid),
        subcategoryelements: subcategoryelements,
      });
    } catch (err) {
      throw err;
    }
  };
};
