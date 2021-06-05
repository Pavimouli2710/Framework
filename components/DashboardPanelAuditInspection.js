import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  FlatList,
} from "react-native";
import Colors from "../constants/Colors";
import Card from "./UI/Card";

const DashboardPanelAuditAndInspection = (props) => {
  const auditinspectionelements = useSelector((state) => {
    return state.dashboardPanel.auditinspectionelements;
  });
  const renderGridItem = (itemData) => {
    let TouchableCmp =
      Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return (
      <Card style={styles.gridItem}>
        <TouchableCmp>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.type}>
                <Text style={styles.name}>{itemData.item.measurename}</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.name}>{itemData.item.days60}</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.name}>{itemData.item.overcount}</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.name}>{itemData.item.cmpcount}</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.name}>{itemData.item.revcount}</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.name}>{itemData.item.revovdcount}</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.name}>{itemData.item.cldovdcount}</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "http://10.0.2.2/MobileImages/Images/common/arrow.png",
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableCmp>
      </Card>
    );
  };

  const renderGridHeader = () => {
    return (
      <Card style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.type}>
            <Text style={styles.title}>Type</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.title}>Due 60d</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.title}>OVD</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.title}>CMPL</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.title}>RVWD</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.title}>RVOVD</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.title}>cld OVD</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={{ margin: 10 }}>
      <View style={{ marginTop: 5 }}>
        <FlatList
          ListHeaderComponent={renderGridHeader}
          keyExtractor={(item, index) => {
            return item.id.toString();
          }}
          data={auditinspectionelements}
          renderItem={renderGridItem}
          numColumns={1}
        />
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  const subcategoryname = useSelector((state) => {
    return state.vesselcontext.subcategoryname;
  });

  return {
    headerTitle: subcategoryname,
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
    width: "21%",
  },
  status: {
    fontFamily: "open-sans",
    fontSize: 12,
    marginVertical: 2,
    width: "10%",
    padding: 4,
    marginHorizontal: "0.5%",
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

export default DashboardPanelAuditAndInspection;
