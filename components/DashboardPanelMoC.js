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

const DashboardPanelMoC = (props) => {
    const riskmocelements = useSelector((state) => {
        return state.dashboardPanel.riskmocelements;
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
                <Text style={styles.name}>{itemData.item.ship}</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.name}>{itemData.item.office}</Text>
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
            <Text style={styles.title}>Ship</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.title}>Office</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.title}>Action</Text>
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
          data={riskmocelements}
          renderItem={renderGridItem}
          numColumns={1}
        />
      </View>
    </View>
  );
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
    width: "60%"
  },
  status: {
    fontFamily: "open-sans",
    fontSize: 12,
    marginVertical: 4,
    width: "12%",
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

export default DashboardPanelMoC;
