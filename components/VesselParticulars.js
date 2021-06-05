import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";
import Card from "./UI/Card";

const VesselParticulars = (props) => {
  let TouchableCmp =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Card style={styles.user}>
      <View
        style={{
          justifyContent: "space-around",
          margin: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={styles.gridItem}>
            <TouchableCmp onPress={props.onSelect} useForeground>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.image1 }} />
              </View>
            </TouchableCmp>
          </View>
        </View>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 8, color: "navy" }}>From/At</Text>
            <Text style={{ fontSize: 8, fontWeight: "bold" }}>
              {props.vesseldata.fromAt}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 8, color: "navy" }}>To</Text>
            <Text style={{ fontSize: 8, fontWeight: "bold" }}>
              {props.vesseldata.to}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 8, color: "navy" }}>ETA/ETD</Text>
            <Text style={{ fontSize: 8, fontWeight: "bold" }}>
              {props.vesseldata.eta + "/" + props.vesseldata.etd}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 8, color: "navy" }}>SPEED</Text>
            <Text style={{ fontSize: 8, fontWeight: "bold" }}>
              {props.vesseldata.windforce}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 8, color: "navy" }}>WIND FORCE</Text>
            <Text style={{ fontSize: 8, fontWeight: "bold" }}>NNW</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    overflow: "hidden",
    fontSize: 6,
  },
  user: {
    height: 100,
    width: 110,
    margin: 1,
    overflow: "hidden",
    borderRadius: 0,
  },
  touchable: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 4,
  },

  address: {
    fontSize: 14,
    color: "#000",
  },

  imageContainer: {
    width: "100%",
    height: "75%",
  },
});

export default VesselParticulars;
