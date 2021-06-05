import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import * as Constants from "../helpers/Url";
import Card from "./UI/Card";
import VesselModuleImage from "./VesselModuleImage";
import VesselParticulars from "./VesselParticulars";

const VesselItem = (props) => {
  let TouchableCmp =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  const categorieslist = useSelector((state) => {
    return state.categories.categorieslist;
  });
  const moduleslist = useSelector((state) => {
    return state.categories.moduleslist;
  });

  const getCategory = (categorycode) => {
    return moduleslist.filter((category) => {
      return category.categorycode === categorycode;
    })[0];
  };

  const tech = getCategory("TECH");
  const ops = getCategory("OPS");
  const hseqa = getCategory("HSEQA");
  const crew = getCategory("CREW");

  const getSubCategory = (categoryid, subcategorycode) => {
    return categorieslist.filter((subcategory) => {
      return (
        subcategory.categoryid === categoryid &&
        subcategory.subcategorycode === subcategorycode
      );
    })[0];
  };

  const getSubCategoryList = (categoryid) => {
    return categorieslist.filter((subcategory) => {
      return subcategory.categoryid === categoryid;
    });
  };

  let url = Constants.URL_IMAGES;

  const getColor = (id) => {
    if (id == 1) {
      return Colors.technicalColor;
    }

    if (id == 2) {
      return Colors.operationColor;
    }

    if (id == 3) {
      return Colors.hseqaColor;
    }

    if (id == 4) {
      return Colors.crewColor;
    }
  };

  const createVesselModuleImage = (module, modulename) => {
    let subcategorylist = getSubCategoryList(module.categoryid);
    return (
      <VesselModuleImage
        key={module.categoryid}
        modulecode={module.categorycode}
        moduleName={modulename}
        vesselid={props.vesseldata.id}
        titleBackground={getColor(module.categoryid)}
        image1={
          url +
          subcategorylist[0].subcategoryurl +
          props.vesseldata[subcategorylist[0].subcategoryflag] +
          ".png"
        }
        submodule1={subcategorylist[0].subcategorycode}
        submodule1id={subcategorylist[0].subcategoryid}
        subcategoryname1={subcategorylist[0].subcategoryname}
        image2={
          url +
          subcategorylist[1].subcategoryurl +
          props.vesseldata[subcategorylist[1].subcategoryflag] +
          ".png"
        }
        submodule2={subcategorylist[1].subcategorycode}
        submodule2id={subcategorylist[1].subcategoryid}
        subcategoryname2={subcategorylist[1].subcategoryname}
        image3={
          url +
          subcategorylist[2].subcategoryurl +
          props.vesseldata[subcategorylist[2].subcategoryflag] +
          ".png"
        }
        submodule3={subcategorylist[2].subcategorycode}
        submodule3id={subcategorylist[2].subcategoryid}
        subcategoryname3={subcategorylist[2].subcategoryname}
        image4={
          subcategorylist.length > 3
            ? url +
              subcategorylist[3].subcategoryurl +
              props.vesseldata[subcategorylist[3].subcategoryflag] +
              ".png"
            : ""
        }
        submodule4={
          subcategorylist.length > 3 ? subcategorylist[3].subcategorycode : ""
        }
        submodule4id={
          subcategorylist.length > 3 ? subcategorylist[3].subcategoryid : -1
        }
        subcategoryname4={
          subcategorylist.length > 3 ? subcategorylist[3].subcategoryname : -1
        }
        onSelect={props.onSelect}
        onModuleSelect={props.onModuleSelect}
      ></VesselModuleImage>
    );
  };

  const createImages = (modules) => {
    return modules.map((module, index) => {
      return createVesselModuleImage(module, module.categoryname);
    });
  };

  return (
    <Card style={styles.user}>
      <View>
        <View>
          <Text
            style={{
              fontSize: 12,
              backgroundColor: Colors.primaryColor,
              color: "white",
              borderRadius: 20,
              padding: 1,
              margin: 2,
            }}
          >
            {props.vesseldata.vesselname}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <VesselParticulars
            image1={
              Constants.URL_VESSEL_IMAGES + props.vesseldata.imonumber + ".png"
            }
            vesseldata={props.vesseldata}
          ></VesselParticulars>
          {createImages(moduleslist)}
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  vesselname: {
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 1,
  },
  user: {
    height: 130,
    margin: 5,
    overflow: "hidden",
    borderRadius: 0,
  },
  touchable: {
    overflow: "hidden",
  },
  image: {
    width: "50%",
    height: "50%",
  },
  name: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 4,
  },
  detail: {
    alignItems: "flex-start",
    height: "15%",
    padding: 5,
  },
  address: {
    fontSize: 14,
    color: "#000",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: "20%",
    height: "80%",
    overflow: "hidden",
  },
});

export default VesselItem;
