import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as vesselContextActions from "../../store/actions/vesselcontext";
import { useSelector, useDispatch } from "react-redux";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
  TouchableHighlight,
} from "react-native";
import Card from "../../components/UI/Card";

const VesselContextMenu = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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

  const getSubCategoryList = (categorycode) => {
    const selectedCategory = getCategory(categorycode);
    return categorieslist.filter((subcategory) => {
      return subcategory.categoryid === selectedCategory.categoryid;
    });
  };

  const showContextMenu = (modulecode) => {
    if (props.isVisible) {
      return showMenu4(modulecode);
    }
  };

  const showMenu4 = (modulecode) => {
    const selectedCategoryList = getSubCategoryList(modulecode);
    return selectedCategoryList.map((category) => {
      return showMenu3(category);
    });
  };

  const showMenu3 = (category) => {
    return (
      <TouchableHighlight
        key={category.subcategorycode}
        style={styles.touchableButton}
        onPress={() => {
          props.toggleVisible(false);

          dispatch(
            vesselContextActions.setVesselContext(
              props.selectedId,
              category.subcategoryid,
              category.subcategoryname
            )
          );

          navigation.navigate({
            name: "DashboardPanel",
            params: {
              vesselid: props.selectedId,
              moduleName: props.modulename,
              subModule: props.modulecode,
              subcategoryid: category.subcategoryid,
              subcategoryname: category.subcategoryname,
            },
          });

          // props.navigatemodule(
          //   props.selectedId,
          //   props.modulecode,
          //   category.subcategorycode,
          //   category.subcategoryid,
          //   category.subcategoryname
          // );
        }}
      >
        <Text style={{ fontSize: 22, color: "blue" }}>
          {category.subcategoryname}
        </Text>
      </TouchableHighlight>
    );
  };

  const showMenu1 = () => {
    return (
      <View>
        <TouchableHighlight
          style={styles.touchableButton}
          onPress={() => {
            props.toggleVisible(false);
          }}
        >
          <Text style={{ fontSize: 22, color: "blue" }}>Send Message</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableButton}
          onPress={() => {
            props.toggleVisible(false);
          }}
        >
          <Text style={{ fontSize: 22, color: "blue" }}>Send Notification</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableButton}
          onPress={() => {
            props.toggleVisible(false);
          }}
        >
          <Text style={{ fontSize: 22, color: "blue" }}>Notifications</Text>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <Modal
      animationType={"slide"}
      visible={props.isVisible}
      transparent={true}
      onRequestClose={() => {
        console.log("Modal has been closed.");
      }}
    >
      {/*All views of Modal*/}
      {/*Animation can be slide, slide, none*/}
      <Card style={styles.modal}>
        {showContextMenu(props.modulecode)}
        <View style={{ marginBottom: 0 }}>
          <TouchableHighlight
            style={styles.touchableButtonCancel}
            onPress={() => {
              props.toggleVisible(false);
            }}
          >
            <Text style={{ fontSize: 22, color: "red" }}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 50,
    padding: 50,
  },
  buttonMenu: {
    backgroundColor: "blue",
    color: "blue",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    marginTop: Dimensions.get("window").height - 290,
    width: Dimensions.get("window").width,
    borderColor: "red",
    backgroundColor: "white",
  },
  touchableButton: {
    height: 50,
    width: Dimensions.get("window").width - 15,
    borderRadius: 7,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginRight: 5,
  },
  touchableButtonCancel: {
    height: 50,
    width: Dimensions.get("window").width - 15,
    borderRadius: 7,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 25,
    marginRight: 5,
  },
});

export default VesselContextMenu;
