import React from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const CategoryGridTile = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View style={styles.grid}>
          <Ionicons name={props.icon} size={30} />
          <Text>{props.category}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    height: 80,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
});

export default CategoryGridTile;
