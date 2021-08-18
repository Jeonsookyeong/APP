import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Screeen = (navigation) => {
  // console.log(navigation);
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 30 }}>Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Screeen;
