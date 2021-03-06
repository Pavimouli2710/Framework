import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import Colors from "./constants/Colors";
import AppNavigator from "./navigation/AppNavigator";

import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./store/reducers/reducers";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

// Edited Comment - Testing Git Commit
// Testing Git Push - pre-push hook
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          return setFontLoaded(true);
        }}
        onError={() => {
          console.log("Error");
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accentColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
