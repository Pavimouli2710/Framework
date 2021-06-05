import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../constants/Colors";

import DashboardPanelPurchase from "./DashboardPanelPurchase";
import DashboardPanelVesselPerformance from "./DashboardPanelVesselPerformance";
import DashboardPanelCertificateSurvey from "./DashboardPanelCertificateSurvey";
import DashboardPanelAuditInspection from "./DashboardPanelAuditInspection";
import DashboardPanelOpenReport from "./DashboardPanelOpenReport";
import DashboardPanelPlannedMaintenance from "./DashboardPanelPlannedMaintenance";
import DashboardPanelIncident from "./DashboardPanelIncident";
import DashboardPanelMoC from "./DashboardPanelMoC";
import * as dashboardPanelActions from "../store/actions/dashboardpanel";

const DashboardPanel = (props) => {
  const routeParams = props.route.params;

  let TouchableCmp =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  const dispatch = useDispatch();

  const subcategoryid = useSelector((state) => {
    return state.vesselcontext.subcategoryid;
  });

  useEffect(() => {
    dispatch(dashboardPanelActions.fetchSubcategoryElements(subcategoryid));
  }, []);

  const subcategoryelements = useSelector((state) => {
    return state.dashboardPanel.subcategoryelements;
  });

  const renderPanel = () => {
    if (+subcategoryid === 4) {
      return <DashboardPanelPurchase />;
    }
    if (+subcategoryid === 3) {
      return <DashboardPanelPlannedMaintenance />;
    }
    if (+subcategoryid === 2) {
      return <DashboardPanelCertificateSurvey />;
    }
    if (+subcategoryid === 9) {
      return <DashboardPanelIncident />;
    }
    if (+subcategoryid === 10) {
      return <DashboardPanelMoC />;
    }
    if (+subcategoryid === 14) {
      return <DashboardPanelOpenReport />;
    }
    if (+subcategoryid === 12) {
      return <DashboardPanelAuditInspection />;
    }
    if (+subcategoryid === 1) {
      return (
        <DashboardPanelVesselPerformance
          itemData={subcategoryelements}
          vesselparams={routeParams}
        />
      );
    }

    return (
      <View>
        <Text>No Defined yet!</Text>
      </View>
    );
  };

  return <View>{renderPanel()}</View>;
};

export const screenOptions = (navData) => {
  const routeParams = navData.route.params ? navData.route.params : {};
  return {
    headerTitle: routeParams.subcategoryname,
  };
};

const styles = StyleSheet.create({
  header: {
    margin: 5,
    backgroundColor: "#ccc",
  },
  gridItem: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 5,
    backgroundColor: Colors.operationColor,
  },
  type: {
    fontFamily: "open-sans",
    fontSize: 12,
    marginVertical: 4,
    width: "50%",
  },
  status: {
    fontFamily: "open-sans",
    fontSize: 12,
    marginVertical: 4,
    width: "15%",
  },
  touchable: {
    overflow: "hidden",
  },
  image: {
    width: "50%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontFamily: "open-sans",
    fontSize: 12,
    marginVertical: 4,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 12,
    marginVertical: 2,
  },
  address: {
    fontSize: 14,
    color: "#000",
  },
  imageContainer: {
    width: "15%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default DashboardPanel;
