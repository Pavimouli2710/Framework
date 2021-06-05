import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import * as vesselContextActions from "../store/actions/vesselcontext";

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

const SubModuleImage = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onImagePressHandler = () => {
    dispatch(
      vesselContextActions.setVesselContext(
        props.vesselid,
        props.subcategoryid,
        props.subcategoryname
      )
    );

    navigation.navigate({
      name: "DashboardPanel",
      params: {
        vesselid: props.vesselid,
        moduleName: props.modulename,
        subModule: props.submodule,
        subcategoryid: props.subcategoryid,
        subcategoryname: props.subcategoryname,
      },
    });
  };

  let TouchableCmp =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  const showImage = () => {
    return (
      <TouchableCmp onPress={onImagePressHandler} useForeground>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
      </TouchableCmp>
    );
  };

  const displayImage = () => {
    if (props.image !== "") {
      return showImage();
    }
  };

  return <View style={styles.gridItem}>{displayImage()}</View>;
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

export default SubModuleImage;
