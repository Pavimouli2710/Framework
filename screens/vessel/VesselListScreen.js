import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import VesselItem from "../../components/VesselItem";
import HeaderButton from "../../components/UI/HeaderButton";
import * as vesselActions from "../../store/actions/vessels";
import * as categoryActions from "../../store/actions/categories";
import VesselContextMenu from "../vessel/VesselContextMenu";

import Colors from "../../constants/Colors";

const VesselListScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();

  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [selectedModule, setSelectedModule] = useState();

  const dispatch = useDispatch();

  const loadCategories = useCallback(async () => {
    try {
      await dispatch(categoryActions.fetchCategories());
      await dispatch(categoryActions.fetchModules());
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    loadCategories().then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  const vessels = useSelector((state) => {
    return state.vessels.availableVessels;
  });

  const showMenu = (id, name) => {
    setIsVisible(true);
  };

  const loadVessels = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(vesselActions.fetchVessels());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
    console.log("useEffect::loadVessels:dispatch");
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadVessels().then(() => {
      setIsLoading(false);
    });
    console.log("useEffect::default::isCalled");
  }, [dispatch]);

  const selectItemHandler = (
    vesselid,
    moduleName,
    subModule,
    subcategoryid,
    subcategoryname
  ) => {
    props.navigation.navigate({
      name: "DashboardPanel",
      params: {
        vesselid: vesselid,
        moduleName: moduleName,
        subModule: subModule,
        subcategoryid: subcategoryid,
        subcategoryname: subcategoryname,
      },
    });
  };

  const selectModuleHandler = (item, modulecode) => {
    setSelectedId(item.id);
    setIsVisible(true);
    setSelectedModule(modulecode);
  };

  const navigatemodule = (
    vesselid,
    moduleName,
    subModule,
    subcategoryid,
    subcategoryname
  ) => {
    props.navigation.navigate({
      name: "DashboardPanel",
      params: {
        vesselid: vesselid,
        moduleName: moduleName,
        subModule: subModule,
        subcategoryid: subcategoryid,
        subcategoryname: subcategoryname,
      },
    });
  };

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadVessels}
          color={Colors.primaryColor}
        />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      </View>
    );
  }
  if (!isLoading && vessels.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No vessels found.</Text>
      </View>
    );
  }

  //////////////////////////////////////////////////////
  // FLAT LIST ACTIONS
  /////////////////////////////////////////////////////
  const RightActions = (progress, dragX, itemData) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0],
    });
    return (
      <>
        <TouchableOpacity
          onPress={() => showMenu(itemData.item.id, itemData.item.name)}
        >
          <View
            style={{
              flex: 1,
              padding: 5,
              backgroundColor: Colors.secondaryColor,
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={{
                color: "white",
                padding: 10,
                fontWeight: "600",
                transform: [{ scale }],
              }}
            >
              <Text style={styles.actionText}>More...</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            selectModuleHandler(itemData.item.id, itemData.item.name)
          }
        >
          <View
            style={{
              flex: 1,
              padding: 5,
              backgroundColor: Colors.tertiaryColor,
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={{
                color: "white",
                padding: 10,
                fontWeight: "600",
                transform: [{ scale }],
              }}
            >
              <Text style={styles.actionText}>Details</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const LeftActions = (progress, dragX, itemData) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
    });
    return (
      <TouchableOpacity
        onPress={() => showMenu(itemData.item.id, itemData.item.name)}
      >
        <View
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: Colors.secondaryColor,
            justifyContent: "center",
          }}
        >
          <Animated.View
            style={{
              color: "white",
              padding: 10,
              fontWeight: "600",
              transform: [{ scale }],
            }}
          >
            <Text style={styles.actionText}>More...</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>
    );
  };

  let row = [];
  let prevOpenedRow;

  const closeRow = (index) => {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  };

  const renderItem = (itemData) => (
    <Swipeable
      ref={(ref) => (row[itemData.index] = ref)}
      renderLeftActions={(progress, dragX) => {
        return LeftActions(progress, dragX, itemData);
      }}
      renderRightActions={(progress, dragX) => {
        return RightActions(progress, dragX, itemData);
      }}
      onSwipeableOpen={() => {
        closeRow(itemData.index);
      }}
    >
      <VesselItem
        onSelect={(
          vesselid,
          moduleName,
          subModule,
          subcategoryid,
          subcategoryname
        ) => {
          selectItemHandler(
            vesselid,
            moduleName,
            subModule,
            subcategoryid,
            subcategoryname
          );
        }}
        onModuleSelect={(modulecode) => {
          selectModuleHandler(itemData.item, modulecode);
        }}
        vesseldata={itemData.item}
      ></VesselItem>
    </Swipeable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onRefresh={loadVessels}
        refreshing={isRefreshing}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        data={vessels}
        renderItem={renderItem}
      />
      <VesselContextMenu
        isVisible={isVisible}
        toggleVisible={setIsVisible}
        selectedId={selectedId}
        modulecode={selectedModule}
        navigatemodule={navigatemodule}
      />
    </SafeAreaView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "My Vessel",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="md-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accentColor,
  },
});

export default VesselListScreen;
