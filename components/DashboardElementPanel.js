import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  CheckBox,
  Button,
  Modal,
} from "react-native";
import Constants from "expo-constants";

const data = [
  { id: "1", txt: "first check", isChecked: false },
  { id: "2", txt: "second check", isChecked: false },
  { id: "3", txt: "third check", isChecked: false },
  { id: "4", txt: "fourth check", isChecked: false },
  { id: "5", txt: "fifth check", isChecked: false },
  { id: "6", txt: "sixth check", isChecked: false },
  { id: "7", txt: "seventh check", isChecked: false },
];

const DashboardElementPanel = () => {
  const [products, setProducts] = useState(data);

  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        console.log(id, product.id);
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };

  let selected = products.filter((product) => product.isChecked);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={{ margin: 5 }}>
          <View style={styles.card}>
            <View
              style={{
                margin: 5,
                justifyContent: "space-around",
                flexDirection: "row",
              }}
            >
              <CheckBox
                value={item.isChecked}
                onChange={() => {
                  handleChange(item.id);
                }}
              />
            </View>
            <View>
              <Text>{item.txt}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },

  card: {
    margin: 5,
    flexDirection: "row",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DashboardElementPanel;
