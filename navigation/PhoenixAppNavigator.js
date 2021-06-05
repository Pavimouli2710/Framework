import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import {
  Platform,
  SafeAreaView,
  Button,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import VesselListScreen, {
  screenOptions as vesselListScreenOptions,
} from "../screens/vessel/VesselListScreen";

import DashboardPanel, {
  screenOptions as dashboardPanelScreenOptions,
} from "../components/DashboardPanel";

import DashboardElementPanel, {
  screenOptions as dashboardElementPanelScreenOptions,
} from "../components/DashboardElementPanel";

import AuthScreen, {
  screenOptions as authScreenOptions,
} from "../screens/user/AuthScreen";
import StartupScreen from "../screens/StartupScreen";
import Colors from "../constants/Colors";
import * as authActions from "../store/actions/auth";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const DashboardPanelStackNavigator = createStackNavigator();
export const DashboardPanelNavigator = () => {
  return (
    <DashboardPanelStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <DashboardPanelStackNavigator.Screen
        name="VesselList"
        component={VesselListScreen}
        options={vesselListScreenOptions}
      />
      <DashboardPanelStackNavigator.Screen
        name="DashboardPanel"
        component={DashboardPanel}
        options={dashboardPanelScreenOptions}
      />
      <DashboardPanelStackNavigator.Screen
        name="DashboardElementPanel"
        component={DashboardElementPanel}
        options={dashboardElementPanelScreenOptions}
      />
    </DashboardPanelStackNavigator.Navigator>
  );
};

const ProductTabsNavigator = createBottomTabNavigator();

const ProductAppNavigator = () => {
  return (
    <ProductTabsNavigator.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.accentColor,
        labelStyle: {
          fontSize: 14,
        },
      }}
    >
      <ProductTabsNavigator.Screen
        name="Spares"
        component={DashboardPanelNavigator}
        options={{
          tabBarLabel: "HRMS",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-person" color={color} size={size} />
          ),
        }}
      />
      <ProductTabsNavigator.Screen
        name="Stores"
        component={DashboardPanelNavigator}
        options={{
          tabBarLabel: "Operation",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-grid" color={color} size={size} />
          ),
        }}
      />
      <ProductTabsNavigator.Screen
        name="Service"
        component={DashboardPanelNavigator}
        options={{
          tabBarLabel: "HSEQA",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-menu" color={color} size={size} />
          ),
        }}
      />
    </ProductTabsNavigator.Navigator>
  );
};

const PhoenixDrawerNavigator = createDrawerNavigator();

export const PhoenixAppNavigator = () => {
  const dispatch = useDispatch();

  return (
    <PhoenixDrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: Colors.primaryColor,
                  color: "white",
                  padding: 15,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  Phoenix
                </Text>
                <TouchableHighlight
                  underlayColor="red"
                  onPress={() => {
                    dispatch(authActions.logout());
                  }}
                >
                  <View>
                    <Ionicons name="md-exit" size={26} color="white" />
                  </View>
                </TouchableHighlight>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primaryColor,
        activeBackgroundColor: Colors.accentColor,
        labelStyle: {
          fontSize: 16,
        },
      }}
    >
      <PhoenixDrawerNavigator.Screen
        name="My Vessel"
        component={DashboardPanelNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </PhoenixDrawerNavigator.Navigator>
  );
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={authScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};
