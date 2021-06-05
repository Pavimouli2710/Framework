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
import SubModuleImage from "./SubModuleImage";
import Colors from "../constants/Colors";
import Card from "./UI/Card";

const VesselModuleImage = (props) => {
  let TouchableCmp =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Card style={styles.user}>
      <TouchableCmp
        onPress={props.onModuleSelect.bind(this, props.modulecode)}
        useForeground
      >
        <View style={{ marginLeft: 2 }}>
          <View
            style={{
              backgroundColor: props.titleBackground,
              alignItems: "center",
              fontSize: 12,
            }}
          >
            <Text style={{ fontSize: 11 }}>{props.moduleName} </Text>
          </View>
          <View
            style={{
              justifyContent: "space-around",
              margin: 1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <SubModuleImage
                vesselid={props.vesselid}
                modulename={props.moduleName}
                submodule={props.submodule1}
                subcategoryid={props.submodule1id}
                subcategoryname={props.subcategoryname1}
                image={props.image1}
                onSelect={props.onSelect}
              />
              <SubModuleImage
                vesselid={props.vesselid}
                modulename={props.moduleName}
                submodule={props.submodule2}
                subcategoryid={props.submodule2id}
                subcategoryname={props.subcategoryname2}
                image={props.image2}
                onSelect={props.onSelect}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItem: "center",
                marginBottom: 10,
              }}
            >
              <SubModuleImage
                vesselid={props.vesselid}
                modulename={props.moduleName}
                submodule={props.submodule3}
                subcategoryid={props.submodule3id}
                subcategoryname={props.subcategoryname3}
                image={props.image3}
                onSelect={props.onSelect}
              />
              <SubModuleImage
                vesselid={props.vesselid}
                modulename={props.moduleName}
                submodule={props.submodule4}
                subcategoryid={props.submodule4id}
                subcategoryname={props.subcategoryname4}
                image={props.image4}
                onSelect={props.onSelect}
              />
            </View>
          </View>
        </View>
      </TouchableCmp>
    </Card>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  user: {
    height: 100,
    width: 70,
    margin: 1,
    overflow: "hidden",
    borderRadius: 0,
    backgroundColor: "white",
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
    height: "55%",
  },
});

export default VesselModuleImage;
