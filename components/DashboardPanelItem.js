import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  FlatList,
} from "react-native";

import Colors from "../constants/Colors";
import Card from "./UI/Card";

export const purchasePanel = (itemData) => {
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
              <Text style={styles.name}>{itemData.item.measurecount}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: "http://10.0.2.2/MobileImage/Images/common/arrow.png",
                }}
              />
            </View>
          </View>
        </View>
      </TouchableCmp>
    </Card>
  );
};

export const vesselPerformancePanel = (itemData) => {
  let TouchableCmp =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Card style={styles.gridItem}>
      <TouchableCmp>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ ...styles.type, width: "50%" }}>
              <Text style={styles.name}>{itemData.item.measurename}</Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.name}>{itemData.item.overdue}</Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.name}>{itemData.item.pendingreview}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: "http://10.0.2.2/MobileImage/Images/common/arrow.png",
                }}
              />
            </View>
          </View>
        </View>
      </TouchableCmp>
    </Card>
  );
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
    width: "70%",
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

export default {
  purchasePanel,
  vesselPerformancePanel,
};
